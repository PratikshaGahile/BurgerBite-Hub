export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
  
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };
  
  export const asyncError = (passedFunction) => (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
  };
  


  
  //to handle the error 

  //In summary, these middleware functions help you handle errors more consistently and robustly in your Express.js application. 
  //errorMiddleware centralizes error handling and formatting of error responses. 
  //asyncError helps handle asynchronous errors, especially when working with promises. 
  //passedFunction is a placeholder for the middleware or function you want to execute asynchronously and
  // is used in conjunction with asyncError