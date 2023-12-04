// console.log("uno");
// console.log("dos");

// setTimeout(() => {
//   console.log("Funcion de callback lanzada");
// }, 3000);

// console.log("tres");
// console.log("cuatro");
const obtenerTodos = (callback, source) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
      const respuesta = JSON.parse(request.responseText);
      callback(undefined, respuesta);
    } else if (request.readyState === 4) {
      // console.lg("no se han podido obtener los datos");
      callback("no se han podido obtener los datos", undefined);
    }
  });
  //open
  //p1: tipo de solicitud
  //p2: a quien le hacemos la solicitud (a que endpoint)

  request.open("GET", source);

  //send
  request.send();
};
console.log("uno");
console.log("dos");

obtenerTodos((error, datos) => {
  getionaRespuesta(error, datos);

  obtenerTodos((error, datos) => {
    getionaRespuesta(error, datos);

    obtenerTodos((error, datos) => {
      getionaRespuesta(error, datos);
    }, "todos/tareas3.json");
  }, "todos/tareas2.json");
}, "todos/tareas1.json");

function getionaRespuesta(error, datos) {
  console.log("callback disparado");
  // console.log(error, datos);
  if (error) {
    console.log("error");
  } else {
    console.log(datos);
  }
}
console.log("tres");
console.log("cuatro");
