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
    "startbootstrap-landing-page-gh-pages",
    "templatemo_558_klassy_cafe",
    "templatemo_560_astro_motion",
    "templatemo_562_space_dynamic",
    "templatemo_563_seo_dream",
    "020 softy-pinko-master",
    "029 tournest-master",
    "039 Nova-master",
    "045 glint-master",
    "046 Flusk-master",
    "047 notes-html-template-master",
    "048 Justice-gh-pages",
    "050 coffee-master",
    "059 material-kit-2-3.0.0",
    "060 chain-1.0.0",
    "061 patrix-1.0.0",
    "065 simple",
    "068 medic-care",
    "069 patrix-1.0.0",
    "073 digitalex-master",
    "080 karmo-master",
    "088 rezume-master",
    "089 hightech-master",
    "100 feane"
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
