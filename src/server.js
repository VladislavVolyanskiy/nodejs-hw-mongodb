import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import router from './routers/index.js';
import cookieParser from 'cookie-parser';
import { env } from './utils/env.js';
import { notFoundMiddleware } from './middlewares/notFoundHandler.js';
import { errorHandlerMiddleware } from './middlewares/errorHandler.js';

const PORT = Number(env('PORT', '3001'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(router);

  app.use('*', notFoundMiddleware);

  app.use(errorHandlerMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
