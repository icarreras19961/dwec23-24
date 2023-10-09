/**-Estructuras de control-**/
/**Se utilizan para controlar el flujo de control de un programa
 */

//if se utiliza para ejecutar un bloque de codigo si se cumple una condicion
let edad = 18;
let esMayorDeEdad = edad >= 18;

//Operador ternario

let a = 10;
let b = 20;

let resultado = a > b ? a - b : b - a;
console.log(resultado);

if (edad >= 18) {
  //las llaves se ponen siempre salvo que se pueda poner en una linea
  console.log("Es mayor de edad");
} else if (edad > 12) {
  console.log("Es un adolescente");
} else if (edad > 5) {
  console.log("Estas en la primario");
} else {
  console.log("Renacuajo");
}

/**
 * Switch - case
 *
 * cuando se quiera hacer una estructura condicional segun el valor que tenga una variable o expresion
 */

let nombre = "Frodo";
let edad2;
switch (nombre) {
  case "Gandalf":
    edad2 = 1230;
    break;
  case "Aragorn":
    edad2 = 532;
    break;
  case "Frodo":
    edad2 = 50;
    break;
  default:
    edad2 = 0;
    break;
}
console.log("Nombre: " + nombre + " Edad: " + edad2);

/**-Iteraciones - bucles-**/
//Se utiliza para repetir un aporcion de codigo varias veces

//While
//Repetir un bloque mientras se cumpla una codicion

let cont = 0;
while (cont < 5) {
  console.log(cont);
  cont++;
}

//Do - while
//repetir un bloque de codigo almenos 1 vez
cont = 0;
do {
  console.log(cont);
  cont++;
} while (cont < 5);

//for
//repetir un bloque de codigo un numero especifico de veces
//break: se utiliza para detener la ejecucion del bucle / continue: saltar a la siguiente iteracion
for (let i = 0; i < 5; i++) {
  if (i == 2) {
    continue;
  } else if (i == 5) {
    break; // detener el bucle cuando i sea 2
  }

  console.log(i);
}
//------------------------
//Ejercicio calcular notas
//------------------------
//Declaracion de variables
let nomEstudiante = "ivan";
let notaExamen1 = 0;
let notaExamen2 = 0;
let notaProjecte = 0;
let notaFinal;
//calculo las medias de las asignaturas
notaFinal = notaExamen1 * 0.2 + notaExamen2 * 0.2 + notaProjecte * 0.6;

//compruebo si ha aprobado o no
if (notaFinal >= 7) {
  console.log(
    "Felicidades " + nomEstudiante + " Aprobaste con un " + notaFinal
  );
} else {
  console.log(
    "Lo siento " +
      nomEstudiante +
      " has sacado un " +
      notaFinal +
      " no te puedo aprobar"
  );
}

//------------------------------------
//Conversion y analisis de temperatura
//------------------------------------
//Declaracion de variables
let any2010Juny = 25.8;
let any2015Juny = 26.5;
let any2020Juny = 27.2;

let any2010Juliol = 28.6;
let any2015Juliol = 29.3;
let any2020Juliol = 29.9;

let any2010Agosto = 30.1;
let any2015Agosto = 30.8;
let any2020Agosto = 31.5;

//Calculo de medianas
let mediana2010 = (any2010Juny + any2010Juliol + any2010Agosto) / 3;
let mediana2015 = (any2015Juny + any2015Juliol + any2015Agosto) / 3;
let mediana2020 = (any2020Juny + any2020Juliol + any2020Agosto) / 3;

//claculo de los farenheit y los kelvin con la formula dada por el profe
let mediana2010Far = (mediana2010 * 9) / 5 + 32;
let mediana2010Kel = mediana2010 + 273.15;

let mediana2015Far = (mediana2015 * 9) / 5 + 32;
let mediana2015Kel = mediana2015 + 273.15;

let mediana2020Far = (mediana2020 * 9) / 5 + 32;
let mediana2020Kel = mediana2020 + 273.15;

//claculo de si la media ha sido mayor a 30ª
let supera2010;
if (mediana2010 >= 30) {
  supera2010 = true;
} else {
  false;
}

let supera2015;
if (mediana2015 >= 30) {
  supera2015 = true;
} else {
  false;
}

let supera2020;
if (mediana2020 >= 30) {
  supera2020 = true;
} else {
  false;
}

//la respuesta que sale en la teminal
console.log(
  "El año 2010 tubo de media: " +
    mediana2010 +
    " celsius, " +
    mediana2010Far +
    " Farhengeit, " +
    mediana2010Kel +
    " kelvin. Supero los 30º? " +
    supera2010
);

console.log(
  "El año 2015 tubo de media: " +
    mediana2015 +
    " celsius, " +
    mediana2015Far +
    " Farhengeit, " +
    mediana2015Kel +
    " kelvin. Supero los 30º? " +
    supera2015
);

console.log(
  "El año 2020 tubo de media: " +
    mediana2020 +
    " celsius, " +
    mediana2020Far +
    " Farhengeit, " +
    mediana2020Kel +
    " kelvin. Supero los 30º? " +
    supera2020
);

/*

FECHAS

*/

let parrafo = document.getElementById("fecha");

// new date();
// new date(milisegundos);
// new date (año, mes, dia, horas, minutos, milisegundos);

let fecha = new Date(71,11,29,15,15,15);
parrafo.innerHTML = fecha.getMonth();