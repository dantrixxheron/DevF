const ordenList = document.getElementById('ordenList');
const addOrd = document.getElementById('addOrden');

let idOrden = 1; // Para identificar los pedidos

addOrd.addEventListener('click', () => {
    const orden = { id: idOrden++, status: 'En Proceso' };
    addOrden(orden);
    processOrden(orden);
});

function addOrden(orden) {
    const listItem = document.createElement('li');
    listItem.id = `orden-${orden.id}`;
    listItem.textContent = `Pedido #${orden.id}: ${orden.status}`;
    ordenList.appendChild(listItem);
}

function updateOrdenStatus(orden, status) {
    const listItem = document.getElementById(`orden-${orden.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${orden.id}: ${status}`;
    }
    if (status === "Completado") {
        listItem.classList.add("completado");
    }
}

async function processOrden(orden) {
    // Simular la preparación del pedido usando setTimeout y Promise
    // Actualizar el estado del pedido a "Completado"
    await new Promise((resolve) => {
        const tiempoPreparacion = Math.floor(Math.random() * 3000) + 1000; // simular la variablidad de 1 a 4 segundos
        setTimeout(() => {
            resolve();
        }, tiempoPreparacion);
    });

    completarOrden(orden);

}
function completarOrden(orden){
    updateOrdenStatus(orden,"Completado")
}