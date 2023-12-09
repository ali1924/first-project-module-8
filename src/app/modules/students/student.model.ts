import { Schema } from 'mongoose'
import { Student } from './student.interface'

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  profileImage: { type: String },
  isActive: ['active', 'inActive'],
})
