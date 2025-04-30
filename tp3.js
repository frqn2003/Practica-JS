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
//Ejercicio 5
const date = new Date();
let dia = date.getDate();
let mes = date.getMonth() + 1;
let año = date.getFullYear();
let currentDate = `${dia}/${mes}/${año}`;
console.log(currentDate);
//Ejercicio 6
let numeromes = date.getMonth() + 1;
switch (numeromes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("No es un mes valido")
        break;
}
//Ejercicio 7
let miVariable3 = "LOL";
if (miVariable3 == miVariable3.toUpperCase()) {
    miVariable3 == miVariable3.toLowerCase()
    console.log("Es mayuscula")
}
else if (miVariable3 == miVariable3.toLowerCase()) {
    miVariable3 == miVariable3.toUpperCase()
    console.log("Es minuscula")
}
else {
    console.log("No es una letra")
}
//Ejercicio 8
function esPar(num){
    if (num % 2 == 0) {
        return num + " es par"
    }
    else {
        return num + " es impar"
    }
}
console.log(esPar(10))