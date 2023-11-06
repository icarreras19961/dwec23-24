// /**
//  *
//  * Arrays
//  *
//  */

// //Definir arrays
// let vacio = []; //esta vacio
// let primos = [2, 3, 5, 7, 11]; //array con 5 elementos numericos
// let miscelanea = [1.1, true, "patata"]; //varios elementos

// //los valores no tienen pq ser constantes

// let n = 1024;
// let tabla1 = [n, n + 1, n + 2, n + 3];
// // console.log(vacio);

// let contador = [1, 3];
// console.log(contador.length);

// //operador SPREAD
// let a = [1, 2, 3];
// let b = [0, ...a, 4]; //añade el array despues de los ... al array en el que estan
// console.log(b);

// let original = [1, 2, 3];
// let copia = [...original, ...b];
// console.log(original[0]);
// console.log(copia);

// let digitos = [..."0123456789ABCDEF"]; //con el split delante pasa de ser de 1 posicion a 16(las que hay)
// console.log(digitos);

// //Constructor de Array
// let aa = new Array(10); // esto dice la longitud del array pero si añado mas elementos se aumenta el espacio
// let bb = Array.of(10);
// console.log(bb);
// console.log(aa);

// console.log([1, 2, 3, 4].length); //no hace falta que un array este definido para mostrarlo por terminal

// //Push
// bb.push(5, "hola", "adios");
// console.log(bb);
// console.log(aa.push(true));
// console.log(aa[aa.length]);

// let a2 = [1, 2, 3];

// delete a2[2];
// console.log(a2);
// let i = 0;
// if (a[i]) {
//   console.log(a[i]);
// } else {
//   console.log("slot vacio");
// }

// //iteracion de arrays
// let letras = [..."hola amiguitos"];
// let aux = "";
// //for each
// for (let letra of letras) {
//   aux += letra;
// }
// // console.log(aux);

// // aux = "";
// // let suma = 0;
// // for (let [index, letra] of letras.entries()) {
// //   // aux += letra;
// //   // suma += index;
// //   if (index % 2 === 0) aux += letra;
// // }

// // console.log(aux);
// // console.log(suma);
// let vocales = 0;
// for (let i = 0; i < letras.length; i++) {
//   letra = letras[i];
//   //expresiones regulares
//   if (/[aeiou]/.test(letra)) {
//     vocales++;
//   }
// }
// console.log(vocales);

// let mayusculas = "";
// let i1 = 0;
// letras.forEach((letra) => {
//   i1++;
//   if (i1 % 2 === 0) {
//     mayusculas += letra.toUpperCase();
//   } else {
//     mayusculas += letra;
//   }
// });

// console.log(mayusculas);

// //Arrays multidimensionales
// let tabla = new Array(10);

// for (let i = 0; i < tabla.length; i++) {
//   tabla[i] = new Array(5);
// }
// for (let fila = 0; fila < tabla.length; fila++) {
//   let miArrayInterior = tabla[fila];
//   for (let col = 0; col < miArrayInterior.length; col++) {
//     miArrayInterior[col] = fila * col;
//   }
// }

// console.log("La tabla multidimensional: " + tabla);

// //Tablas de multiplicar en array multidimensional
// let tablaMultiplicar = new Array(10);

// for (let i = 0; i < tablaMultiplicar.length; i++) {
//   tablaMultiplicar[i] = new Array(11);
// }
// for (let fila = 0; fila < tablaMultiplicar.length; fila++) {
//   let arraydentro = tablaMultiplicar[fila];
//   for (let columna = 0; columna < arraydentro.length; columna++) {
//     arraydentro[columna] = fila * columna;
//   }
// }
// console.log(tablaMultiplicar);

// for (let fila = 0; fila < tabla.length; fila++) {
//   console.log("La tabla del : ", fila);
//   for (let columna = 0; columna < tabla.length; columna++) {
//     if (!(tablaMultiplicar[fila][columna] % 2 === 0)) {
//       console.log(fila, "*", columna, "=", tablaMultiplicar[fila][columna]);
//     }
//   }
// }

// //Metodos de arrays
// //push()
// //pop() elimina el ultimo elemento del array y lo DEVUELVE

// let paco = ["joan", "amparo", "esther"];
// let otros = ["valentin", "pepe"];
// console.log(paco);

// // let elemntoEliminado = paco.pop();
// // console.log(paco);
// // console.log(elemntoEliminado);

// //shift() Elimina el PRIMER elemento y lo devuelve
// // elemntoEliminado = paco.shift();

// //unshift() Agrega uno o mas elementos al principio
// // paco.unshift("valentin", "pepe");

// //concat() Combina 2 o mas arrays y devuelve uno nuevo
// // let combinacion = paco.concat(paco, otros);
// // console.log(combinacion);

