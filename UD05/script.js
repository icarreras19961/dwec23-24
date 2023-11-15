//querySelector()
//parametro: selector CSS

// const para = document.querySelector("body > h1:nth-child(2)");
// console.log(para);

// ------------------------------------------------
//querySelectorAll()
//parametro: selector CSS

// const paras = document.querySelectorAll("p");
// console.log(paras);
// console.log(paras[0]);
// paras.forEach((para) => {
//   console.log(para);
// });

//-----------------------------------------------
//getElementById
//parametro: nombre del identificador
// const titulo = document.getElementById("titulo")
// console.log(titulo);

//-------------------------------------------------
//getElementsByClassName
//parametro: nombre de la clase asociada a ese elemento
// const error = document.getElementsByClassName('error')
// console.log(error);
// console.log(error[0]);

//-------------------------------------------
//getElementsByTagName
//parametros: nombre del tag del elemento
// const para = document.getElementsByTagName('p')
// console.log(para);

//----------------------------------------------
//modificar el contenido de la pagina
//innerHTML, innerText
// let para = document.querySelector("p");
// let paras = document.querySelectorAll("p");
// let p1 = paras[0];
// let contenido = p1.innerText;
// console.log(contenido);
// p1.innerText = "requete";
// contenido = p1.innerText;
// console.log(contenido);

//-------------------------------------------------------
//Obtener y establecer atributos
// let enlace = document.querySelector("a");
// let url = enlace.getAttribute("href");
// console.log(enlace);
// enlace.setAttribute("href", "http://www.seat.es");
// url = enlace.getAttribute("href");
// console.log(url);

//------------------------------------------------------
//Añadir y eliminar estilos
//style
// let error = document.querySelector("body > div:nth-child(3) > div");
// error.style.backgroundColor = "lightblue";
// error.style.backgroundColor = "";

//------------------------------------------------------
//Añadir y eliminar clases
// let error = document.querySelector("body > div:nth-child(3) > div");
// console.log(error.classList);
// error.classList.add("paco");
// error.classList.remove("error");

// let paras = document.getElementsByTagName("p");
// let hijo = paras[1];
// console.log(hijo);
// let padre = hijo.parentNode;
// console.log(padre);
// let primerHermano = padre.firstElementChild;
// let siguienteHermano = hijo.nextElementSibling;

//----------------------------------------------------------
// EVENTOS
// const par = document.querySelector("p");

// par.addEventListener("click", (e) => {
//   // clica();
//   e.target.innerText = "texto Cambiado";
//   console.log(e.target.innerText);
// });

// // par.addEventListener("mouseover", () => {
// //   pasaPorEncima()
// // });

// // function pasaPorEncima() {
// //   console.log("Ha pasado por encima");
// // }

// function clica() {
//   console.log("He echo clin en el p1");
// }
// document.addEventListener("keydown", (e) => {
//   console.log("Tecla presionada: " + e.key);
// });
