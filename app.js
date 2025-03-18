// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validación: evitar agregar nombres vacíos o duplicados
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    // Agregar nombre al array y actualizar la lista en pantalla
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar campo de entrada
    input.value = "";
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agregue al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;

    // Limpiar la lista de amigos después del sorteo
    amigos = [];
    actualizarListaAmigos();
}