// //slice() devuelve una copia superficial de una porcion del array
// // let copiaPaco = paco.slice(1,5);
// // console.log(copiaPaco);

// //splice() Cambia el contenido de un array eliminando, remplazando o agregando elementos
// // paco.splice(1, 0, ...otros);
// // (posicion donde se ejecuta, la cantidad a eliminar, contenido a añadir)

// //indexOf() Devuelve el primer indice en el que se encuentra un elemento dado. Devuelve -1 si no lo encuentra (en que posicion se encuentra el valor que queremos)
// /*
// let indice = paco.indexOf("amparo");
// let cadena = "Hola como estas";
// indice = cadena.lastIndexOf("a")
// console.log(indice);
// indice = cadena.indexOf("a")
// console.log(indice);
// */
// //join() une todos los elementos de un array en una cadena (utilizando un separador)
// //Puedes indicar la separacion dentro del parentesis del join()
// /**
//  *   let cadena = paco.join("->");
//  *   console.log(cadena);
//  */

// // sort() Ordena alfaveticamente arrays si son cadenas y numericamente si son numeros
// let otros2 = [3, "joan", 10, 5, true, -1, "pepe"];
// console.log(otros2.sort());

// let paco2 = ["joan", "amparo", "esther", "Zoraia", "Ángel"];
// //Ordenar correctamente con sort => uso de parametros
// // se trata de una funcion:
// // - Debe recibir valorers a comparar
// // - Como resultado debe.
// //   - Devolver un valor positivo (1) si el primer valor es superior al segundo
// //   - Devolver un valor negativo (-1) si el primer valor es inferior al segundo
// //   - Devolver un valor cero (0) si los 2 valores son iguales o equivalentes para la ordenacion

// // Sort en numeros
// let numeros = [10, 5, 8, 3, 1];
// console.log(numeros.sort((a, b) => a - b)); //funcion flecha

// //sort cadenas
// console.log(
//   paco2.sort((a, b) => {
//     return a.toLowerCase() > b.toLowerCase()
//       ? 1
//       : a.toLowerCase() < b.toLowerCase()
//       ? -1
//       : 0;
//   })
// );

// console.log(
//   paco2.sort((a, b) => {
//     return a.localeCompare(b);
//   })
// );

// /**
//  * Funciones
//  */

// // function dihola() {

// //   console.log("hola");
// // }

// // dihola();
// console.log(multiplica(20, 30) + 1);
// function multiplica(c, d) {
//   let a = 10;
//   let b = 20;
//   return a * b * c * d;
// }

// /**
//  * Objetos
//  */

// let unCliente = {
//   nombre: "Peter",
//   apellido: "Jackson",
//   "direccion fiscal": "c/Desconocida",
//   "-+-+-+-+--": "bloked",
//   pago: {
//     tipo: "visa",
//     targeta: "1234567",
//     "fecha de caducidad": "nunca",
//   },
//   vencimiento: 30,
// };
// unCliente["vencimiento"] = 60;
// unCliente.pago.tipo = "mastercard";
// console.log(unCliente);

// //Metodos con elementos

// let estudiante = {
//   id: 2,
//   nombre: "ivan",
//   diHola: function () {
//     return "hola";
//   },
//   notas: [10, 0, 4],
// };

// function media(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(
//   "El estudiante ",
//   estudiante.nombre,
//   " con la media ",
//   media(estudiante.notas[0], estudiante.notas[1], estudiante.notas[2]),
//   " te dice ",
//   estudiante.diHola()
// );

// estudiante.apellido = "carreras";
// estudiante.diAdios = function () {
//   return "adios";
// };
// console.log(estudiante);

// //this
// let factura = {
//   descripcion: "Factura de prueba",
//   precio: 100,
//   iva: 21,
//   subTotal: function () {
//     return this.precio;
//   },
//   total: function () {
//     return this.precio + (this.precio * this.iva) / 100;
//   },
// };
// console.log(factura);

// //Constructores

// function Web() {
//   this.url = "https://localhost";
//   this.nombre = "Localhost";

//   this.muestraInformacion = function () {
//     return "url: " + this.url + "\n" + "Web: " + this.nombre;
//   };
// }

// let unaWeb = new Web();
// unaWeb.url = "https://www.fcbarcelona.cat";
// unaWeb.nombre = "Mes que un club";
// console.log(unaWeb);

// let otraWeb = new Web();
// otraWeb.url = "https://tetr.io";
// otraWeb.nombre = "Tetris";
// console.log(otraWeb);

// Web.prototype.visitas = 2;
// Web.prototype.miFuncion = function () {
//   //prototype para poder crearlo en el constructos sino no va
//   return "funcion mia";
// };

