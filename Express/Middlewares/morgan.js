const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('combined')); // Logs requests in 'combined' format
