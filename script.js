// Ejercicio 1
var uno = 10;
var dos = 20;
var suma = uno + dos;
var resta = uno - dos;
var multiplicacion = uno * dos;
var division = uno/dos;
console.log(uno, dos, suma, resta, multiplicacion, division)

//Ejercicio 2
function mayres(a, b) {
    if (a > b) {
        return a + " es mayor que " + b
    }
    else if (a < b){
        return b + " es mayor que " + a
    }
    else {
        return a + " es igual que " + b
    }
}
console.log(mayres(uno, dos))

// Ejercicio 3

let miVariable = "Mira Hacia Aqui!";
let mayus = miVariable.toUpperCase();
let minus = miVariable.toLowerCase();
let longitud = miVariable.length;
let car4 = miVariable[3];
console.log("%c" + miVariable, "color: red;");
console.log(mayus,minus,longitud,car4)

//Ejercicio 4

let miVariable2 = 14.4;
let redondeado = Math.ceil(miVariable2);
let raiz = Math.sqrt(miVariable2);
let numrandom = Math.floor(Math.random() * 100);
console.log(redondeado,raiz,numrandom)
const date = new Date();
let dia = date.getDate();
let mes = date.getMonth() + 1;
let año = date.getFullYear();
let currentDate = `${dia}/${mes}/${año}`;
console.log(currentDate);
//