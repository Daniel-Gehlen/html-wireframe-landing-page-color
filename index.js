document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav ul');

    menuIcon.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
});
