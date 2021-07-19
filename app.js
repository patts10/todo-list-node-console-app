require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {

  console.clear();

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if( tareasDB ) {
    //?Establecer las tareas
  }

  await pausa();

  do {

    // ?Print menu and get option
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //?Create option
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea( desc );
        // console.log(desc);        
      break;
      case '2':
        console.log( tareas.listadoArr );
      break;
    }

    if( opt !== '0' ) await pausa();

    // guardarDB( tareas.listadoArr );
    
  } while ( opt !== '0');

}

main();