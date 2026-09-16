const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    alert("¡Gracias por contactar con Airvia! Te responderemos lo antes posible.");

    formulario.reset();
});