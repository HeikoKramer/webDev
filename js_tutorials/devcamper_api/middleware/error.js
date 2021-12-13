const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  console.log('ERRORNAME:', err.name);
  console.log('ERRORCODE:', err.code);
  console.log('ERROR:', err);

  // Mongose bad ObjectId
  if(err.name === 'CastError') {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if(err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose ValidatonError
  if(err.name === 'ValidationError') {
    const message = 'Please add required fields: ' + Object.values(err.errors).map(val => val.path);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;

