//Pedida del numero
let numero = prompt("Elije un numero de 4 letras en el que se repitan como maximo 2 letras");

for (let i = 0; i <= 7; i++) {
  // Transformacion de numero -> cadena -> array separada por caracteres
  let numero_cadena = numero.toString();
  let separado = numero_cadena.split(""); //solo funciona si le envias una cadena

  //Ordenando cadena
  //se escribe asi o no va
  separado.sort((a, b) => {
    return a - b;
  });

  //clonando y dandole la vuelta
  let mayorMenor = separado.slice();//hace una copia de la cadena si estar vinculada a la otra ya que sino al cambiar una cambiara la original tmb
  mayorMenor.reverse();

  //Para comprobar la resta
  console.log(mayorMenor);
  console.log(separado);

  //La operacion
  let resultado = mayorMenor.join("") - separado.join("");// join para pasar de "1","2","3","4" a 1234

  //La ultima asignacion para volver ha empezar el bucle
  numero = resultado;
  console.log(resultado);
}
