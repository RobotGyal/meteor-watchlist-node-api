
// const express = require('express')
// const router = express.Router()


// router.post('/login', (req, res) => {
//     // Mock user
//     const user = {
//         id: 1,
//         username: 'leona',
//         email: 'leona@mail.com'
//     }

//     jwt.sign({user:user}, 'secretkey', (err, token) =>{
//         resizeBy.json({
//             token
//         })
//     }) 
// });


// // VErify Token
// function verifyToken(req, res, next){
//     // get auth header
//     const bearerHeader = req.headers['auth'];
//     // Check if bearer is undefined
//     if( typeof bearerHeader !== 'undefined'){
//         pass
//     } else{
//         // Forbidden
//         res.sendStatus(403)
//     }
// }