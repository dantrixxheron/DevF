let mesasDisponibles = 5;

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles, procediendo con la reserva...");
      } else {
        reject("No hay mesas suficientes disponibles. Intente en otro momento.");
      }
    }, 2000);
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.round(Math.random()); // 0 o 1
      if (exito === 1) {
        resolve(`¡Hola ${nombreCliente}! Su reservación ha sido confirmada por correo.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1500);
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log(`\n${nombreCliente} está intentando reservar ${mesasSolicitadas} mesa(s)...`);
    
    // Verificamos disponibilidad
    const mensajeDisponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(mensajeDisponibilidad);

    // Si todo bien, descontamos las mesas
    mesasDisponibles -= mesasSolicitadas;
    console.log(`Mesas restantes: ${mesasDisponibles}`);

    // Enviar confirmación por correo
    const mensajeCorreo = await enviarConfirmacionReserva(nombreCliente);
    console.log(mensajeCorreo);

  } catch (error) {
    console.log("Error:", error);
  }
}

// Pruebas
hacerReserva("Juan Pérez", 3);
hacerReserva("Ana Gómez", 3); // Esta puede fallar si no hay suficientes mesas
