import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Response } from "../utils/Response.js";
import Student from "../models/studentInfo/student.model.js";
import FamilyMember from "../models/studentInfo/familyMember.model.js";
import Certification from "../models/studentInfo/certication.model.js";

export const createStudent=catchAsyncErrors(async (req, res, next) => {
    const { name, fatherName, motherName, email, address, familyMembers, certifications }=req.body;
    const student=await Student.create({ name, fatherName, motherName, email, address });

    // Create family members
    const familyMemberDocs=familyMembers.map(member => ({
        studentId: student._id,
        ...member
    }));
    const familyMemberResults=await FamilyMember.insertMany(familyMemberDocs);

    student.familyMembers=familyMemberResults.map(member => member._id);

    // Create certifications
    const certificationDocs=certifications.map(cert => ({
        studentId: student._id,
        ...cert
    }));
    const certificationResults=await Certification.insertMany(certificationDocs);
    student.certifications=certificationResults.map(cert => cert._id);

    await student.save();

    Response(res).status(201).message("Student Created Successfully").body(student).send();
})


export const getStudents=catchAsyncErrors(async (req, res, next) => {
    const students=await Student.find();
    Response(res).status(201).message("students found Successfully").body(students).send();
});


export const deleteStudent=catchAsyncErrors(async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    Response(res).status(201).message("Student Deleted Successfully").send();
})