import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import createDebug from 'debug';
import { usersRouter } from './routers/users.routers.js';
import { errorMiddleware } from './middleware/error.middleware.js';

const debug = createDebug('w7E:app');

export const app = express();
debug('Starting');

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static('public'));

app.use('/users', usersRouter);
app.use(errorMiddleware);
