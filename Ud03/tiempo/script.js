//setInterval() i setTimeOut()

/*setTimeOut(funcionALlamar, milisegundos)
 * Ejecuta la funcion funcionALamar transcurrido el tiempo indicado en el segundo parametro.
 *
 * setInterval(funcionALlamar, milisegundos)
 * Ejecita la funcionALlamar de forma periodica segun el tiempo del segundo parametro
 *
 * clearInterval()
 * Detiene la ejecucion iniciada con setInterval()
 *
 * clearTimeOut()
 * Detiene la ejecucuin iniciada con setTimeOut()
 */

function crono() {
  let elCrono;
  let miFecha = new Date();
  let horas = miFecha.getHours();
  let minutos = miFecha.getMinutes();
  let segundos = miFecha.getSeconds();
  let milisegundos = miFecha.getMilliseconds();
  let ampm = "pm";

  if (horas > 12) {
    ampm = "pm";
    // horas -= 12;
  } else {
    ampm = "am";
  }

  if (horas < 10) {
    horas = "0" + horas;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  let lahora = document.getElementById("lahora");
  lahora.innerHTML =
    horas + ":" + minutos + ":" + segundos + ":" + milisegundos + " " + ampm;
}

window.onload = function () {
  elCrono = setInterval(crono, 1);
};
