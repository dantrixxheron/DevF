document.addEventListener("DOMContentLoaded", () => {
    // Actualizar los comentarios al cargar la página
    updateComments();
});

class Comentario {
    constructor(email, username, avatar, comentario) {
        this.email = email;
        this.username = username;
        this.avatar = avatar;
        this.comentario = comentario;
    }
    agregarComentarioLStorage() {
        // Crear un nuevo comentario
        let newComment = new Comentario(this.email, this.username, this.avatar, this.comentario);
        // Agregar el comentario al localStorage
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(comments));
    }
}
function addComentarioLStorage() {
    // Obtener los valores de los campos del formulario
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let avatar = document.getElementById("avatar").value;
    let comentario = document.getElementById("comentarioCaja").value.trim();

    if (comentario === "") return;

    // Asignar valores predeterminados
    if (avatar === "") avatar = "./img/neutralUser.png";
    if (username === "") username = "Anonymous";
    if (email === "") email = "johndoe@example.com";
    var newComment = new Comentario(email, username, avatar, comentario);
    newComment.agregarComentarioLStorage();
    updateComments();
    clearInputs();
}
function updateComments() {
    // Obtener los comentarios del localStorage
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    // Limpiar el contenedor de comentarios
    document.getElementById("comments-container").innerHTML = "";
    // Recorrer los comentarios y agregarlos al contenedor
    comments.forEach((comment) => {
        addCommentToContainer(comment.email, comment.username, comment.avatar, comment.comentario);
    });}
function addCommentToContainer(email, username, avatar, comentario) {
    //creación de la estructura del comentario.
    /*
    <div class="comentarioCuadro">
        <div class="comentario">
                <img src="./img/maleUser.png" class="avatar">
                <div class="comentario-content">
                    <strong>${username}</strong> <br>
                    <small>(${email})</small>
                    <p>${commentText}</p>
                </div>
                <button class="delete-btn" onclick="deleteBtn(this)"><span class="material-symbols-outlined">
                    delete
                    </span></button>
            </div>
        </div>
    </div>
    */
    // Contenedor principal del comentario
    let comentarioCuadro = document.createElement("div");
    comentarioCuadro.classList.add("comentarioCuadro");
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comentario");

    // Avatar del usuario
    let avatarHTML = document.createElement("img");
    avatarHTML.src = avatar;
    avatarHTML.classList.add("avatar");

    // Contenedor del contenido del comentario
    let comentarioContentHTML = document.createElement("div");
    comentarioContentHTML.classList.add("comentario-content");

    // Elementos de contenido (nombre, email, comentario)
    let strongHTML = document.createElement("strong");
    strongHTML.textContent = username;

    let smallHTML = document.createElement("small");
    smallHTML.textContent = `(${email})`;

    let pHTML = document.createElement("p");
    pHTML.textContent = comentario;

    // Botón de eliminar
    let buttonHTML = document.createElement("button");
    buttonHTML.classList.add("delete-btn");
    buttonHTML.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    buttonHTML.onclick = function () {
        comentarioCuadro.remove();
        // Eliminar comentario del localStorage
        eliminarComentLStorage(username);
    };

    // Construcción de la estructura
    comentarioContentHTML.appendChild(strongHTML);
    comentarioContentHTML.appendChild(document.createElement("br"));
    comentarioContentHTML.appendChild(smallHTML);
    comentarioContentHTML.appendChild(pHTML);
    commentContainer.appendChild(avatarHTML);
    commentContainer.appendChild(comentarioContentHTML);
    commentContainer.appendChild(buttonHTML);
    comentarioCuadro.appendChild(commentContainer);

    // Agregar comentario al contenedor principal
    document.getElementById("comments-container").appendChild(comentarioCuadro);
}

// Función para limpiar los campos del formulario
function clearInputs() {
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("avatar").value = "";
    document.getElementById("comentarioCaja").value = "";
}
function eliminarComentLStorage(username){
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments = comments.filter((comment) => comment.username !== username);
    localStorage.setItem("comments", JSON.stringify(comments));
}