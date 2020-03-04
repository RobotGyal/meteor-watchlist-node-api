// Requirements
const dotenv =require('dotenv');
require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const exhdbs = require('express-handlebars')
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(cookieParser()); // Add this after you initialize express.



// Handlebars
app.engine('handlebars', exhdbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Database - Watchlist
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
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


const watchlistRouter = require('./controllers/watchlist')
app.use('/watchlist', watchlistRouter)

app.get('/', (req, res) => {
    res.send("Homepage")
});







app.post('/login', (req, res) => {
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


// VErify Token
function verifyToken(req, res, next){
    // get auth header
    const bearerHeader = req.headers['auth'];
    // Check if bearer is undefined
    if( typeof bearerHeader !== 'undefined'){
        pass
    } else{
        // Forbidden
        res.sendStatus(403)
    }
}













//Controller
// require('./controllers/user.js')(app);


app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});