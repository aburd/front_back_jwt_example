const express = require('express')
const app = express()

const userRoutes = require('./routes/users')

app.use('/api/users', userRoutes)

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})

