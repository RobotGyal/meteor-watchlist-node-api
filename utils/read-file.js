const csvjson = require('csvjson');
const fs= require('fs')

// readFile('./api_meteor_data.csv', 'utf-8', (err, fileContent) => {
//     if(err) {
//         console.log(err); // Do something to handle the error or just throw it
//         throw new Error(err);
//     }
//     const data = csvjson.toObject(fileContent);
//     // console.log(data);
//     // console.log('read file')
// });
// console.log(data)

// // module.exports = { data: 'data'};
// // module.exports.data=data


var data = fs.readFileSync('api_meteor_data.csv', { encoding : 'utf8'});


var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };

  csvjson.toObject(data, options);

module.exports.data=data
