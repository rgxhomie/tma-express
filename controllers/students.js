const student = require('../models/students');

function getStudentsList (req, res) {
    res.send(student.getAll())
}

function getStudentByEmail (req, res) {
    res.send(student.getByEmail(req.params.email))
}

function createStudent (req, res) {
    student.create(req.body);
    res.send('Student created')
}

function updateStudent (req, res) {
    student.upd(req.params.name, req.body)
    res.send('Student updated')
}

function deleteStudent (req, res) {
    student.del(req.params.email)
    res.send('Students deleted')
}

module.exports = {
    getStudentsList,
    getStudentByEmail,
    createStudent,
    updateStudent,
    deleteStudent
}