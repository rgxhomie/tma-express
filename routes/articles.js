const express = require('express')

const articlesMdware = require('../middlewares/articles.mdware')
const articlesController = require('../controllers/articles')

const router = express.Router()

router.get('/', articlesController.getArticlesList)
router.get('/:name/', articlesController.getArticleByName)
router.post('/', articlesMdware.validateBody, articlesController.createArticle)
router.patch('/:name', articlesMdware.validateBody, articlesController.updateArticle)
router.delete('/:name', articlesController.deleteArticle)

module.exports = router