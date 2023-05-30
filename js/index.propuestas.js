import showMenu from "./burguer.menu.js";
import showMoreText from "./show.more.js";
import renderPropuestas from "./render.propuestas.js";


const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu();
    showMoreText();
    renderPropuestas('./js/propuestas/seguridad.json');
});