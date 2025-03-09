function subir() {
    let comentario = document.getElementById("comentarioCaja").value;
    if (comentario === "") return;

    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment");
    commentContainer.innerHTML = `<div class="comentario"> <img src="./img/user.svg" width="32px"> <p>${comentario}</p></div>
                                  <button class="delete-btn" onclick="deleteBtn(this)">Eliminar</button>`;

    document.getElementById("comments-container").appendChild(commentContainer);
    document.getElementById("comentarioCaja").value = "";

};
function deleteBtn(button) {
    button.parentElement.remove();
}
