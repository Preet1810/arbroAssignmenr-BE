import express from "express";
import { getStudents, createStudent, deleteStudent } from "../controllers/student.controller.js";
const router=express.Router();


router.route("/").get(getStudents);

router.route("/").post(createStudent);

router.route("/:id").delete(deleteStudent);

export default router;

