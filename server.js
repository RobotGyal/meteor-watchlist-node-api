// Requirements
const dotenv = require('dotenv');
require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const exhdbs = require('express-handlebars')
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(cookieParser()); // Add this after you initialize express.

// For deployment
const mongo_uri = process.env.MONGODB_URI
mongoose.connect(mongo_uri)

// Handlebars
app.engine('handlebars', exhdbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Database - Watchlist
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database 1 connected : Watchlist'))

// //Databse - Meteors from dataset
// const tester = mongoose.connection
// tester.on('error', (error) => console.error(error))
// tester.once('open', () => console.log('Database 2 connected : Dataset Meteors'))

// Middleware - express
app.use(express.json())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

// For retrieving token
app.post('/auth', (req, res) => {
    // Mock user
    const user = {
        id: 2,
        username: 'leona',
        email: 'leona@mail.com'
    }   

    jwt.sign({
        user
    }, 'secretkey', (err, token) => {
        res.json({
            token
        })
    })
});


app.get('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.send("Homepage")
        }
    })
});



const watchlistRouter = require('./controllers/watchlist')
app.use(verifyToken)
app.use('/watchlist', watchlistRouter)

// const userRouter = require('./controllers/user')
// app.use('/login', userRouter)


// Verify Token
function verifyToken(req, res, next) {
    // get auth header
    const bearerHeader = req.headers['auth'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split token 
        const bearer = bearerHeader.split(" ")
        // get token from split array
        const bearerToken = bearer[1]
        // Set token
        req.token = bearerToken
        next()
    } else {
        // Forbidden
        res.status(403).send("Forbidden: This route is only available to authenticated users")
    }
}













//Controller
// require('./controllers/user.js')(app);
const port = process.env.PORT
// app.listen(port)

app.listen(port, () => {
    console.log('Example app listening on port 8000!')
});