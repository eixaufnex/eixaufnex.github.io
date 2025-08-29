// Menu icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

// Scroll seccion activa
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


// navbar
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // remove menu icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}




// Modo oscuro
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
}


// Scroll reveal
ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1000,
    delay: 100
});

// ScrollReveal().reveal('.contenido-inicio, .titulo', { origin: 'top' });
// ScrollReveal().reveal('.box-sobre-mi, .contenido-proyectos, .contacto form', { origin: 'bottom' });
// ScrollReveal().reveal('.sobre-mi img, .contenido-inicio h1', { origin: 'left' });
// ScrollReveal().reveal('.contenido-inicio h3, .contenido-inicio p', { origin: 'right' });

