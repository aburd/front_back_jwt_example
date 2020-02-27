const express = require('express')
const router = express.Router();
const faker = require('faker')
const jwt = require('jsonwebtoken')
const { superSecretKey, checkToken } = require('../lib')

const users = [...Array(10).fill(0).map((_, i) => i + 1)].map(id => ({
    id,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
}))

router.get('/', checkToken, (req, res) => {
    var decoded = jwt.verify(req.token, superSecretKey);
    console.log('decoded', decoded)
    res.json({ users })
})

router.get('/:id', checkToken, (req, res) => {
    var decoded = jwt.verify(req.token, superSecretKey);
    res.json({ user: users.find(u => u.id == req.params.id) })
})

module.exports = router