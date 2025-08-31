function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

initSmoothScrolling();


const form = document.getElementById('formulario')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const nombre = document.getElementById('Nombre').value
        const email = document.getElementById('Email').value
        const mensaje = document.getElementById('Mensaje').value
        alert('Nombre: ' + nombre + '\nEmail: ' + email + '\nMensaje: ' + mensaje)
    })

    // Hamburguesa
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active')
    });