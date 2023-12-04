//Recuperar los elementos del DOM que nos interesan.
const boton = document.getElementsByTagName("button");
const envoltorio = document.getElementsByClassName("envoltorio-popup");
const cerrar = document.getElementsByClassName("cerrar-popup");

console.log(boton);
//Eventos
//click sobre el boton para mostrar el pop-up
boton[0].addEventListener("click", () => {
  envoltorio[0].style.display = "block";
});

//Click sobre el boton para cerrar el popup
cerrar[0].addEventListener("click", () => {
  envoltorio[0].style.display = "none";
});

//click sobre el envoltorio -> cerrar el popup
envoltorio[0].addEventListener("click", () => {
  envoltorio[0].style.display = "none";
});

