// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturamos el valor del campo de texto
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Agregamos el nombre al arreglo
    listaAmigos.push(nombre);

    // Limpiamos el campo de texto
    input.value = "";

    console.log("Lista actualizada:", listaAmigos); // Para pruebas
    // Después de agregar y limpiar el input
    mostrarListaAmigos();
}

