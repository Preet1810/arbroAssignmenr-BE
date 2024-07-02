import express from "express";
const router=express.Router();

import studentRoutes from "../routes/student.routes.js"

router.use("/api/student", studentRoutes);

router.get("/", (req, res) => res.send({ error: false, message: "Arbro assignment Server IS LIVE!", result: null }))
router.get("*", (req, res) => res.status(404).send({ error: true, message: "Route not Found!", result: null }))

export default router;
