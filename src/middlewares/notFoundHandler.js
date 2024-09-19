import createHttpError from 'http-errors';

export const notFoundMiddleware = (req, res, next) => {
  return next(createHttpError(404, 'Route not found'));
};

// export default function notFoundHandler(req, res, next) {
//   res.status(404).send({ status: 404, message: 'Route not found' });
// }

// export const notFoundMiddleware = (req, res, next) => {
//   res.status(404).json({ message: 'Route not found' });
// };
