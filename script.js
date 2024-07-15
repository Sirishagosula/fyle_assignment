$(document).ready(function() {
    const contactBtn = $('#contact-btn');
    const contactForm = $('#contact-form');
    const closeFormBtn = $('#closeFormBtn');
    
    contactBtn.on('click', function() {
        contactForm.removeClass('hidden');
        $('body').addClass('no-scroll');
        contactForm.css({
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)'
        });
    });
    
    closeFormBtn.on('click', function() {
        contactForm.css({
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0.8)'
        });
        setTimeout(function() {
            contactForm.addClass('hidden');
            $('body').removeClass('no-scroll');
        }, 800);
    });
    
    const slider = $('.slider');
    const dots = $('.dot');
    let currentIndex = 0;
    const cardsVisible = 3;
    const totalCards = $('.card').length;
    
    const updateDots = () => {
        dots.each(function(index) {
            $(this).toggleClass('active', index === currentIndex);
        });
    };
    
    const goToSlide = (index) => {
        const cardWidth = slider.find('.card').eq(0).width();
        const gap = 20;
        const offset = (cardWidth + gap) * index;
        slider.css('transform', `translateX(-${offset}px)`);
        currentIndex = index;
        updateDots();
    };
    
    dots.on('click', function() {
        const index = $(this).index();
        goToSlide(index);
    });
    
    let autoSlide = setInterval(function() {
        let nextIndex = (currentIndex + 1) % (totalCards - cardsVisible + 1);
        goToSlide(nextIndex);
    }, 3000);
    
    slider.on('mouseover', function() {
        clearInterval(autoSlide);
    });
    
    slider.on('mouseout', function() {
        autoSlide = setInterval(function() {
            let nextIndex = (currentIndex + 1) % (totalCards - cardsVisible + 1);
            goToSlide(nextIndex);
        }, 3000);
    });

    const paragraphs = $('.paragraph-container');
    const projectImage = $('#projectImage');
    
    paragraphs.on('mouseenter', function() {
        const newImgSrc = $(this).data('img');
        projectImage.attr('src', newImgSrc);
    });
});
