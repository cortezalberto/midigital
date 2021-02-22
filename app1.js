//Requerir los módulos necesarios
//Nativos , propios o de Terceros

// Declarar todas las variables necesarias
// ESTA ES LA LOGICA DE NUESTRO PROGRAMA PRINCIPAL

switch(accion) {
    case 'listar':
     // LLAMAMOS A LA FUNCIONALIDAD LISTAR
        break;

        
    case 'crear':
        // LLAMAMOS A LA FUNCIONALIDAD CREAR
        break;    

    case 'filtrar':
       // LLAMAMOS A LA FUNCIONALIDAD FILTRAR POR ALGUN CRITERIO
        break;
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar, ');
        break;
}
