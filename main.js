let respuestaUsuario;



let nombreUsuario = prompt("Buenaaasss Tutor! Espero que se encuentre bien. \n¿Cual es tu nombre?");


alert(`¡Bienvenido Tutor ${nombreUsuario} A continuacion tendras que resolver una adivinanza de la cual nada mas contaras con 3 intentos para adivinar de que se trata. \n¡COMENZEMOS!`);

alert("Blanca por dentro, verde por fuera. Si no sabes, espera. ¿Qué es?");

let intentos = 0;
let respuestaCorrecta = "una pera";


function pedirRespuestaUsuario() {
    respuestaUsuario = prompt("Introduce tu respuesta");

    intentos++;

    if (3 - intentos > 0 && respuestaUsuario !== respuestaCorrecta) {
        alert("Te quedan " + (3 - intentos) + " intentos");
    }
}

const verificarRespuesta = (respuestaIngresada) => {
    if (respuestaIngresada != respuestaCorrecta) {
      alert("La respuesta es incorrecta");
     } else {
      alert(`Felicidades ${nombreUsuario} has adivinado en ${intentos} intentos`);
    }
  }

  const verificarIntentos = () => {
    if (intentos >= 3) {
      alert(
        `Lo siento Tutor ${nombreUsuario} has perdido no te quedan más intentos. 
        La respuesa correcta es: "una pera"`);
    }
  }
  while (respuestaUsuario !== respuestaCorrecta && intentos < 3) {
    pedirRespuestaUsuario();
    verificarRespuesta(respuestaUsuario);
    verificarIntentos();
  }