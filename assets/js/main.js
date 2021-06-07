/*
    We have two types of storages
    1. LocalStorage
    2. SessionStorage
*/

const modeSwitcher = document.querySelector('.mode-switcher');

modeSwitcher.onclick = function () {
    if (localStorage.getItem('color-mode') === 'dark') {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('color-mode', 'light');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('color-mode', 'dark');
    }

    if (localStorage.getItem("color-mode") === "dark") {
        modeSwitcher.innerText = "Turn on light mode";
        modeSwitcher.classList.remove('btn-dark');
        modeSwitcher.classList.add('btn-light')
    } else {
        modeSwitcher.innerText = "Turn on dark mode";
        modeSwitcher.classList.add('btn-dark');
        modeSwitcher.classList.remove('btn-light')
    }
    localStorage.removeItem('color-mode');
}