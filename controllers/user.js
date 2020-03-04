const express = require('express')
const router = express.Router()

module.exports = (app) => {
router.post('/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'leona',
        email: 'leona@mail.com'
    }

    jwt.sign({user:user}, 'secretkey', (err, token) =>{
        res.json({
            token
        })
    }) 
});


// Verify Token
function verifyToken(req, res, next){
    // get auth header
    const bearerHeader = req.headers['auth'];
    // Check if bearer is undefined
    if( typeof bearerHeader !== 'undefined'){
        // Split token 
        const bearer = bearerHeader.split(" ")
        // get token from split array
        const bearerToken = bearer[1]
        // Set token
        req.token = bearerToken
        next()
    } else{
        // Forbidden
        res.sendStatus(403)
    }
} 
router
}

// module.exports = {router, verifyToken=function()}