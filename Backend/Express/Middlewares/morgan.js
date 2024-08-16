import morgan from 'morgan';
import express from 'express';
const app = express();

app.use(morgan('combined')); // Logs requests in 'combined' format
