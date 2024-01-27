document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var sections = document.querySelectorAll('.content section');

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    };

    document.querySelectorAll('.nav-item').forEach(function (item, index) {
        item.addEventListener('click', function () {
            var targetSection = sections[index];
            var targetOffset = targetSection.offsetTop;
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        });
    });
});
