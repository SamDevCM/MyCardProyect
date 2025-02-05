document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtén los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Limpia mensajes de error anteriores
    clearErrorMessages();

    // Validación básica
    if (!name || !email || !message) {
        showError('Por favor, completa todos los campos.');
        return;
    }

    // Validación de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Deshabilita el botón de enviar
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    // Simulación de envío (puedes reemplazar esto con una llamada a tu backend)
    setTimeout(() => {
        // Aquí puedes hacer una llamada fetch para enviar los datos a un servidor
        // fetch('/tu-endpoint', { method: 'POST', body: JSON.stringify({ name, email, message }) })

        // Muestra un mensaje de éxito
        showSuccess('¡Mensaje enviado con éxito!');

        // Limpia el formulario
        document.getElementById('contactForm').reset();

        // Habilita el botón de enviar nuevamente
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Mensaje';
    }, 2000); // Simula un retraso de 2 segundos para el envío
});

// Función para mostrar mensajes de error
function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '10px';
    errorMessage.style.textAlign = 'center';

    // Inserta el mensaje de error antes del botón de enviar
    const form = document.getElementById('contactForm');
    form.appendChild(errorMessage);
}

// Función para mostrar mensajes de éxito
function showSuccess(message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;
    successMessage.style.color = 'green';
    successMessage.style.marginTop = '10px';
    successMessage.style.textAlign = 'center';

    // Inserta el mensaje de éxito antes del botón de enviar
    const form = document.getElementById('contactForm');
    form.appendChild(successMessage);

    // Elimina el mensaje después de 3 segundos
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Función para limpiar mensajes de error anteriores
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
}

// Mostrar spinner
document.getElementById('loadingSpinner').style.display = 'block';

// Ocultar spinner después del envío
setTimeout(() => {
    document.getElementById('loadingSpinner').style.display = 'none';
}, 2000);