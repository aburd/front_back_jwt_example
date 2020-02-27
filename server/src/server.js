const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/users')
const loginRoutes = require('./routes/login')

app.use(morgan('combined'))
app.use(bodyParser.json())

// Routing
app.use('/api/users', userRoutes)
app.use('/api/login', loginRoutes)

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})

