document.addEventListener("DOMContentLoaded", function () {

    var button = document.querySelector(".navbar__menu-toggle");
    var menu = document.querySelector(".navbar__list");

    button.addEventListener("click", function () {
        menu.classList.toggle("visible");
    })

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('sw.js').then(function (registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});