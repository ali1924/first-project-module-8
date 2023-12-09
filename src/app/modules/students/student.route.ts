import express from 'express'
import { StudentControllers } from './student.controller'

//will call controller function
const router = express.Router()

//create student
router.post('/create-student', StudentControllers.createStudent)

export const StudentRoutes = router
