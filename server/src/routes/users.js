const express = require('express')
const router = express.Router();
const faker = require('faker')

const users = [...Array(10).keys()].map(id => ({
    id,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
}))

router.get('/', (req, res) => {
    res.json({ users })
})

router.get('/:id', (req, res) => {
    res.json({ user: users.find(u => u.id == req.params.id) })
})

module.exports = router