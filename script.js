// alert("Hola este es mi Javascript");

// let nombre =" jhan ";
// let nombre1 =" jhan ";
// let nombre2=" jhan ";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

// SELECCIONAR ELEMENTOS

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  let navBar = document.querySelector(".navbar"); // Agregué "let" antes de navBar
  navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`; // Corregí "carcateres" a "caracteres"
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (!validarFormulario()) {
    e.preventDefault(); // Corregí la condición, ahora evita el envío si no es válido
  }
});