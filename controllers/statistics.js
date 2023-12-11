const statistic = require('../models/statistics');

function getStatisticsList (req, res) {
    res.send(statistic.getAll())
}

function getStatisticByName (req, res) {
    res.send(statistic.getById(req.params.name))
}

function createStatistic (req, res) {
    statistic.create(req.body);
    res.send('statistic created')
}

function updateStatistic (req, res) {
    statistic.upd(req.params.name, req.body)
    res.send('statistic updated')
}

function deleteStatistic (req, res) {
    statistic.del(req.params.name)
    res.send('statistics deleted')
}

function getWorst (req, res) {
    res.send(statistic.worst())
}

module.exports = {
    getStatisticsList,
    getStatisticByName,
    createStatistic,
    updateStatistic,
    deleteStatistic,
    getWorst
}