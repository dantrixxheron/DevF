document.addEventListener('DOMContentLoaded', function() {
    //traer secciones
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const contacto = document.getElementById('contacto');

    //traer navegacion
    const menuInicio = document.getElementById('menu-inicio');
    const menuProductos = document.getElementById('menu-productos');
    const menuContacto = document.getElementById('menu-contacto');

    //traer el carrito
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0;

    //traer formulario de contacto
    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    //evento para mostrar la sección de inicio y ocultar las demás
    menuInicio.addEventListener('click', (e)=> {
        e.preventDefault();  //evita un comportamiento por defecto
        inicio.style.display = 'block';
        productos.style.display = 'none';
        contacto.style.display = 'none';
    });

    //evento para mostrar la sección de productos y ocultar las demás
    menuProductos.addEventListener('click', (e)=> {
        e.preventDefault();  //evita un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'block';
        contacto.style.display = 'none';
    });

    //evento para mostrar la sección de contacto y ocultar las demás
    menuContacto.addEventListener('click', (e)=> {
        e.preventDefault();  //evita un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'none';
        contacto.style.display = 'block';
    });

    //evento para agregar productos al carrito
    productos.addEventListener('click', (e)=> {
        //el target es una propiedad que nos dice en que elemento se hizo click
        if(e.target.classList.contains('agregar-carrito')) {
            const nombre= e.target.dataset.nombre;
            const precio= parseInt(e.target.dataset.precio);
            
            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `${nombre} - $${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio;
            actualizarTotalCarrito();
        }
    });
    const totalElemento=document.querySelector('#total-carrito');
    
    function actualizarTotalCarrito(){
        totalElemento.textContent=total;
    }
    
    //titulo del carrito con querySelector
    const tituloCarrito=document.querySelector('#carrito h2');
    tituloCarrito.textContent='Sus pasteles seleccionados';

    formularioContacto.addEventListener('submit', function(e) {
        e.preventDefault();
        formularioContacto.style.display = 'none';
        mensajeEnviado.style.display = 'block';
    });
    
    //mostrar precio del producto
    productos.addEventListener('mouseover', (e)=> {
        if(e.target.classList.contains('producto')) {
            const precio= e.target.querySelector('.agregar-carrito').dataset.precio;
           e.target.setAttribute('title', `Precio: $${precio}`);
        }
    });
});
