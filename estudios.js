// 📌 Idioma actual (por defecto en español)
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

// 📌 Traducciones de la página
const traducciones = {
    "es": {
        "titulo": "Formación Académica",
        "estudios": [
            "2024 - 2025 I.E.S Hermanos Machado",
            "Grado Superior en Desarrollo de Aplicaciones Web",
            "2023 - 2024 CEI Escuela de Diseño y Marketing",
            "Grado Superior en Desarrollo de Aplicaciones Web",
            "2022 - 2023 Consultoria.io",
            "Curso Superior de Marketing y Ventas"
        ]
    },
    "en": {
        "titulo": "Academic Background",
        "estudios": [
            "2024 - 2025 I.E.S Hermanos Machado",
            "Higher Technician in Web Application Development",
            "2023 - 2024 CEI School of Design and Marketing",
            "Higher Technician in Web Application Development",
            "2022 - 2023 Consultoria.io",
            "Advanced Course in Marketing and Sales"
        ]
    }
};

// 📌 Función para traducir el contenido de la página
function traducirPagina(idioma) {
    document.querySelector(".blur-container4 h1").innerText = traducciones[idioma].titulo;
    let estudiosParrafos = document.querySelectorAll(".blur-container4 p");

    traducciones[idioma].estudios.forEach((texto, index) => {
        estudiosParrafos[index].innerText = texto;
    });
}

// 🔹 Cargar idioma guardado en localStorage (si existe)
document.addEventListener("DOMContentLoaded", () => {
    let idiomaGuardado = localStorage.getItem("idioma");
    if (idiomaGuardado) {
        idiomaActual = idiomaGuardado;
        cambiarIdioma();
    }
});
