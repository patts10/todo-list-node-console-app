
const Tarea = require("./tarea");
const colors = require('colors');

/**
 ** _listado:
 **    { 'uuid-16524536-2: { id:12, desc: asd, completadoE:978798 } }
 */


 class Tareas {
   _listado = {};

   get listadoArr() {

    const listado = [];
    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key]
      listado.push( tarea );
    })

    return listado;

   }

   constructor() {
     this._listado = {};
   }

   borrarTarea( id ) {

    if ( this._listado[id] ) {
      delete this._listado[id];
    }
   }

   cargarTareasFromArray( tareas = [] ) {

    tareas.forEach( tarea => {
      this._listado[tarea.id] = tarea
    })
     
   }

   crearTarea( desc = '') {

    const tarea = new Tarea( desc); 
    this._listado[tarea.id] = tarea;

   }

   listadoCompleto() {

    console.log();
    this.listadoArr.forEach( (tarea, id) => {

      const idx = `${id + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = ( completadoEn)
                        ? 'Completada'.green
                        : 'Pendiente'.red;
      console.log((`${idx} ${desc} :: ${ estado }`));
    });
  }
  
  listarpendientesCompletadas( completadas = true ) {

    console.log();
    let idx = 0;
    this.listadoArr.forEach( tarea => {
      const { desc, completadoEn } = tarea;
      const estado = ( completadoEn )
                        ? 'Completada'.green
                        : 'Pendiente'.red;
      if( completadas ) {

        if (completadoEn) {
          idx ++;
          console.log((`${(idx + '.').green} ${desc} :: ${ estado }`));
        }
      } else {
        if (!completadoEn) {
          idx ++;
          console.log((`${(idx + '.').green} ${desc} :: ${ estado }`));
        }
      }
    });
    idx = 0;
   }


 }

 module.exports = Tareas;