import express from 'express';
import config from './middleware/index.js';

import indexRouter from './routes/index.js'
import authorizationRouter from './routes/authorization.js';

const app = express();
config(app);

app.use('/rest', indexRouter);
app.use('/api', authorizationRouter);

export default app;
