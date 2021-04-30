const { Sequelize } = require("sequelize");

const database = new Sequelize("class_record_db", "postgres", "test123", {
	host: "localhost",
	dialect: "postgres",
});

module.exports = database;
