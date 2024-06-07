document.getElementById('formulario').addEventListener('submit', function(event) {
    
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const asuntoError = document.getElementById('asuntoError');
    const mensajeError = document.getElementById('mensajeError');
    nombreError.textContent = '';
    emailError.textContent = '';
    asuntoError.textContent = '';
    mensajeError.textContent = '';

    let isValid = true;

    // Validar nombre
    if (!nombre) {
        nombreError.textContent = 'Por favor, ingrese su nombre.';
        isValid = false;
    } else if (nombre.length > 50) {
        nombreError.textContent = 'El nombre no debe exceder los 50 caracteres.';
        isValid = false;
    }

    // Validar email
    if (!email) {
        emailError.textContent = 'Por favor, ingrese su email.';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, ingrese un email válido.';
        isValid = false;
    }

    // Validar asunto
    if (!asunto) {
        asuntoError.textContent = 'Por favor, ingrese un asunto.';
        isValid = false;
    }

    // Validar mensaje
    if (!mensaje) {
        mensajeError.textContent = 'Por favor, ingrese un mensaje.';
        isValid = false;
    } else if (mensaje.length > 300) {
        mensajeError.textContent = 'El mensaje no debe exceder los 300 caracteres.';
        isValid = false;
    }

    
    if (isValid) {
        alert('Formulario enviado exitosamente.');
        this.submit();
    }
});

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

