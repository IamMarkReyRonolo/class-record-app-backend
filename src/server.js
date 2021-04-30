const express = require("express");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB CONNECTION
const database = require("./database/database");

database
	.authenticate()
	.then(() => {
		console.log("Connected to database");
	})
	.catch((err) => {
		console.log(err);
	});

// ROUTES
const studentAPI = require("./apis/studentAPI");

app.use("/api/students", studentAPI);

// ERROR - HANDLING
app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	error.status = error.status || 500;
	res.json(error.message);
});

// LISTEN
app.listen(process.env.PORT || 5000, () => {
	console.log("Server is listening");
});
