import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies["connect.sid"];
  if (!token) {
    return next(new ErrorHandler("Not Logged In", 401));
  }
  next();
};
export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorHandler("Only Admin Allowed", 405));
  }
  next();
};










//These middleware functions help enhance the security and control of your application by ensuring that only authenticated users (in the case of isAuthenticated)
// or authorized users with specific roles (in the case of authorizeAdmin) can access certain parts of 
//your application. They can be applied to routes or route handlers where the authorization or authentication 
//check is required.




