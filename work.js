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
        "experiencia": "Experiencia",
        "icon_experiences": "Icon Experiences",
        "icon_experiences_desc": [
            "· Colaboración en el diseño y desarrollo de la web Icon Experiences, implementando elementos visuales y diseño de interfaces en colaboración con diseñadores gráficos.",
            "· Participación en la creación de una interfaz de usuario atractiva y funcional para eventos y experiencias de clientes.",
            "· Uso de Figma para prototipado de interfaces y HTML/CSS para la implementación del diseño final.",
            "· Habilidades: Figma, Canva, HTML5, JavaScript, CSS"
        ],
        "kikifresa": "Kikifresa",
        "kikifresa_desc": [
            "· Creación de la página web personal kikifresa.com, un sitio dinámico con funcionalidades de blog y tienda online utilizando HTML5, CSS3, JavaScript y Liquid.",
            "· Implementación de un diseño responsivo con un enfoque en la experiencia de usuario (UX) optimizada para dispositivos móviles.",
            "· Configuración de bases de datos MySQL para gestionar productos, usuarios y contenido del blog.",
            "· Implementación de un sistema básico de administración de contenido (CMS) para gestionar el inventario y las publicaciones del blog."
        ]
    },
    "en": {
        "experiencia": "Experience",
        "icon_experiences": "Icon Experiences",
        "icon_experiences_desc": [
            "· Collaboration in the design and development of the Icon Experiences website, implementing visual elements and interface design in collaboration with graphic designers.",
            "· Participation in the creation of an attractive and functional user interface for events and customer experiences.",
            "· Use of Figma for interface prototyping and HTML/CSS for final design implementation.",
            "· Skills: Figma, Canva, HTML5, JavaScript, CSS"
        ],
        "kikifresa": "Kikifresa",
        "kikifresa_desc": [
            "· Creation of the personal website kikifresa.com, a dynamic site with blog and online store functionalities using HTML5, CSS3, JavaScript, and Liquid.",
            "· Implementation of a responsive design with a focus on user experience (UX) optimized for mobile devices.",
            "· Configuration of MySQL databases to manage products, users, and blog content.",
            "· Implementation of a basic content management system (CMS) to manage inventory and blog posts."
        ]
    }
};

// 📌 Función para traducir el contenido de la página
function traducirPagina(idioma) {
    document.querySelector("h1").innerText = traducciones[idioma].experiencia;
    
    let headers = document.querySelectorAll(".container2 h1");
    let paragraphs = document.querySelectorAll(".container2 ul p");

    // Cambiar los títulos de las secciones
    headers[0].innerText = traducciones[idioma].icon_experiences;
    headers[1].innerText = traducciones[idioma].kikifresa;

    // Traducir los párrafos de "Icon Experiences"
    traducciones[idioma].icon_experiences_desc.forEach((texto, index) => {
        paragraphs[index].innerText = texto;
    });

    // Traducir los párrafos de "Kikifresa"
    traducciones[idioma].kikifresa_desc.forEach((texto, index) => {
        paragraphs[index + 4].innerText = texto; // Comienza en el 5º párrafo (después de Icon Experiences)
    });
}

// 🔹 Cargar idioma guardado en localStorage (si existe)
document.addEventListener("DOMContentLoaded", () => {
    let idiomaGuardado = localStorage.getItem("idioma");
    if (idiomaGuardado) {
        idiomaActual = idiomaGuardado;
        traducirPagina(idiomaActual);
    }
});