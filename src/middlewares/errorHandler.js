import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandlerMiddleware = (err, req, res, next) => {

  if (isHttpError(err)) {
    return res.status(err.status).json({
      // error: err.name,
      message: err.message,
      errors: err.errors || [], // for joi errors, custom
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

// import createHttpError from 'http-errors';

// export const errorHandlerMiddleware = (err, req, res, next) => {
//   if (err instanceof createHttpError) {
//     res.status(err.status).json({
//       status: err.status,
//       message: err.name,
//       data: err,
//     });
//     return;
//   }
//   res.status(500).json({
//     message: 'Something went wrong',
//     data: err.message,
//   });
// };
