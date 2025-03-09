function cambiarTexto(){
    //busca el que se llama exactamente igual
    let titulo=document.getElementById("titulo")
    //cambia el contenido con textContent
    titulo.textContent="Hola desde el DOM!"
}

function cambiarColor(){
    //toma todas las clases con ese nombre
    let parrafos=document.getElementsByClassName("texto")
    for (let i = 0; i < parrafos.length; i++) {
        //a todos los que encuentre los cambia en azul.
        parrafos[i].style.color="blue"
        
    }
}

function ocultarParrafo(){
    //toma el elemento
    let segundoParrafo=document.getElementsByTagName('p')[4];
    //oculta con display
    segundoParrafo.style.display="none";
}

function cambiarTextoDiv(){
    //toma el elemento p que se encuentre dentro del div
    let parrafoDiv=document.querySelector('div p');
    //cambiar texto
    parrafoDiv.textContent="Texto cambiado dentro del div"
}

function marcarItems(){
    //busca TODOS los que tengan la etiqueta li
    let items=document.querySelectorAll('li');
    //a cada uno de ellos le pone el color de fondo amarillo
    items.forEach(item=>{
        item.style.backgroundColor="yellow"
    })
}