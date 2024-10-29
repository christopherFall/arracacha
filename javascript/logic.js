function redirigir() {
    const seleccion = document.getElementById('buscador').value;
    if (seleccion) {
        window.location.href = seleccion;
    } else {
        alert('Por favor, seleccione una opción.');
    }
}