const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { superSecretKey } = require('../lib')

// A fake login, so we'll just make the logins static...
const users = [
    {
        username: 'foo',
        password: 'bar',
    },
    {
        username: 'micheal',
        password: 'jackson',
    }
]

function authenticate(username, password) {
    const user = users.find(u => u.username === username)
    if(!user) return false
    if(user.password !== password) return false
    return true
}

router.post('/', (req, res) => {
    const token = jwt.sign({ foo: 'bar' }, superSecretKey)
    const { username, password } = req.body
    if(!(username && password)) {
        res.status(422)
        res.json({ 
            message: 'Username and password are required',
            ok: false,
        })
    }

    const loginOk = authenticate(username, password)
    if(loginOk) {
        res.json({ 
            token,
            ok: true,
        })
    } else {
        res.status(503)
        res.json({ 
            message: 'Username and password are incorrect',
            ok: false,
        })
    }
})

module.exports = router