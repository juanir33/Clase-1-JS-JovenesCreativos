console.log("Hola Jovenes creativos");

// esto es un comentario lineal
/* esto es multi
lineal*/

// TIPOS DE DATOS

//STRING: ES UNA CADENA DE TEXTO

const stringsimple = "ESTO ES UN STRING";

let stringdoble = "ESTO ES OTRO STRING";

var template = `ESTO TAMBIEN ES UN STRING, TEMPLATE LITERAL,
y esta es una suma = ${2 + 2} 
SIGUE SIENDO STRING `;

// NUMEROS

let numero = 3;

let numerocoma = 3.444;

let numeroNegativo = -4;

// ARRAYS

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

const array2 = ["hola", 2, { nombre: "juan" }];

// console.log(array2);

// OBJETOS

const objt1 = {
	nombre: "jovenes",
	apellido: "Creativos",
	curso: "avanzado",
};

const nombre = objt1.nombre;
//& operar con las llaves de un objeto
const nombrApell = objt1.nombre + " " + objt1.apellido;
console.log("🚀 ~ file: main.js:54 ~ nombrApell:", nombrApell);

//^ acceder a el valor de un objeto con su llave
console.log(objt1["curso"]);

//* operadores condicionales ===   !== ==

let a = "2";
let b = 2;

// console.log('Doble igualdad',  a  == b);

// console.log('Triple igualdad', a  === b);

// console.log('negacion', a !== b);

//& operadores matematicos

let c = 34;
let d = 4;
// console.log( c + d);
// console.log( c - d);
// console.log( c ** d);
// console.log( c % d);
// console.log( c / d);

//^ Ciclos

// for, switch, while, do while

//breack para terminar un ciclo

// continue para saltear una iteracion
// for (var i = 0; i < 8 ; i++){
// 	console.log(i);
// }

// let num = 1;

// while (num < 8) {
// 	num++;
// 	console.log(num);
// }

// let res;
// do {
// 	res = confirm("Esto es un ciclo?");
// } while (res);


// let switcher = 12;

// switch (switcher) {
// 	case 1:
// 		console.log("primero");
// 		break;
// 	case 2:
// 		console.log("segundo");
// 		break;

// 	case 3:
// 		console.log("tercero");
// 		break;

// 	default:
// 		console.error("No existe el valor");
// }


//^interactuando con objetos del documento

let parr =  document.getElementById("parrafo");

parr.innerText = 'Jovenes aprendiendo JavasCript'


// variables

var primero = 22;


function letVariable (){
   let seg = 2 ;
  return' 11111'
}


const ter = 33;

// const es inmutable
//console.log(ter = 2);

console.log(letVariable())





