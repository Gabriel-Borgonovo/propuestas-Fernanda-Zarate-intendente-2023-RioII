import showMenu from "./burguer.menu.js";
import showMoreText from "./show.more.js";
import renderPropuestas from "./render.propuestas.js";


const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu();
    showMoreText();
    renderPropuestas('./js/propuestas/ambientales.json');
    renderPropuestas('./js/propuestas/cultura.json');
    renderPropuestas('./js/propuestas/deportes.json');
    renderPropuestas('./js/propuestas/economia.json');
    renderPropuestas('./js/propuestas/educacion.json');
    renderPropuestas('./js/propuestas/laboral.json');
    renderPropuestas('./js/propuestas/salud.json');
    renderPropuestas('./js/propuestas/seguridad.json');
    renderPropuestas('/js/propuestas/servicios.json');
    renderPropuestas('/js/propuestas/transparencia.json');
    renderPropuestas('/js/propuestas/urbanizacion.json');
    renderPropuestas('/js/propuestas/carta.json');
    renderPropuestas('/js/propuestas/juventud.json');
});