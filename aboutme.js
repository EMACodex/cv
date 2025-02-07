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
        "titulo": "Sobre Mí",
        "descripcion": "¡Hola! Soy Erik Mateo, un apasionado Desarrollador Web con una sólida formación en el desarrollo de aplicaciones web y una gran vocación por crear experiencias dinámicas en línea. Con experiencia tanto en soporte técnico como en marketing digital, he perfeccionado mis habilidades para construir sitios web atractivos, entendiendo las necesidades de los clientes y las tendencias del mercado. Trabajo con sistemas CMS como Shopify, herramientas de diseño como Figma y Canva, y lenguajes de programación como HTML5, CSS3, JavaScript y Python. Mi nivel profesional de inglés me permite colaborar en proyectos internacionales con facilidad.",
        "formacion": "Formación Académica",
        "grado": "Técnico superior en Desarrollo de Aplicaciones Web",
        "instituto": "I.E.S Hermanos Machado",
        "idiomas": "Lenguajes",
        "certificaciones": "Certificaciones"
    },
    "en": {
        "titulo": "About Me",
        "descripcion": "Hi! I'm Erik Mateo, a passionate Web Developer with a solid background in web application development and a passion for creating dynamic online experiences. With experience in both technical support and digital marketing, I've honed my skills in building engaging websites by understanding client needs and market trends. I work with CMS systems like Shopify, design tools like Figma and Canva, and programming languages ​​like HTML5, CSS3, JavaScript, and Python. My professional level of English allows me to collaborate on international projects with ease.",
        "formacion": "Academic Background",
        "grado": "Higher Technician in Web Application Development",
        "instituto": "I.E.S Hermanos Machado",
        "idiomas": "Languages",
        "certificaciones": "Certifications"
    }
};

// 📌 Función para traducir el contenido de la página
function traducirPagina(idioma) {
    document.querySelector("h1").innerText = traducciones[idioma].titulo;
    document.querySelector(".container p").innerText = traducciones[idioma].descripcion;
    document.querySelector(".blur-container2 h2").innerText = traducciones[idioma].formacion;
    document.querySelector(".blur-container2 p strong").innerText = traducciones[idioma].grado;
    document.querySelector(".blur-container2 p:nth-of-type(2)").innerText = traducciones[idioma].instituto;
    document.querySelector(".blur-container2 h3:nth-of-type(1)").innerText = traducciones[idioma].idiomas;
    document.querySelector(".blur-container2 h3:nth-of-type(2)").innerText = traducciones[idioma].certificaciones;
}