/*
   ========
   PLANETAS
   ========
*/
let nombres = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter"];
let distanciaSol = [6174100, 107000, 149100000, 74362000, 820];
let tamañoRelativo = [0.1, 0.8, 0, 0.5, 318];

class Planeta {
  constructor(nombre, distanciaSol, tamañoRelativo, fecha) {
    this.nombre = nombre;
    this.distanciaSol = distanciaSol;
    this.tamañoRelativo = tamañoRelativo;
    this.fecha = fecha;
  }
  info() {
    console.log(
      "El planeta: " +
        this.nombre +
        "\nDistancia del sol: " +
        this.distanciaSol +
        "\nTamaño relativo: " +
        this.tamañoRelativo +
        "\nDescubierto en: " +
        this.fecha
    );
  }
}

let planeta1 = new Planeta();
let planeta2 = new Planeta();
let planeta3 = new Planeta();
let planeta4 = new Planeta();
let planeta5 = new Planeta();
let planetas = [planeta1, planeta2, planeta3, planeta4, planeta5];

console.log("Sin ordenar por distancia");
for (let i = 0; i < nombres.length; i++) {
  planetas[i].nombre = nombres[i];
  planetas[i].distanciaSol = distanciaSol[i];
  planetas[i].tamañoRelativo = tamañoRelativo[i];
  planetas[i].fecha = Date();
  planetas[i].info();
}

planetas.sort((a, b) => a.distanciaSol - b.distanciaSol);
console.log("\n");
console.log("Ordenados por distancia");
for (let i = 0; i < planetas.length; i++) {
  planetas[i].info();
}
