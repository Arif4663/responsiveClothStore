// Script for navigation bar
document.querySelector('#bar').addEventListener("click", function () {
    document.querySelector('nav ul').classList.add('navbar');
})
document.querySelector('#close').addEventListener("click", function () {
    document.querySelector('nav ul').classList.remove('navbar');
})