
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add('active');

        }

    });

});

const heroTitle = document.querySelector('.hero h1');

document.addEventListener('mousemove', (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    heroTitle.style.transform = `translate(${x}px, ${y}px)`;

});

const menuToggle = document.getElementById('menu-toggle');

const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {

    menuToggle.classList.toggle('active');

    menu.classList.toggle('active');

});
