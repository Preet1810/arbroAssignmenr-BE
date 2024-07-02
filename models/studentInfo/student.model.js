import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        addressLine1: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        }
    },
    familyMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FamilyMember'
    }],
    certifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Certification'
    }],
}, {
    timestamps: true
})


export default mongoose.model("Student", studentSchema);
