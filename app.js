// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
y lo agregarán a una lista visible al hacer clic en "Agregar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", 
se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

/*
Función que selecciona un amigo aleatorio de la lista y lo muestra en la página.
Comprueba si el campo de texto está vacío, si es así, muestra una alerta.
Si no, crea un elemento li, le asigna el valor del campo de texto y lo agrega a la lista.
Finalmente, limpia el campo de texto.
*/

function agregarAmigo(){
    let friend = document.getElementById('amigo').value;
    if(friend === ""){
        alert("Por favor, ingrese un nombre válido");
    }else{
        let list = document.getElementById('listaAmigos');
        let li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
        document.getElementById('amigo').value = ""; //Limpiar el campo de texto
    }
}