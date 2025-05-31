// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
  name: z.string().min(4, "El nombre debe tener al menos 4 caracteres"),
  email: z.string().email("El correo electrónico no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const form = document.getElementById("registerForm");
const errorsParagraph = document.getElementById("errors");

// Función reutilizable para validar un solo campo
function validateField(fieldName, value) {
  try {
    registerSchema.pick({ [fieldName]: true }).parse({ [fieldName]: value });
    return "";
  } catch (error) {
    return error.errors[0].message;
  }
}

// Validación en tiempo real para cada campo
["name", "email", "password"].forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  input.addEventListener("input", () => {
    const errorMessage = validateField(fieldId, input.value);
    errorsParagraph.textContent = errorMessage;
  });
});

// Validación completa al enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    registerSchema.parse(formData);
    errorsParagraph.textContent = ""; // Limpiar errores
    alert("¡Registro exitoso!");
  } catch (error) {
    errorsParagraph.textContent = error.errors.map(e => e.message).join(", ");
  }
});
