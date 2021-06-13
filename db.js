require('dotenv').config();
const { Sequelize } = require('sequelize');

// const db = new Sequelize(process.env.DB_CONNECTION_STRING);

// For Sequelize v6 Heroku Connection
const db = new Sequelize(process.env.DB_CONNECTION_STRING, {  // HEROKU DEPLOYMENT
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
})

module.exports = db;