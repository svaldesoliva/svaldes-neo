document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-list");

    // Lista de entradas (simulada o cargada dinámicamente desde un archivo JSON)
    const entradas = [
        { file: "entradas/2024-11-23.html", date: "2024-11-23", title: "first post!" },


    ];

    // Función para formatear la fecha
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    // Ordenamos las entradas por fecha (más reciente primero)
    entradas.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Renderizamos las entradas en la lista
    entradas.forEach(entry => {
        const listItem = document.createElement("li");

        // Crear el enlace
        const link = document.createElement("a");
        link.href = entry.file;
        link.textContent = entry.title;

        // Crear la fecha
        const dateSpan = document.createElement("span");
        dateSpan.textContent = ` (${formatDate(entry.date)})`;
        dateSpan.classList.add("date");

        // Añadir el enlace y la fecha al elemento de la lista
        listItem.appendChild(link);
        listItem.appendChild(dateSpan);

        blogList.appendChild(listItem);
    });
});
