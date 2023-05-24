const d = document;
const button = d.getElementById('burguer');
const headerNav = d.querySelector('.header_nav');

export default function showMenu() {
    button.addEventListener('click', () => {
        headerNav.classList.toggle('activado');
    });
}