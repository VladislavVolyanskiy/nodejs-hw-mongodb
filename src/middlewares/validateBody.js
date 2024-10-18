import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    // console.log('Validation Error:', err.details);
    const errors = err.details.map((detail) => ({
      message: detail.message, // for joi errors,
      path: detail.path.join('.'),
    }));
    const error = createHttpError(400, 'Validation Error', { errors });
    next(error);
  }
};
