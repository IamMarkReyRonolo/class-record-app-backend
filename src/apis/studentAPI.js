const express = require("express");
const studentController = require("../controllers/StudentController");
const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getSpecificStudent);
router.post("/", studentController.addStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
