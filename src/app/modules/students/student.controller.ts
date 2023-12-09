import { Request, Response } from 'express'
import { StudentServices } from './student.servies'

const createStudent = (req: Request, res: Response) => {
  try {
    //1. get data from client body
    const student = req.body
    //   2. will call service function to send this data in DB
    const result = StudentServices.createStudentIntoDB(student)
    //3. res send
    res.status(200).send({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentControllers = {
  createStudent,
}
