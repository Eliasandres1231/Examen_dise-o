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

    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.mySlides');
    const totalSlides = slides.length;
    
    // Clonar todos los slides y añadirlos al final
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slidesWrapper.appendChild(clone);
    });

    // Ajustar el ancho del wrapper para acomodar todos los slides
    slidesWrapper.style.width = `${(totalSlides * 2) * 100 / 3}%`;

    let currentIndex = 0;

    function slideImages() {
        currentIndex++;
        slidesWrapper.style.transition = 'transform 0.5s ease';
        slidesWrapper.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;

        if (currentIndex === totalSlides) {
            setTimeout(() => {
                slidesWrapper.style.transition = 'none';
                slidesWrapper.style.transform = 'translateX(0)';
                currentIndex = 0;
            }, 500);
        }
    }

    setInterval(slideImages, 2000); // Cambia cada 2 segundos
});
