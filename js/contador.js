// Obtener referencia al elemento del contador
const contadorElemento = document.querySelector("#contador");

// Obtener referencia a los botones
const sumarBoton = document.querySelector("#sumar");
const restarBoton = document.querySelector("#restar");

// Variable para almacenar el valor del contador
let contador = 0;

// Deshabilitamos el botón de restar para que no pueda poner números negativos
restarBoton.disabled = true;

const actualizarContador = () => {
  contadorElemento.innerHTML = contador;


  if (contador === 0) {
    restarBoton.disabled = true;
  } else {
    restarBoton.disabled = false;
  }
};

sumarBoton.onclick = () => {
  contador++;
  actualizarContador();
};

restarBoton.onclick = () => {
  contador--;
  actualizarContador();
};