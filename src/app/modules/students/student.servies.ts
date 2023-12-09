import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (student: Student) => {
  //1. call model.create function and pass student
  const result = await StudentModel.create(student)
  //   2. return result
  return result
}

export const StudentServices = {
  createStudentIntoDB,
}
