let idiomaActual = "es"; 
function cambiarIdioma() {
    let icono = document.getElementById("iconoIdioma");

    // 🔄 Cambiar entre español e inglés
    if (idiomaActual === "es") {
        idiomaActual = "en"; // Cambia a inglés
        icono.src = "spain.png"; // Cambia la bandera
        traducirPagina("en");
    } else {
        idiomaActual = "es"; // Cambia a español
        icono.src = "gb.png"; // Cambia la bandera
        traducirPagina("es");
    }
}
const traducciones = {
    es: {
        titulo: "Contacto",
        descripcion: "Si deseas comunicarte conmigo, llena el siguiente formulario:",
        nombre: "Nombre:",
        email: "Correo Electrónico:",
        mensaje: "Mensaje:",
        enviar: "Enviar",
        infoContacto: "Información de Contacto",
        direccion: "Dirección:"
    },
    en: {
        titulo: "Contact",
        descripcion: "If you want to contact me, fill out the form below:",
        nombre: "Name:",
        email: "Email Address:",
        mensaje: "Message:",
        enviar: "Send",
        infoContacto: "Contact Information",
        direccion: "Address:"
    }
};

function traducirPagina(idioma) {
    document.querySelector("h1").innerText = traducciones[idioma].titulo;
    document.querySelector(".container p").innerText = traducciones[idioma].descripcion;
    document.querySelector("label[for='nombre']").innerText = traducciones[idioma].nombre;
    document.querySelector("label[for='email']").innerText = traducciones[idioma].email;
    document.querySelector("label[for='mensaje']").innerText = traducciones[idioma].mensaje;
    document.querySelector(".form-mensaje button").innerText = traducciones[idioma].enviar;
    document.querySelector(".contact-info h2").innerText = traducciones[idioma].infoContacto;
    document.querySelector(".contact-info p strong:nth-of-type(2)").innerText = traducciones[idioma].direccion;
}

// Ejecutar la traducción inicial según el idioma de la página
document.addEventListener("DOMContentLoaded", () => {
    traducirPagina(document.documentElement.lang);
});
