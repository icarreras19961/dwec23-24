/**
 *
 * Arrays
 *
 */

//Definir arrays
let vacio = []; //esta vacio
let primos = [2, 3, 5, 7, 11]; //array con 5 elementos numericos
let miscelanea = [1.1, true, "patata"]; //varios elementos

//los valores no tienen pq ser constantes

let n = 1024;
let tabla = [n, n + 1, n + 2, n + 3];
// console.log(vacio);

let contador = [1, 3];
console.log(contador.length);

//operador SPREAD
let a = [1, 2, 3];
let b = [0, ...a, 4]; //añade el array despues de los ... al array en el que estan
console.log(b);

let original = [1, 2, 3];
let copia = [...original, ...b];
console.log(original[0]);
console.log(copia);

let digitos = [..."0123456789ABCDEF"]; //con el split delante pasa de ser de 1 posicion a 16(las que hay)
console.log(digitos);

//Constructor de Array
let aa = new Array(10); // esto dice la longitud del array pero si añado mas elementos se aumenta el espacio
let bb = Array.of(10);
console.log(bb);
console.log(aa);

console.log([1, 2, 3, 4].length); //no hace falta que un array este definido para mostrarlo por terminal

//Push
bb.push(5, "hola", "adios");
console.log(bb);
console.log(aa.push(true));
console.log(aa[aa.length]);