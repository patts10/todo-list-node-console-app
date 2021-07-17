require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {

  console.clear();

  let opt = '';
  const tareas = new Tareas();

  do {

    opt = await inquirerMenu();
    console.log({ opt });

    
    console.log(tareas);

    if( opt !== '0' ) await pausa();
    
  } while ( opt !== '0');

}

main();