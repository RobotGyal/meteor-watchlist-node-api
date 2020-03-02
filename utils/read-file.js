const csvjson = require('csvjson');
const fs= require('fs');

var data = fs.readFileSync('api_meteor_data.csv', { encoding : 'utf8'});


var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };
  
data = JSON.stringify(data)



module.exports.data=data