// /*
//    ========
//    PLANETAS
//    ========
// */

// let planeta1 = ["Mercurio", 61741000, 0.1, "mucho"];
// let planeta2 = ["Venus", 107000000, 0.8, "mucho"];
// let planeta3 = ["Tierra", 149100000, 0, "mucho"];
// let planeta4 = ["Marte", 743620000, 0.5, "mucho"];
// let planeta5 = ["Jupiter", 82000000, 318, "mucho"];
// let planetas = [planeta1, planeta2, planeta3, planeta4, planeta5];

// function Planeta() {
//   this.nombre;
//   this.distanciaSol;
//   this.tamañoRelativo;
//   this.descuebierto;
//   this.info = function () {
//     return (
//       "El planeta: " +
//       this.nombre +
//       "\nDistancia del sol: " +
//       this.distanciaSol +
//       "\nTamaño relativo: " +
//       this.tamañoRelativo +
//       "\nDescubierto en: " +
//       this.descuebierto
//     );
//   };
// }
// // console.log(planetas[1][1]);
// let planeta = new Planeta();
// for (let i = 0; i < planetas.length; i++) {
//   for (let j = 0; j <= 3; j++) {
//     if (j === 0) {
//       planeta.nombre = planetas[i][j];
//     } else if (j === 1) {
//       planeta.distanciaSol = planetas[i][j];
//     } else if (j === 2) {
//       planeta.tamañoRelativo = planetas[i][j];
//     } else if (j === 3) {
//       planeta.descuebierto = Date();
//     }
//   }
//   console.log(planeta.info());
// }

// const ciudades = [
//   {
//     municipio: "Zaragoza",
//     provincia: "Zaragoza",
//   },
//   {
//     municipio: "Avila",
//     provincia: "Avila",
//   },
//   {
//     municipio: "Madrid",
//     provincia: "Madrid",
//   },
//   {
//     municipio: "Barcelona",
//     provincia: "Barcelona",
//   },
// ];
// console.log(
//   ciudades.sort((a, b) => {
//     return a.provincia.localeCompare(b.provincia);
//   })
// );
// const miArray = ["a", "b", "c"];
// miArray.push("d");
// miArray[1] = "B";
// console.log(miArray);

// //Desestructuracion
// const numeros1 = [1, 2, 3, 4, 5];

// const [a, b, c] = numeros1;
// console.log(a + c);

// const persona = {
//   nombre: "Andreu",
//   edad: 33,
// };
// const { nombre, edad } = persona;//tiene que tener el mismo nombre
// console.log(nombre);

// const nombre = "josep";
// const edad = 33;
// const persona = {
//   nombre,
//   edad,
// };
// console.log(persona);

//Template strings - Plantillas de cadenas
//operador de interpolacion ${}
// const nombre = "bob";
// const edad = 32;

// const mensaje = `Hola, mi nombre es ${nombre}, con edad ${edad}`;
// console.log(mensaje);

//Operador spread

// const numeros = [1, 2, 3];
// const nuevosNumeros = [...numeros, 4, 5];
// console.log(nuevosNumeros);

// //Parametros por defecto

// function saludar(nombre = "desconocido") {
//   console.log(`Hola, ${nombre}`);
// }

// saludar();

//Parametors rest
// function sumar(...numeros) {
//   let resultado = 0;

//   for (let numero of numeros) {
//     resultado += numero;
//   }

//   return resultado;
// }
// console.log(sumar(5, 4, -1,786,8,42,562,215,51561));

// Function flecha
// function sumar(a, b) {
//   return a + b;
// }
// const sumar = (...numeros) => {
//   let resultado = 0;
//   for (let numero of numeros) {
//     resultado += numero;
//   }
//   return resultado;
// };

// console.log(sumar(21,21,212,121,4,684634,646,3, 5));
//

//Metodos de arrays
//forEach(): Ejecuta una funcion por cada elemento del array
// const numeros = [1, 2, 3, 4, 5];

// const multiplica = (n) => {
//   return n * 2;
// };

// numeros.forEach((numero) => console.log(multiplica(numero)));

// //map(): Crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array
// const dobleNumero = numeros.map((numero) => {
//   return numero * 2;
// });
// console.log(dobleNumero);

//filter(): Crea un nuevo array con todos los elementos que cumplan una condicion determinada
// const numeroPares = numeros.filter((numero) => {
//   return numero % 2 === 0;
// });
// console.log(numeroPares);

// const numMayor2 = numeros.filter((numero) => {
//   return numero > 2;
// });
// console.log(numMayor2);

//reduce(): Aplica una funcion a un acumulador y a cada elemento del array para reducirlo a un unico valor

// const suma = numeros.reduce((acumulador, numero) => {
//   return acumulador + numero;
// }, 0);

