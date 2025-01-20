// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
y lo agregarán a una lista visible al hacer clic en "Agregar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", 
se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

// Array para almacenar los nombres de los amigos
var amigos = [];

/*
Función que agregar un amigo a la lista.
Comprueba si el campo de texto está vacío, si es así, muestra una alerta.
Si no, crea un elemento li, le asigna el valor del campo de texto y lo agrega a la lista.
Finalmente, limpia el campo de texto.
*/
function agregarAmigo() {
    //Obtener el nombre del amigo
    let friend = document.getElementById('amigo').value;
    //Validar si el campo de texto está vacío
    if (friend === "") {
        alert("Por favor, ingrese un nombre válido");
    } else {
        amigos.push(friend);
        // Crear un elemento li y agregarlo a la lista
        let list = document.getElementById('listaAmigos');
        // Crear un elemento li
        let li = document.createElement('li');
        //Asignar el valor del campo de texto al elemento li
        li.textContent = friend;
        // Agregar el elemento li a la lista
        list.appendChild(li);
        //Limpiar el campo de texto
        document.getElementById('amigo').value = "";
    }
}

/*
Función que selecciona un amigo aleatorio de la lista y lo muestra en la página.
comprueba si hay nombres en la lista, si no, muestra una alerta.
Si hay nombres, selecciona uno aleatoriamente y lo muestra en la página.
*/
function sortearAmigo() {
    // Obtener la lista de amigos
    var list = document.getElementById("listaAmigos");
    // Obtener los nombres de la lista
    var nombres = list.getElementsByTagName("li");
    // Comprobar si hay nombres en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }
    // Obtener el elemento donde se mostrará el resultado
    var resultList = document.getElementById("resultado");
    // Seleccionar un valor aleatorio de la lista
    var valorAleatorio = Math.floor(Math.random() * nombres.length);
    // Obtener el nombre seleccionado
    var nombreSeleccionado = amigos[valorAleatorio];
    // Mostrar el nombre seleccionado en la página
    var li = document.createElement('li');
    //Asignar el valor del campo de texto al elemento li
    li.textContent = "Tu amigo secreto es: " + nombreSeleccionado;
    // Agregar el elemento li a la lista
    resultList.appendChild(li);
}
/*
Función que limpia la lista de amigos.
*/
function limpiarLista() {
    // Limpiar la lista de amigos
    var list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    // Limpiar el resultado del sorteo
    var resultList = document.getElementById("resultado");
    resultList.innerHTML = "";
    // Limpiar el array de amigos
    amigos = [];
}