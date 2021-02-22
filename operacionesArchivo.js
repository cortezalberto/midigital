

// Requiero el módulo nativo
const fs = require('fs');
// Defino un objeto literal
let operacionesArchivos =
{
    archivo: 'tareas.json',

    leerArchivoJson: function () {

        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    grabarUnJson: function (tareas) {
        return  fs.writeFileSync(this.archivo, tareas)
    },

 
}

module.exports = operacionesArchivos;
