import showMenu from "./burguer.menu.js";
import showMoreText from "./show.more.js";
import renderList from "./render.lista.js";


const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu();
    showMoreText();

    async function render(){
        await renderList('./js/data/concejales.json');
        await renderList('./js/data/concejales.suplentes.json');
        await renderList('./js/data/tribunalesdecuentas.json');
        await renderList('./js/data/tribunalessuplentes.json');  
    }

    render();
    
});