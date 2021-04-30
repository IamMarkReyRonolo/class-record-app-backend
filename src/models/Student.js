const sequelize = require("sequelize");
const database = require("../database/database");

const Student = database.define(
	"Student",
	{
		first_name: {
			type: sequelize.STRING,
			allowNull: false,
		},
		last_name: {
			type: sequelize.STRING,
			allowNull: false,
		},
		course: {
			type: sequelize.STRING,
			allowNull: false,
		},
		year: {
			type: sequelize.NUMBER,
			allowNull: false,
		},
	},
	{ tableName: "students" }
);

module.exports = Student;
