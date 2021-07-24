require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {

  console.clear();

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if( tareasDB ) {
    //*Establecer las tareas
    tareas.cargarTareasFromArray( tareasDB );
  }


  do {

    // *Print menu and get option
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //?Create option
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea( desc );
        // console.log(desc);        
      break;
      case '2':
        // console.log( tareas.listadoArr );
        tareas.listadoCompleto();
      break;
      case '3': //list complete tasks
        tareas.listarpendientesCompletadas();
      break;
      case '4': //list imcomplete tasks
        tareas.listarpendientesCompletadas( null );
      break;
      case'6': //delete
      const id = await listadoTareasBorrar( tareas.listadoArr );
      if( id !== '0' ){
        const ok = await confirmar('¿Está seguro?');
        
        if( ok ) {
          tareas.borrarTarea( id );
          console.log('Tarea borrada');
        }
      }
      break;
    }

    if( opt !== '0' ) await pausa();

    guardarDB( tareas.listadoArr );
    
  } while ( opt !== '0');

}

main();