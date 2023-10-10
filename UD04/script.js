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
let tabla1 = [n, n + 1, n + 2, n + 3];
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

let a2 = [1, 2, 3];

delete a2[2];
console.log(a2);
let i = 0;
if (a[i]) {
  console.log(a[i]);
} else {
  console.log("slot vacio");
}

//iteracion de arrays
let letras = [..."hola amiguitos"];
let aux = "";
//for each
for (let letra of letras) {
  aux += letra;
}
// console.log(aux);

// aux = "";
// let suma = 0;
// for (let [index, letra] of letras.entries()) {
//   // aux += letra;
//   // suma += index;
//   if (index % 2 === 0) aux += letra;
// }

// console.log(aux);
// console.log(suma);
let vocales = 0;
for (let i = 0; i < letras.length; i++) {
  letra = letras[i];
  //expresiones regulares
  if (/[aeiou]/.test(letra)) {
    vocales++;
  }
}
console.log(vocales);

let mayusculas = "";
let i1 = 0;
letras.forEach((letra) => {
  i1++;
  if (i1 % 2 === 0) {
    mayusculas += letra.toUpperCase();
  } else {
    mayusculas += letra;
  }
});

console.log(mayusculas);

//Arrays multidimensionales
let tabla = new Array(10);

for (let i = 0; i < tabla.length; i++) {
  tabla[i] = new Array(5);
}
for (let fila = 0; fila < tabla.length; fila++) {
  let miArrayInterior = tabla[fila];
  for (let col = 0; col < miArrayInterior.length; col++) {
    miArrayInterior[col] = fila * col;
  }
}

console.log("La tabla multidimensional: " + tabla);

//Tablas de multiplicar en array multidimensional
let tablaMultiplicar = new Array(10);

for (let i = 0; i < tablaMultiplicar.length; i++) {
  tablaMultiplicar[i] = new Array(11);
}
for (let fila = 0; fila < tablaMultiplicar.length; fila++) {
  let arraydentro = tablaMultiplicar[fila];
  for (let columna = 0; columna < arraydentro.length; columna++) {
    arraydentro[columna] = fila * columna;
  }
}
console.log(tablaMultiplicar);


for (let fila = 0; fila < tabla.length; fila++) {
  console.log("La tabla del : ",fila);
  for (let columna = 0; columna < tabla.length; columna++) {
    if (!(tablaMultiplicar[fila][columna] % 2 === 0)) {
      console.log(fila,"*",columna,"=",tablaMultiplicar[fila][columna]);
    }
  }
}