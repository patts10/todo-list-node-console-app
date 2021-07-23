
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
     
   }


 }

 module.exports = Tareas;