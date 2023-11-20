//Capturar elementos de las DOM
const contenidor = document.querySelector(".contenidor");
const seients = document.querySelectorAll(".fila .seient:not(.ocupat)");
const contador = document.getElementById("contador");
const total = document.getElementById("total");
const peliculaSelect = document.getElementById("pelicula");

//Precio de la pelicula seleccionada
let preuDelTicket = +peliculaSelect.value;

//Funciones
function actualitzaSeleccioSeients() {
  const seientsSeleccionats = document.querySelectorAll(
    ".fila .seient.seleccionat"
  );

  // const seientsIndex = [...seientsSeleccionats].map(function (seient) {
  //   return [...seients].indexOf(seient);
  // });
  const seientsIndex = [...seientsSeleccionats].map((seient) =>
    [...seients].indexOf(seient)
  );

  localStorage.setItem("seientsSeleccionats", JSON.stringify(seientsIndex));

  const contadorSeientsSeleccionats = seientsSeleccionats.length;
  contador.innerText = contadorSeientsSeleccionats;

  total.innerText = contadorSeientsSeleccionats * preuDelTicket;
}

function ompleuUi() {
  const seientsSeleccionats = JSON.parse(
    localStorage.getItem("seientsSeleccionats")
  );
  if (seientsSeleccionats !== null && seientsSeleccionats.length > 0) {
    seients.forEach((seient, index) => {
      if (seientsSeleccionats.indexOf(index) > -1) {
        seient.classList.add("seleccionat");
      }
    });
  }

  const indexPeliculaSeleccionada = localStorage.getItem(
    "indexPeliculaSeleccionada"
  );

  if (indexPeliculaSeleccionada !== null) {
    peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
  }

  const preuPeliculaSeleccionada = localStorage.getItem(
    "preuPeliculaSeleccionada"
  );

  if (preuPeliculaSeleccionada !== null) {
    preuDelTicket = +preuPeliculaSeleccionada;
  }
}

/*EVENTOS*/
contenidor.addEventListener("click", (e) => {
  // console.log(e.target);
  if (
    e.target.classList.contains("seient") &&
    !e.target.classList.contains("ocupat")
  ) {
    e.target.classList.toggle("seleccionat");
    actualitzaSeleccioSeients();
  }
});

peliculaSelect.addEventListener("change", (e) => {
  preuDelTicket = +e.target.value;

  localStorage.setItem("indexPeliculaSeleccionada", e.target.selectedIndex);
  localStorage.setItem("preuPeliculaSeleccionada", e.target.value);
  actualitzaSeleccioSeients();
});

actualitzaSeleccioSeients();