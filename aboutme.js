let idiomaActual = "es"; // Inicia en español

function cambiarIdioma() {
    let icono = document.getElementById("iconoIdioma");

    // Cambiar entre español e inglés
    if (idiomaActual === "es") {
        idiomaActual = "en"; // Cambia a inglés
        icono.src = "spain.png"; // Cambia la bandera (esto parece al revés, pero se puede ajustar)
        traducirPagina("en");
    } else {
        idiomaActual = "es"; // Cambia a español
        icono.src = "gb.png"; // Cambia la bandera
        traducirPagina("es");
    }
}

// Traducciones de la página
let traducciones = {
    "es": {
        "titulo": "Sobre Mí",
        "formacion": "Formación Académica",
        "grado": "Técnico superior en Desarrollo de Aplicaciones Web",
        "instituto": "I.E.S Hermanos Machado",
        "idiomas": "Lenguajes",
        "nivelIngles": "B2 Cambridge Ingles",
        "certificacionesTitulo": "Certificaciones",
        "certificaciones": "Django, PostgreSQL, Docker, AWS, Scrum Master"
    },
    "en": {
        "titulo": "About Me",
        "formacion": "Academic Background",
        "grado": "Higher Technician in Web Application Development",
        "instituto": "I.E.S Hermanos Machado",
        "idiomas": "Languages",
        "nivelIngles": "B2 Cambridge English",
        "certificacionesTitulo": "Certifications",
        "certificaciones": "Django, PostgreSQL, Docker, AWS, Scrum Master"
    }
};

// Función para traducir el contenido de la página
function traducirPagina(idioma) {
    document.getElementById("titulo").innerText = traducciones[idioma].titulo;
    document.getElementById("formacion").innerText = traducciones[idioma].formacion;
    document.getElementById("grado").innerText = traducciones[idioma].grado;
    document.getElementById("instituto").innerText = traducciones[idioma].instituto;
    document.getElementById("idiomas").innerText = traducciones[idioma].idiomas;
    document.getElementById("nivelIngles").innerText = traducciones[idioma].nivelIngles;
    document.getElementById("certificacionesTitulo").innerText = traducciones[idioma].certificacionesTitulo;
    document.getElementById("certificaciones").innerText = traducciones[idioma].certificaciones;
}
