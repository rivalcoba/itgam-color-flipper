const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Obteniendo control del botón
const btn = document.getElementById("btn");
// Obteniendo control del span
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // Generando un color hexadecimal aleatorio
  let hexColor = "#";
  // Seleccionando 6 valores aleatorios de la lista hex
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // Cambiando el color de fondo del body
  color.textContent = hexColor;
  // Cambiando el texto del span
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}