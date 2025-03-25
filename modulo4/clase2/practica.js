let listaDeCompras = [];

// Función para agregar producto
const agregarProducto = () => {
    const producto = document.querySelector('#producto').value.trim();
    if (producto && !listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        document.getElementById('producto').value = ''; // Limpiar campo de texto
    } else {
        alert('Producto ya existe o no válido.');
    }
};

// Función para mostrar la lista de compras
const mostrarLista = () => {
    const listaHTML = listaDeCompras.map(producto => 
        `<li><button onclick="eliminarProducto('${producto}')"><span class="material-symbols-outlined">delete</span></button> ${producto} </li>`
    ).join('');
    document.getElementById('listaDeCompras').innerHTML = listaHTML;
};

// Función para eliminar producto
const eliminarProducto = (producto) => {
    listaDeCompras = listaDeCompras.filter(item => item !== producto);
    mostrarLista();
};