const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
$(document).ready(function () {
    $('.gallery').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
    });

    $('.button-group').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        $('.gallery').isotope({ filter: filterValue });
    });
});
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top,
    }, 800);
});
