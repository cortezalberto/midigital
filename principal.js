 
// Declaro con la estrutura tradicional de función
function suma(n1,n2) {
    return n1+n2;
}
// Declaro con la estrutura de función Flecha...pero hace lo mismo
let sumar = (n1, n2) => n1 + n2;
// Declaro con la estrutura tradicional de función
function resta(n1,n2) {
    return n1-n2;
}

// Declaro con la estrutura de función Flecha...pero hace lo mismo
let restar = (n1, n2) => n1 - n2;

// Declaro con la estrutura tradicional de función
// vean que tiene 3 parámetros, el ultimo parámetro es una función tradicional
operacionMatematica(2, 5,function (n1,n2) {
    return n1+n2;
});


let operacionMatematica = (n1,n2,operacion)=>{ operacion(n1,n2)};



operacionMatematica(2, 5,sumar);




