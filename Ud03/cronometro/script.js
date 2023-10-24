// Mi intento

// let refresco;
// function cronometro() {
//   let eltiempo = new Date();
//   let horas = eltiempo.setHours(0, 0, 0, 0);
//   let minutos = eltiempo.getMinutes();
//   let segundos = eltiempo.getSeconds();
//   let milisegundos = eltiempo.getMilliseconds();

//   let tiempo = document.getElementById("tiempo");
//   tiempo.innerHTML =
//     horas + ":" + minutos + ":" + segundos + ":" + milisegundos;
// }
// function start() {
//   refresco = setInterval(cronometro, 1);
// }
// function parar() {
//   clearInterval(refresco);
// }

//-----------------------------------------
let elCrono;
let miFecha = new Date();
let lahora = document.getElementById("lahora");

miFecha.setHours(0, 0, 0, 0);

//Inicializo el tiempo para el cronometor
lahora.innerHTML = "00:00:00";

function crono() {
  let horas = miFecha.getHours();
  let minutos = miFecha.getMinutes();
  let segundos = miFecha.getSeconds();

  segundos += 1;

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
}
function start() {
  elCrono = setInterval(crono, 1000);
}
function parar() {
  clearInterval(elCrono);
}
function reiniciarCrono() {
  miFecha.setHours(0, 0, 0, 0);

  lahora.innerHTML = "00:00:00";
}

function reset() {
  setTimeout(reiniciarCrono);
}