// console.log(suma);

//find(): devuelve el primer elemento del array que cumpla una determinada condicion.

// const numeroEncontrado = numeros.find((numero) => {
//   return numero < 3;
// });
// console.log(numeroEncontrado);

//findIndex(): devuelve el indice dle primer elemento del array que cumple con una funcion de prueba o -1 si no encuentra nada
// const indiceEncontrado = numeros.findIndex((numero) => {
//   return numero < 3;
// });
// console.log(indiceEncontrado);

//some(): comprueba si al menos un elemento del array cumple una condicion determinada
// const tieneNumeroPar = numeros.some((numero) => {
//   return numero % 2 === 0;
// });
// console.log(tieneNumeroPar);

//every(): Comprueba si todos los elementos cumplen una condicion determinada.
// const todosNumerosPares = numeros.every((numero) => {
//   return numero % 2 === 0;
// });
// console.log(todosNumerosPares);

//Clases - class

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   saludar() {
//     console.log(
//       "Hey muy buenas a todos guappisimos aqui ",
//       this.nombre,
//       " 777"
//     );
//   }
// }

// const ivan = new Persona("Ivan");
// ivan.saludar();

// //herencia
// class Empleado extends Persona {
//   constructor(nombre, salario) {
//     super(nombre);
//     this.salario = salario;
//   }
//   trabajar() {
//     console.log(`${this.nombre} esta trabajando.`);
//   }
// }

// const francisco = new Empleado("Francisco");
// francisco.saludar();
// francisco.trabajar();

//Simbolos
/**
 * Los simbolos son una nueva clase de datos introducida por ES6.
 * Son valores unicos que inmutables.
 * Se pueden utilizar como identificadores de propiedades de objetos.
 */

// const id = Symbol("id");
// const persona = {
//   nombre: "Ivan",
//   [id]: 1,
// };

//Iteradores
/**
 * Son objetos que implementan el protocolo de iteracion de JavaScript Permite recorrer y acceder a los elementos de una coleccion una a una
 */

// const numeros = [1, 2, 3, 4, 5];
// const iterador = numeros[Symbol.iterator]();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

//SET
/** Permite almacenar valores unicos de cualquier tipo. No permite duplicados y ofrece metodos para agregar, eliminar y verificar la existencia de elementos */

// const setnumeros = new Set();
// setnumeros.add(1);
// setnumeros.add(2);
// setnumeros.add(3);
// setnumeros.add(4);
// setnumeros.add(5);
// setnumeros.add(6);
// console.log(setnumeros.has(2));
// setnumeros.delete(2);
// console.log(setnumeros.has(2));
// console.log(object);
// const iteratorNumeros = setNumeros[Symbol.iterator]();
// console.log(iteratorNumeros.next());

//Map
//**Permite almacenar pares de clave-valor, doce cada clave es ulica  y ademas permite operaciones de busqueda, insercion y eliminacion */

// const mapaNombres = new Map();
// mapaNombres.set("nombre", "ivan")
// mapaNombres.set("edad", 33);
// mapaNombres.set("profesion", "Desarrollador");

// console.log(mapaNombres.get("nombre"));

//-----------------------------------------
//Cookies
//-----------------------------------------

/**
 * Las cookies se utilizan para
 * - Monitorizar la actividad de los usuarios
 * - Mantener opciones de visualizacion o de aspecto para el usuario
 * - Almacenar variables en el lado cliente
 * - Identificacion o autenticacion
 */

// document.cookie = "usuario = Oreo";

// function crearCookie(usuarioCookie) {
//   console.log("Creando la cookie...");
//   usuarioCookie += " ;expires=Tue, 7 Nov 2023 12:15:00 GMT";
//   document.cookie = "usuario=" + encodeURIComponent(usuarioCookie);
// }

// function leerCookie() {
//   console.log("Leyendo las cookies...");
//   console.log(decodeURIComponent(document.cookie));
// }

//-----------------------------------------------
//Local Storage
//-----------------------------------------------
/**
 * Nos permite guardar en el navegador informacion
 *
 * setItem(clave, valor)
 *
 * getItem(clave)
 */

function guardaValores() {
  console.log("Guardando valores en el local storage ...");
  let usuario = {
    nombre: "ivan",
    apellido: "Carreras",
  };
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

function leerValores() {
  console.log("leyendo valores en el local storage ...");
  let valorLocal = JSON.parse(localStorage.getItem("usuario"));
  console.log(valorLocal == null ? "La clave no se ha encontrado" : valorLocal);
}

/**
 * Recursividad
 */


function factorial(numero) {
  if (numero == 0) return 1;

  return numero * factorial(numero - 1);
}

console.log(factorial(5));