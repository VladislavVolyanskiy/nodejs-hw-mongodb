import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandlerMiddleware = (err, req, res, next) => {

  if (isHttpError(err)) {
    return res.status(err.status).json({
      // error: err.name,
      message: err.message,
    });
  }

  if (err instanceof MongooseError) {
    return res.status(500).json({
      message: 'MongooseError',
      error: err.name,
    });
  }

  res.status(500).json({
    message: 'Something wrong on our side',
    error: err.message,
  });
};

// export const errorHandlerMiddleware = (err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// };
