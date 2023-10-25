let elCrono;
let miFecha = new Date();
let lahora = document.getElementById("lahora");

//Para marcar donde empieza
miFecha.setHours(0, 0, 10, 0);

//Inicializo el tiempo para el cronometor
lahora.innerHTML = "00:00:10";

function crono() {
  //Las variables equivalentes a las horas,minutos y segundos
  let horas = miFecha.getHours();
  let minutos = miFecha.getMinutes();
  let segundos = miFecha.getSeconds();

  //lo que hace que el cronometro funcione
  //si pones -= va atras y si pones += va palante
  segundos -= 1;

  //parafernalia del cronometro para alate
  if (segundos == 60) {
    segundos = 0;
    minutos += 1;
    miFecha.setMinutes(minutos);
  }
  miFecha.setSeconds(segundos);
  if (horas < 10) {
    horas = "0" + horas;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  lahora.innerHTML = horas + ":" + minutos + ":" + segundos;

  //Cuando el contador llegue ha cero este cronometro se para
  if (segundos == 0) {
    parar();
  }
}
function start() {
  elCrono = setInterval(crono, 1000);
}
function parar() {
  clearInterval(elCrono);
}
function reiniciarCrono() {
  miFecha.setHours(0, 0, 10, 0);

  lahora.innerHTML = "00:00:10";
}

function reset() {
  setTimeout(reiniciarCrono);
}
