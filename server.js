const express = require('express');
const path = require('path');
const logger = require('morgan');

// load the env vars
require('dotenv').config();

// connect to DB
require('./config/database');

// load routers
const apiRouter = require('./routes/api/api');
const employeesRouter = require('./routes/employees');
const shiftsRouter = require('./routes/shifts');
const punchesRouter = require('./routes/punches');
const requestsRouter = require('./routes/requests');

// create server
const app = express();

// mount middleware and configure static assets
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// routes
app.use('/api', apiRouter);
app.use('/employees', employeesRouter);
app.use('/shifts', shiftsRouter);
app.use('/', punchesRouter);
app.use('/requests', requestsRouter);

// catch all route, REACT client-side routing
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.port || 3001;

app.listen(port, () => {
    console.log(`Express app running on port ${port}`);
})


