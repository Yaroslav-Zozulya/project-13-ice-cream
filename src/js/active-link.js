const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
         {
            document.querySelectorAll('.header__menu-link').forEach((link) => {
                link.classList.toggle(
                    'current',
                    getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.5,
});


document.querySelectorAll('section').forEach(
    (section) => observer.observe(section),
);


document.querySelector('.header__menu-links').addEventListener('click', (Event) => {
    if (Event.target.classList.contains('header__menu-link')) {
        Event.preventDefault();

        window.scrollTo({
            top: document.getElementById(getId(Event.target)).offsetTop,
            behavior: 'smooth',
        });
    }
});



