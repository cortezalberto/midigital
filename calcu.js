let estudiantes = [
{nombre:'alberto',
promedio : 8.5,
aprobado : true
},
{nombre:'juan',
promedio : 7,
aprobado : true
},
{nombre:'Pedro',
promedio : 3,
aprobado : false
},
]

let aprobados = estudiantes.filter(function (estudiantes) {
    return estudiantes.promedio >= 7;
})

console.log(aprobados);

/*
function agregarHttp(url) {
    return  "http://" + url
}
function procesar(array,callback){
   
    return array.map(lista => callback(lista))
    };
console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp ))




let agregarHttp = url => "http://" + url;
let procesar = (array, callback) => array.map(callback);
console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp));
console.log('Finalizo con exito');
*/

/*
let urlArray = ["www.google.com","www.yahoo.com"];
let urlCompletas =[];
let agregarCabecera = (url)=>{
  let urlLocal =  'http://'+url;
  urlCompletas.push(urlLocal);
} 



let procesar = (urlArray ,agregarHttp)=> {
for (let i = 0; i < 2; i++) {
     
     //  console.log(urlArray[i]);
       agregarHttp(urlArray[i]);
    };
  
    return urlCompletas;
}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarCabecera));
console.log('Termino');


*/

/*

console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ]
let sumar = (n1,n2) => n1+n2;
let restar = (n1,n2) => n1-n2;
let dividir= (n1,n2) => n1/n2;
let multiplicar = (n1,n2) => n1*n2;

let calculadora = (n1,n2,operacion)=> operacion(n1,n2);

//console.log(4,5,calculadora);
console.log(calculadora(4,5,restar));


let doble = (n1) => 2*n1;
let triple = (n1) => 3*n1;

let aplicarCallback = (n1,miFuncion)=>miFuncion(n1);
console.log(aplicarCallback(5,triple));
 */