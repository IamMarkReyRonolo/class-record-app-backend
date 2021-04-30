const Student = require("../models/Student");

const getAllStudents = (req, res, next) => {
	Student.findAll()
		.then((result) => {
			res.status(200).json({
				count: result.length,
				data: {
					result,
				},
			});
		})
		.catch((err) => {
			next(err);
		});
};

const getSpecificStudent = (req, res, next) => {
	Student.findByPk(req.params.id)
		.then((result) => {
			if (result) {
				res.status(200).json(result);
			} else {
				const error = new Error("Not Found");
				error.status = 404;

				next(error);
			}
		})
		.catch((err) => {
			next(err);
		});
};

const addStudent = (req, res, next) => {
	const student = req.body;

	Student.create(student)
		.then((result) => {
			res.status(201).json({ message: "Success!", result: result });
		})
		.catch((err) => next(err));
};

const updateStudent = (req, res, next) => {
	Student.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((result) => {
			if (result) {
				res.status(200).json({ message: "Successfully updated" });
			} else {
				const error = new Error("Not Found");
				error.status = 404;
				next(error);
			}
		})
		.catch((err) => {
			next(err);
		});
};

const deleteStudent = (req, res, next) => {
	Student.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((result) => {
			if (result) {
				res.status(200).json({ message: "Successfully deleted!" });
			} else {
				const error = new Error("Not Found!");
				error.status = 404;

				next(error);
			}
		})
		.catch((err) => {
			next(err);
		});
};

module.exports = {
	getAllStudents,
	getSpecificStudent,
	addStudent,
	updateStudent,
	deleteStudent,
};
