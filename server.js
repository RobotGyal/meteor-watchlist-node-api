const express = require('express')
const r_file = require('./utils/read-file')
const app = express();
// const data = r_file.data

app.get('/', (req, res) => {
    res.send(r_file.data)
  });
  
  app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });
