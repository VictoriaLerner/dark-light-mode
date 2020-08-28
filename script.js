const toogleSwitch = document.querySelector('.switch-input');
const nav = document.querySelector('nav');
const toogleIcon = document.getElementById('tooge-icon');
const textBox = document.getElementById('text-box');

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(250 250 250 / 50%)';
    toogleIcon.children[0].textContent = 'Dark Mode';
    toogleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

}

function lightMode() {
    nav.style.backgroundColor = 'rgb(250 250 250 / 50%)';
    toogleIcon.children[1].classList.add('fa-sun');
    toogleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toogleIcon.children[0].textContent = 'Light Mode';
}

toogleSwitch.addEventListener('change', (event) => {

    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');

        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }


});

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toogleSwitch.checked = true;
        darkMode();
    }

}