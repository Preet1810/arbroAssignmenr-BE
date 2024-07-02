import mongoose from "mongoose";

const FamilyMember=new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    name: String,
    relationship: String,
    age: Number
}, {
    timestamps: true
})

export default mongoose.model("FamilyMember", FamilyMember);
