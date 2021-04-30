const sequelize = require("sequelize");
const database = require("../database/database");

const Course = database.define();

module.exports = Course;
