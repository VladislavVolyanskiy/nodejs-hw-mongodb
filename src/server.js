import express from 'express';
// import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import contactsRouter from './routers/contacts.js';
import { notFoundMiddleware } from './middlewares/notFoundHandler.js';
import { errorHandlerMiddleware } from './middlewares/errorHandler.js';

const PORT = Number(env('PORT', '3000'));

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
    }),
  );

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //       options: {
  //         colorize: true,
  //       },
  //     },
  //   }),
  // );

  app.use(contactsRouter);

  app.use('*', notFoundMiddleware);

  app.use(errorHandlerMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;
