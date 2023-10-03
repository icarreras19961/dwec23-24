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
/**-conversion de tipos-**/

let a2 = "5";
let b2 = "6";
console.log(typeof a2);
console.log(a2 + b2);

let A = parseInt(a2);
let B = parseInt(b2);
console.log(A + B);

let c2 = "4.22";

console.log(parseFloat(c2));
let A2 = +A; //poniendo el simbolo + delante del numero automaticamente se vuelve de string a numero
let B2 = +B;
console.log(typeof A2, typeof B2);

/**-Operadores de comparacion-**/
// Compara 2 valores y devolver un resultado booleano.
/**
 * > mayor que
 * < menor que
 * >= mayor o igual que
 * <= menor o igual que
 * == igual que
 * != distinto que
 * === igual en valor y tipo que
 * != distino en valor y en tipo que
 */

/**-Operadores Booleanos-**/
//Permiten comparar expresiones booleanas con las que se construyen conficiones que se pueden aplicar en funciones bycles, etc.
//&&  AND solo devuelve true cuando los dos operadores sena

/**
 * true&&true  = true
 */

/**
 * true&&true  = true
 */

let tru = true;
let fols = false;
console.log(tru || fols);

let cadena = "hola";

//Esto nos sirve para verificar si esta la cadena vacia o no
if (cadena != null && cadena.length > 0) {
  console.log(cadena);
} else {
  console.log("potatoes");
}
// ! NOT devuelve lo contrario al operador

/**-Ejer 1-**/
/**
 * Se nos facilitan tres variables que contienen informacion sobre una ciudad
 *
 * let esCapital; //boolean
 * let numCiudadanos //int
 * let impuestoPorCiudadadno; //float
 *
 * esCapital: sera cierta si y solo si la ciudad es capital
 * numCiudadadaonos: es la poblacion de esta ciudad
 * impuestoPorCiudadano: es el impuesto media mensual que paga un ciudadano de esa ciudad
 * para nosotros, una Metropolis sera una ciudad si bien es una capital con mas de 100k
 * habitantes o bien es una ciudad con mas de 200k habitantes y una renta media de 720000000
 * Dad un aexpresion booleana con las tres variables de tal manera que sea cierta si y solo si la ciudad es una metropolis
 */

let esCapital = false; //boolean
let numCiudadanos = 100000; //int
let impuestoPorCiudadadno = 3600; //float

if (
  esCapital == true &&
  numCiudadanos >= 100000 &&
  numCiudadanos < 200000 &&
  (impuestoPorCiudadadno = numCiudadanos * 12) > 3600
) {
  console.log(true);
} else {
  console.log(false);
}
