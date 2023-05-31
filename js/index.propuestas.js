import showMenu from "./burguer.menu.js";
import showMoreText from "./show.more.js";
import renderPropuestas from "./render.propuestas.js";


const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu();
    showMoreText();

    async function render() {
    await renderPropuestas('./js/propuestas/ambientales.json');
    await renderPropuestas('./js/propuestas/cultura.json');
    await renderPropuestas('./js/propuestas/deportes.json');
    await renderPropuestas('./js/propuestas/economia.json');
    await renderPropuestas('./js/propuestas/educacion.json');
    await renderPropuestas('./js/propuestas/laboral.json');
    await renderPropuestas('./js/propuestas/salud.json');
    await renderPropuestas('./js/propuestas/seguridad.json');
    await renderPropuestas('/js/propuestas/servicios.json');
    await renderPropuestas('/js/propuestas/transparencia.json');
    await renderPropuestas('/js/propuestas/urbanizacion.json');
    await renderPropuestas('/js/propuestas/carta.json');
    await renderPropuestas('/js/propuestas/juventud.json');
    }

    render();
});