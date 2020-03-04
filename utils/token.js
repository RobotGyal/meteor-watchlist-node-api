const jwt = require('jsonwebtoken');
const dotenv =require('dotenv');
require('dotenv').config()


const key = process.env.KEY;

const Token = ({ id }) => jwt.sign(
  { id },
  key,
  { expiresIn: '2h' },
);

module.exports = mongoose.model("Token", Token);