// Build Silder
const slider = function() {;


    const slides = document.querySelectorAll('.slide');
    constbtnLeft = document.querySelector('.slider__btn--left');
    constbtnLeft = document.querySelector('.slider__btn--right');

    let curSlide = 0;
    const maxSlide = slides.length;

    // const slider = document.querySelectorAll('.slider');
    // slider.style.transform = 'scale(0.4) translateX(-800px)';
    // slider.style.overflow = 'visible';
    const createDots = function() {
        slides.forEach(function(_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" dataslide="${i}"></button>`
            )
        })
    };

    const activateDot = function(slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');

    };

    slides.forEach((s, i) => (s.style.transform = `translateX(${100 *i} %)`));
    //0%, 100%, 200%, 300%
    const goToSlide = function(slide) {
        slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i -curSlide)}%)`));
    };
    goToSlide(0);

    //Next slide
    const nextSlide = function() {
        if (curSlide === maxSlider) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };
    const prevSlide = function() {
        if (curSlide === 0) {
            curSlide = maxSlider - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
        activateDot(0);
        createDots();



    };
    btnRight.addEvnetListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function(e) {
        console.log(e);
        if (e.key === 'Arrowleft') prevSlide();
        e.key === 'ArrowRight' && nextSlider();
    });


    dotContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
        }
    })
}
slider();