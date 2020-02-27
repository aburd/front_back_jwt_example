const superSecretKey = 'i am a secrettttt'

const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const [_, token] = header.split(' ');
        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}

module.exports = {
    superSecretKey,
    checkToken,
}