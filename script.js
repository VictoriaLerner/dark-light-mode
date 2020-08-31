const toogleSwitch = document.querySelector('.switch-input');
const nav = document.querySelector('nav');
const toogleIcon = document.getElementById('tooge-icon');
const textBox = document.getElementById('text-box');



function toogleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)': 'rgb(250 250 250 / 50%)';
    textBox.style.backgroundColor =  isDark ? 'rgb(250 250 250 / 50%)' : 'rgb(0 0 0 / 50%)';
    toogleIcon.children[0].textContent = isDark ? 'Dark Mode': 'Light Mode' ;
    isDark ?  toogleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toogleIcon.children[0].textContent = 'Light Mode';
    isDark ?  toogleIcon.children[1].classList.add('fa-moon'):toogleIcon.children[1].classList.add('fa-sun');

}


toogleSwitch.addEventListener('change', (event) => {

    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toogleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toogleDarkLightMode(false);
    }


});

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toogleSwitch.checked = true;
        toogleDarkLightMode(true);
    }

}