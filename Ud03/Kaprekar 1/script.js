// Guardamos el número de Kaprekar.
const numeroKaprekar = 6174;
// Número entrado por el usuario.
let numero;
// Pasos realizados.
let pasos = 0;

// Pedimos al usuario que introduzca el número y lo capturamos.
// (Será una cadena)
let promptText = "Elija cualquier número de cuatro dígitos ";
promptText += "que esté formado por al menos dos dígitos ";
promptText += "diferentes, incluido el cero.";
// Lanzamos el prompt.
numero = prompt(promptText);
// numero = "1234";

if (!validaNumero(numero)) {
  console.log("El número introducido no es válido.");
} else {
  if (numero != numeroKaprekar) {
    console.log(calcularKaprecar(numero));
  }
  /**
   El while lo cambio a una funcion aparte ya que utilizando recursividad esta hara como si fuera un bucle 
   que cuando encuentre el valor indicado se parara gracias a los returns que tiene
   */
  function calcularKaprecar(numero) {
    // Llamamos a la función kaprekar.
    numero = kaprekar(numero);

    // Aumentamos el número de pasos.
    pasos++;

    // Evitamos bucles infinitos i/o innecesarios.
    if (pasos > 7) {
      return "Número de pasos superado, algo no está bien...";
    }
    // Si el número obtenido es el de Kaprekar, informamos
    // de los pasos realizados.
    if (numero == numeroKaprekar) {
      return "Pasos realizados: " + pasos;
    }
    return calcularKaprecar(numero);
  }
}
/*
  Función que realiza las operaciones necesarias para obtener
  el número de Kaprekar pasándole como parámetro el número a
  tratar.
  Devuelve el número obtenido.
*/
function kaprekar(numero) {
  // Creamos un array para poder tratar el número
  // dígito a dígito.
  let arrNumero = new Array();

  // Variables para guardar los números a restar.
  let mayor, menor;

  // Añadimos el número al array.

  // for(let i = 0; i < numero.length; i++) {
  //   arrNumero[i] = numero[i];
  // }

  // for(let i = 0; i < numero.length; i++) {
  //   arrNumero[i] = numero.charAt(i);
  // }

  for (let i = 0; i < numero.length; i++) {
    arrNumero.push(numero.charAt(i));
  }

  // Ordenamos el array con sort
  // Quedará de menor a mayor.
  arrNumero.sort();

  // Guardamos en la variable "menor" el contenido
  // del array "unido".
  menor = uneDigitos(arrNumero);

  // Le damos la vuelta al array y, por lo tanto, al número.
  //arrNumero.reverse();
  arrNumero = daleLaVuelta(arrNumero);

  // Guardamos en la variable "mayor" el contenido del array.
  mayor = uneDigitos(arrNumero);

  // Realizamos la resta.
  numero = mayor - menor;

  console.log(mayor + " - " + menor + " = " + numero);

  return formateaNumeroACuatroDigitos(numero.toString(), true);
}

/*
  Devuelve una cadena formada con los elementos del array
  pasado por parámetro, tomados como caracteres desde el
  de menor índice hasta el último.
*/
function uneDigitos(arrNumero) {
  let cadena = "";

  for (let i = 0; i < arrNumero.length; i++) {
    cadena += arrNumero[i];
  }

  return cadena;
}

/*
  Devuelve un array con los elementos cambiados simétricamente
  respecto al array pasado por parámetro.
*/
function daleLaVuelta(arrNumero) {
  let arrAux = new Array(arrNumero.length);

  for (let j = 0; j < arrNumero.length; j++) {
    arrAux[arrNumero.length - 1 - j] = arrNumero[j];
  }

  return arrAux;
}

/*
  Añade ceros delante o detrás de una cadena que representa
  un valor numérico que necesariamente ha de tener cuatro
  dígitos.
*/
function formateaNumeroACuatroDigitos(numero, esIzquierda) {
  if (esIzquierda) {
    if (numero.length == 3) {
      numero = "0" + numero;
    } else if (numero.length == 2) {
      numero = "00" + numero;
    } else if (numero.length == 1) {
      numero = "000" + numero;
    }
  } else {
    if (numero.length == 3) {
      numero = numero + "0";
    } else if (numero.length == 2) {
      numero = numero + "00";
    } else if (numero.length == 1) {
      numero = numero + "000";
    }
  }
  return numero;
}

/*
  Función que valida un número, comprobando que:
  - Sea un número.
  - No tenga más de 4 dígitos.
  - Al menos 2 dígitos diferentes.
  - Un dígito no se repita más de dos veces.
*/
function validaNumero(numero) {
  // Que sea un número.
  if (numero == null || isNaN(numero)) {
    return false;
  }

  // Que no tenga más de 4 dígitos.
  // if(numero.length > 4) {
  //   return false;
  // }

  if (+numero > 9999 || +numero <= 22) {
    return false;
  }

  // Que al menos 2 dígitos diferentes.
  //const numeros = Array.from(String(numero), Number);
  //const numeros = numero.split("");
  //const numeros = [...numero];
  const setNumeros = new Set(numero);
  //console.log(setNumeros);

  if (setNumeros.size < 2) {
    return false;
  }

  return true;
}
