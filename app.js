// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres
let amigos = [];

//Funcion para almacenar los nombres
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //validar que el campo no este vacio
    if (nombreAmigo === "") {
        alert("Por favor, inserta un nombre valido");
        return;
    }
    
    //Agregar el nombre al Array
    amigos.push(nombreAmigo);

    //Actualiza la vista actual
    actualizarLista();

    //Limpia los campos de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

//Actualiza la lista visual
function actualizarLista() {
    const listaAmigoslu =document.getElementById("listaAmigos")
    listaAmigoslu.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigoslu.appendChild(li);
    });
}


//Valida que almenos exista un amigo en la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agregar nombre");
        return;
    }

    //Genera indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //Obtiene el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    //Muestra los resultados del sorteo (dinamico)
    const resultadoAm = document.getElementById("resultado");
    resultadoAm.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}

 //Asignación de eventos a los Botones
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
        document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
    });