document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contact-btn');
    const contactForm = document.getElementById('contact-form');
    const closeFormBtn = document.getElementById('closeFormBtn');

    contactBtn.addEventListener('click', function () {
        contactForm.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        contactForm.style.opacity = 1;
        contactForm.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    closeFormBtn.addEventListener('click', function () {
        contactForm.style.opacity = 0;
        contactForm.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(function () {
            contactForm.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }, 800);
    });
});



const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const cardsVisible = 3; 
const totalCards = document.querySelectorAll('.card').length;

const updateDots = () => {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

const goToSlide = (index) => {
    const cardWidth = slider.querySelector('.card').clientWidth;
    const gap = 20; 
    const offset = (cardWidth + gap) * index;
    slider.style.transform = `translateX(-${offset}px)`;
    currentIndex = index;
    updateDots();
};

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

let autoSlide = setInterval(() => {
    let nextIndex = (currentIndex + 1) % (totalCards - cardsVisible + 1);
    goToSlide(nextIndex);
}, 3000);

slider.addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

slider.addEventListener('mouseout', () => {
    autoSlide = setInterval(() => {
        let nextIndex = (currentIndex + 1) % (totalCards - cardsVisible + 1);
        goToSlide(nextIndex);
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.paragraph-container');
    const projectImage = document.getElementById('projectImage');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseenter', function() {
            const newImgSrc = this.getAttribute('data-img');
            projectImage.src = newImgSrc;
        });
    });
});
