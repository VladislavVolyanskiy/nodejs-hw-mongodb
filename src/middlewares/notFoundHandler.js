import createHttpError from 'http-errors';

export const notFoundMiddleware = (req, res, next) => {
  return next(createHttpError(404, 'Not found'));
};

// export const notFoundMiddleware = (req, res, next) => {
//   res.status(404).json({ message: 'Route not found' });
// };
