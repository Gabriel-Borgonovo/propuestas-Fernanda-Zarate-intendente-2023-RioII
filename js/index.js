import showMenu from "./burguer.menu.js";
import showMoreText from "./show.more.js";
import renderList from "./render.lista.js";
const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu();
    showMoreText();
    renderList('./js/data/concejales.json');
    renderList('./js/data/concejales.suplentes.json');
    renderList('./js/data/tribunalesdecuentas.json');
    renderList('./js/data/tribunalessuplentes.json');
})