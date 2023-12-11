const express = require('express')

const statisticsMdware = require('../middlewares/statistics.mdware')
const statisticsController = require('../controllers/statistics')

const router = express.Router()

router.get('/', statisticsController.getStatisticsList)
router.get('/worst', statisticsController.getWorst)
router.get('/:name/', statisticsController.getStatisticByName)
router.post('/:name', statisticsMdware.validateBody, statisticsController.createStatistic)
router.patch('/:name', statisticsMdware.validateBody, statisticsController.updateStatistic)
router.delete('/:name', statisticsController.deleteStatistic)

module.exports = router