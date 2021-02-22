
let funcionalidadTareas = require('./funcionalidadTareas.js');

let accion = process.argv[2];
let tituloTerminal = process.argv[3];
let estadoTerminal = process.argv[4];
let filtroEstado = process.argv[3];


switch(accion) {
    case 'listar':
      funcionalidadTareas.listar();
        break;

        
    case 'crear':
        funcionalidadTareas.agregar(tituloTerminal,estadoTerminal);

        break;    

    case 'filtrar':
       funcionalidadTareas.filtrar(filtroEstado);
        break;
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar, ');
        break;
}
