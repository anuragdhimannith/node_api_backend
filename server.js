const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');


// Load the evironment variables....
dotenv.config({ path: './config/config.env' });

// connect to database(mongooDB);
connectDB();

// Route files...
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount the routers.....
app.use('/api/v1/bootcamps',bootcamps);

const PORT = process.env.PORT || 5000;


const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
// Handle the unhandled rejection....

process.on('unhandledRejection',(err,promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});