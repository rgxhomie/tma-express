const express = require('express')
const studentsRouter = require('./students')
const statisticsRouter = require('./statistics')
const articlesRouter = require('./articles')

const router = express.Router()

router.use('/students', studentsRouter)
router.use('/statistics', statisticsRouter)
router.use('/articles', articlesRouter)


module.exports = router