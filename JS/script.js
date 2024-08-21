document.addEventListener('DOMContentLoaded', function() {
    const esBtn = document.getElementById('es-btn');
    const enBtn = document.getElementById('en-btn');
    const espanolContent = document.querySelector('.espanol');
    const inglesContent = document.querySelector('.ingles');
    const navEs = document.getElementById('nav-es');
    const navEn = document.getElementById('nav-en');

    // Muestra el contenido y la navegación en español por defecto
    espanolContent.style.display = 'block';
    inglesContent.style.display = 'none';
    navEs.style.display = 'block';
    navEn.style.display = 'none';

    esBtn.addEventListener('click', function() {
        espanolContent.style.display = 'block';
        inglesContent.style.display = 'none';
        navEs.style.display = 'block';
        navEn.style.display = 'none';
        // Desplazar a la parte superior de la página
        window.scrollTo(0, 0);
    });

    enBtn.addEventListener('click', function() {
        espanolContent.style.display = 'none';
        inglesContent.style.display = 'block';
        navEs.style.display = 'none';
        navEn.style.display = 'block';
        // Recargar la página y desplazar a la parte superior
        window.location.href = window.location.pathname + "#";
        window.scrollTo(0, 0); // Asegura que se desplaza al inicio
    });
});