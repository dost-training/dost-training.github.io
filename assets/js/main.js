var dropdowns = document.querySelectorAll('.has-dropdown');
dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdowns.forEach(function (other_dropdown) {
            if (dropdown != other_dropdown) {
                other_dropdown.classList.remove('is-active');
            }
        });
        dropdown.classList.toggle('is-active');
    });
});

var burger = document.querySelector('.navbar-burger');
burger.addEventListener('click', function (event) {
    event.stopPropagation();
    burger.classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
});