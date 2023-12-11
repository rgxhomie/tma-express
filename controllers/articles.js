const article = require('../models/articles');

function getArticlesList (req, res) {
    res.send(article.getAll())
}

function getArticleByName (req, res) {
    res.send(article.getById(req.params.name))
}

function createArticle (req, res) {
    article.create(req.body);
    res.send('Article created')
}

function updateArticle (req, res) {
    article.upd(req.params.name, req.body)
    res.send('Article updated')
}

function deleteArticle (req, res) {
    article.del(req.params.name)
    res.send('Articles deleted')
}

module.exports = {
    getArticlesList,
    getArticleByName,
    createArticle,
    updateArticle,
    deleteArticle
}