saluda();
//Muestra un saludo por la pantalla
function saluda() {
  console.log("hola");
}

/**-Variable-**/
// var, let, const
const PI = 3.1415;
// PI = "hola"; no se puede cambiar el valor de una constante
console.log(PI);

// nombre = "jose";
// console.log(nombre);
// function patata() {
//   let nombre = "ivan";
// }
// patata();
// console.log(nombre);

let uno = 1; //mantener los ; siempre
//string
let name = "ivan";
let surname = "carreras";
let fullname = "ivan carreras, canoista de menorca";
let comillas = '"pedro"'; // \" asi es como se pone unas comillas dobles por pantalla

/**-Numeros-**/
let edad = 20; //esto es un numero
let años = "23232"; //esto es una cadena
console.log(typeof edad);
console.log(typeof años);

let edad2 = 20;
let años2 = -20;
console.log(edad2 - años2);

let aprobados = Infinity;
let suspendidos = -Infinity;
console.log(edad - aprobados);

//null
let valor = null;
console.log(typeof valor);

//undefined
let algo;
console.log(algo);

//NaN
let cosa = "cosa" / 2;
console.log(cosa);

//typeof -da el tipo de variable que estamos utilizando

console.log(typeof edad);

//objetos
let persona = {
  nombre: "ivan",
  edad: 20,
};
console.log(persona.edad);
delete persona.edad;
console.log(persona.edad);

//booleanos
let messi = true;
let penaldo = false;
/**
 * tipos de datos considerados false
 * null
 * ""(string vacio)
 * undefined
 * 0
 * NaN
 */

/**-- operadores aritmeticos -**/
//-> operaciones matematicas

/**
 * a + b
 * a - b
 * a * b
 * a / b
 * a % b (modulo)
 * ++incremento
 * --decremento
 * += suma y assigna a += b // a = a + b
 * -= resta y assigna a -= b // a = a - b
 * *= multiplica y assigna a *= b // a = a * b
 * /= divide y assigna a /= b // a = a / b
 * %= modula y assigna a $= b // a = a % b 
 * - cambio de signo // a = 5, b = -a, b = -5
 */

let a = 4;
let b = 2;
let c = (a /= b);
console.log(c);
