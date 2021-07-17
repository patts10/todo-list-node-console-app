const fs = require('fs');

const guardarDB = ( data ) => {

  const archivo = './db/data.json';

  fs.writeFileSync( archivo, data );

} 

module.exports = {
  guardarDB
}