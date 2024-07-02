import mongoose from "mongoose";

const certificationSchema=new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    title: String,
    institution: String,
    dateAwarded: Date
}, {
    timestamps: true
})

export default mongoose.model("Certification", certificationSchema);
