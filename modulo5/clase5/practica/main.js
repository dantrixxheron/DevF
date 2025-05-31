document.getElementById('registroEvento').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    //validaciones adicionales
    // 1. Validar que el nombre no contenga números y que tenga al menos 3 caracteres
    if (nombre.length <= 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return;
    }
    // 2. Validar que el numero de teléfono sea válido (10 dígitos)
    if (!/^\d{10}$/.test(telefono)) {
        alert('El número de teléfono debe tener 10 dígitos.');
        return;
    }
    // 3. Validar que la fecha sea válida y no esté en el pasado
    const fechaSeleccionada = new Date(fecha);
    const fechaActual = new Date();
    if (fechaSeleccionada < fechaActual) {
        alert('La fecha seleccionada no puede estar en el pasado.');
        return;
    }


    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});