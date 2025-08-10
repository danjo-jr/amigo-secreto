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

//Función para actualizar lista de amigos
function mostrarListaAmigos() {
    // Obtenemos el elemento UL o OL donde se mostrará la lista
    let listaHTML = document.getElementById("listaAmigos");

    // Limpiamos el contenido anterior para evitar duplicados
    listaHTML.innerHTML = "";

    // Recorremos el arreglo de amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        // Creamos un elemento <li> para cada amigo
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];

        // Lo agregamos a la lista en el HTML
        listaHTML.appendChild(li);
    }
}


