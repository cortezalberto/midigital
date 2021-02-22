let operacionesArchivos = require('./operacionesArchivo');
let tareas = operacionesArchivos.leerArchivoJson();

let funcionalidadTareas = {

    // Lista todas las tareas
    listar: function () {
        console.log();
        console.log('Listado de tareas Domingo');
        console.log('----------------');
/*
             for (let index = 0; index < tareas.length; index++) {
                 console.log(tareas[index].titulo);
           };


       tareas.forEach((tarea, index) => {
           console.log((index + 1) + '. ' + tarea.titulo + ' -> ' + tarea.estado);
       });

       */

      tareas.forEach(i => {
        console.log(i.titulo + ' -> ' + i.estado);
      });

    },
    // Agrega una Tarea que recibe de la terminal
    agregar: function (tituloTerminal, estadoTerminal) {

        let tareaNueva =
        {
            titulo: tituloTerminal,
            estado: estadoTerminal
        };

        console.log();
        console.log('Nueva tarea creada');
        console.log('------------------');

        console.log(tareaNueva.titulo);
        console.log(tareaNueva.estado);
        tareas.push(tareaNueva);
        this.listar();
        this.grabar();
    },
    // Graba la tarea en el JSon
    grabar: function () {
        operacionesArchivos.grabarUnJson(JSON.stringify(tareas));

    },
    // Realiza una búsqueda en el JSON según el filtro del estado de la terminal
    filtrar: function (filtroEstado) {
        console.log();
        console.log('Tareas ' + filtroEstado);
        console.log('------------------');

       // let filtradas = operacionesArchivos.leerPorEstado(filtroEstado);

        let tareas = operacionesArchivos.leerArchivoJson();
        // filtro por estado de la tarea
        let tareasFiltradas = tareas.filter((tareas) => {
            return tareas.estado == filtroEstado;
        });



        tareasFiltradas.forEach((tarea) => {
            console.log(tarea.titulo)
        });

    }
}

module.exports = funcionalidadTareas;
