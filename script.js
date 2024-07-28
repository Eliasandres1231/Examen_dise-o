document.addEventListener('DOMContentLoaded', function() {
    const fadeElems = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElems.forEach(elem => {
            const rect = elem.getBoundingClientRect();
            const elemTop = rect.top;
            const elemBottom = rect.bottom;
            
            if (elemTop < window.innerHeight && elemBottom >= 0) {
                elem.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkFade);
    checkFade(); // Check on load

    const links = document.querySelectorAll('nav a');
    const loader = document.getElementById('loader-wrapper');

    // Asegurarse de que el loader esté oculto al cargar la página
    loader.classList.add('hidden');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            // Mostrar el loader solo al cambiar de página
            loader.classList.remove('hidden');

            // Esperar 2.5 segundos antes de redirigir
            setTimeout(() => {
                window.location.href = href;
            }, 1000);
        });
    });
});