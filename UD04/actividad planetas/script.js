/*
   ========
   PLANETAS
   ========
*/

let planeta1 = ["Mercurio", 61741000, 0.1, "mucho"];
let planeta2 = ["Venus", 107000000, 0.8, "mucho"];
let planeta3 = ["Tierra", 149100000, 0, "mucho"];
let planeta4 = ["Marte", 743620000, 0.5, "mucho"];
let planeta5 = ["Jupiter", 82000000, 318, "mucho"];
let planetas = [planeta1, planeta2, planeta3, planeta4, planeta5];

function Planeta() {
  this.nombre;
  this.distanciaSol;
  this.tamañoRelativo;
  this.descuebierto;
  this.info = function () {
    return (
      "El planeta: " +
      this.nombre +
      "\nDistancia del sol: " +
      this.distanciaSol +
      "\nTamaño relativo: " +
      this.tamañoRelativo +
      "\nDescubierto en: " +
      this.descuebierto
    );
  };
}
// console.log(planetas[1][1]);
let planeta = new Planeta();
for (let i = 0; i < planetas.length; i++) {
  for (let j = 0; j <= 3; j++) {
    if (j === 0) {
      planeta.nombre = planetas[i][j];
    } else if (j === 1) {
      planeta.distanciaSol = planetas[i][j];
    } else if (j === 2) {
      planeta.tamañoRelativo = planetas[i][j];
    } else if (j === 3) {
      planeta.descuebierto = Date();
    }
  }
  console.log(planeta.info());
}
