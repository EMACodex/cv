function mostrarSeccion(seccion) {
    document.querySelectorAll('.seccion').forEach(el => el.style.display = 'none');
    document.getElementById(seccion).style.display = 'block';
}

function ampliarPerfil() {
    let overlay = document.getElementById("overlay");
    let imagenAmpliada = document.getElementById("perfil-ampliado");

    imagenAmpliada.src = document.querySelector(".perfil").src; // Asigna la imagen de perfil
    overlay.classList.add("activo"); // Activa el efecto de ampliación
}

function cerrarPerfil() {
    document.getElementById("overlay").classList.remove("activo"); // Oculta la imagen ampliada
}


let idiomaActual = "es";

function cambiarIdioma() {
    let icono = document.getElementById("iconoIdioma");

    if (idiomaActual === "es") {
        idiomaActual = "en"; 
        icono.src = "spain.png"; 
        traducirPagina("en");
    } else {
        idiomaActual = "es";
        icono.src = "gb.png"; 
        traducirPagina("es");
    }
}

function traducirPagina(idioma) {
    let traducciones = {
        "es": {
            "titulo": "Erik Mateo",
            "subtitulo": "Desarrollador Web FullStack",
            "sobreMi": "Sobre mí",
            "experiencia": "Experiencia",
            "formacion": "Formación Académica",
            "conocimientos": "Tech Stack",
            "proyectos": "Proyectos",
            "contacto": "Contacto",
            "download": "Descargar Cv"
        },
        "en": {
            "titulo": "Erik Mateo",
            "subtitulo": "FullStack Web Developer",
            "sobreMi": "About Me",
            "experiencia": "Work Experience",
            "formacion": "Academic Background",
            "conocimientos": "Tech Stack",
            "proyectos": "Projects",
            "contacto": "Contact",
            "download": "Download Cv"
        }
    };
    document.getElementById("download").innerText = traducciones[idioma].download;


    // Cambiar textos
    document.querySelector("h1").innerText = traducciones[idioma].titulo;
    document.querySelector(".subtitulo").innerText = traducciones[idioma].subtitulo;
    
    let items = document.querySelectorAll(".menu .item p");
    items[0].innerText = traducciones[idioma].sobreMi;
    items[1].innerText = traducciones[idioma].experiencia;
    items[2].innerText = traducciones[idioma].formacion;
    items[3].innerText = traducciones[idioma].conocimientos;
    items[4].innerText = traducciones[idioma].proyectos;
    items[5].innerText = traducciones[idioma].contacto;
}
