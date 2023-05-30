import showMenu from "./burguer.menu.js";
import showMoreText from "./show.more.js";
import renderList from "./render.lista.js";
const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu();
    showMoreText();
    renderList('../data/concejales.json');
    renderList('../data/concejales.suplentes.json');
    renderList('../data/tribunalesdecuentas.json');
    renderList('../data/tribunalessuplentes.json');
})