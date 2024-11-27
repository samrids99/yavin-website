// Add custom JavaScript here
function userScroll() {
    const navbar = document.querySelector('.navbar');
    const toTop = document.querySelector('#to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-light');
            navbar.classList.add('navbar-sticky');
            toTop.classList.add('show');
        } else {
            navbar.classList.remove('bg-light');
            navbar.classList.remove('navbar-sticky');
            toTop.classList.remove('show');
        }
    })
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function incrementStats() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 200;

            if(c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
document.querySelector('#to-top').addEventListener('click', scrollToTop);