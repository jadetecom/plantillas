document.addEventListener("DOMContentLoaded", function() {
    const templates = [
		"Company-1.0.0",
        "Elegant",
        "Folio",
        "Hielo-1.0.0",
        "johndoe",
        "KnightOne-1.0.0",
        "lifestyle-1.0.0",
        "ogistic",
        "RoadTrip-1.0.0",
        "Romyk-1.0.0",
        "Selecao-1.0.0",
        "solar-energy-website-template",
        "startbootstrap-landing-page-gh-pages"
    ];

    const container = document.getElementById("templateList");

    templates.forEach(template => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${template}</h3>
            <a href="${template}/index.html" target="_blank">Ver Plantilla</a>
        `;

        container.appendChild(div);
    });
});
