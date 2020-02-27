const express = require('express')
const app = express()
const morgan = require('morgan')

const userRoutes = require('./routes/users')

// Logging
app.use(morgan('combined'))

// Routing
app.use('/api/users', userRoutes)

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})

