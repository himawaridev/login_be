// IMPORT DOTENV TU CONFIG
require("dotenv").config();
const mysql = require("mysql2/promise");   //KAHI BAO BIEN CH THU VIEN SQL2 TU NPM


// TAO KET NOI VOI DATABASE (PROCESS IMPORT TU FILE .ENV)
const connection = mysql.createPool({  
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;