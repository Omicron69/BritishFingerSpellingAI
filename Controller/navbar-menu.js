const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');
const navbar = document.querySelector('.navbar');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

if (navbar && window.matchMedia('(max-width: 768px)').matches) {
    let lastScrollY = window.scrollY;

    const closeMenu = () => {
        if (!menuToggle || !nav) {
            return;
        }

        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        const pastHeader = currentScrollY > 24;

        navbar.classList.toggle('is-hidden', scrollingDown && pastHeader);

        if (currentScrollY !== lastScrollY) {
            closeMenu();
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}
