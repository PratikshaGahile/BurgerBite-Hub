import express, { urlencoded }  from "express"; 
import dotenv from "dotenv";
import {connectPassport} from "./utils/Provider.js";
import session from "express-session";
import pkg from"passport";
//import  passport from "passport"; 
import cookieParse from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors";


//intialize the express application 
const app =express(); 
export default app; 


// Configuration with the dotenv
dotenv.config({
    path:"./config/config.env",
});

// using the middleware 
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
      secure: process.env.NODE_ENV === "development" ? false : true,
      httpOnly: process.env.NODE_ENV === "development" ? false : true,
      sameSite: process.env.NODE_ENV === "development" ? false : "none",
    },
  })
);
   
//middleware parse the cookies from the incomming  data 
app.use(cookieParse());  

// middleware parse the incomming data into json data 
app.use(express.json());

//middleware are use by using the app .use () or route.use() statement 
// parse the encoded  data from the incoming request 
app.use(
  urlencoded({
    extended:true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);



//5. Passport Authentication session 
//Passport is the authentication library of Node.js 

//passport used the session based authentication 
app.use(pkg.authenticate("session"));
app.use(pkg.initialize());
app.use(pkg.session());
app.enable("trust proxy");

connectPassport();


//8. Import an use the user and order route 
import userRoutes from "./routes/user.js"; 
import orderRoutes from "./routes/order.js"; 

app.use("/api/v1", userRoutes);  
app.use("/api/v1", orderRoutes);  


//using th error middleware  
// it will handle the error that occure during the request processing 

app.use(errorMiddleware);




// in  summary this code setup the various middleware for session ,management ,
//authentication using th epassport.js which is the Node.js library 
//cors handling and th eerror handling 
//It also imports and uses route handlers to define API endpoints for user 
//and order-related operations. The application is configured to read environment 
//variables from a .env file for configuration