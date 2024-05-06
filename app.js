const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Get the button element
const btn = document.getElementById("btn");
// Get the color element
const color = document.querySelector(".color");

// Add event listener to the button
btn.addEventListener("click", ()=>{
  // Obtener un número aleatorio entre 0 y 3
  const randomNumber = getRandomNumber();
  // Seleccionado un elemento
  // del arreglo colors
  const colorPicked = colors[randomNumber];
  // Cambiar el color del body
  document.body.style.backgroundColor = colorPicked;
  // Cambiar el color del texto
  color.textContent = colorPicked;
});

// Función para obtener un número aleatorio
function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}