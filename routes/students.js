const express = require('express')

const studentsMdware = require('../middlewares/students.mdware')
const studentsController = require('../controllers/students')

const router = express.Router()

router.get('/', studentsController.getStudentsList)
router.get('/:email/', studentsController.getStudentByEmail)
router.post('/', studentsMdware.validateBody, studentsController.createStudent)
router.patch('/:name', studentsMdware.validateBody, studentsController.updateStudent)
router.delete('/:email', studentsController.deleteStudent)

module.exports = router