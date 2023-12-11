const express = require('express')
const app = express()
const port = 3000

const router = require('./routes/index')
const errorMdlware = require('./middlewares/errors.mdware')
const logger = require('./utils/logger')

app.use(express.json())
app.use('/', logger, router)
app.use(errorMdlware.errorHandler)

app.listen(port, () => {
    console.log(`Server listening on ${port}...`)
})