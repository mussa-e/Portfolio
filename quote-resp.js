window.addEventListener('DOMContentLoaded', () => {

    const quotesWrapper = document.querySelector('.quotes-wrapper');

    const quotes = document.querySelectorAll('.quotes');

    const steppers = [
        document.querySelector('.stepper-1'),
        document.querySelector('.stepper-2'),
        document.querySelector('.stepper-3')
    ];

    quotesWrapper.addEventListener(
        'wheel',
        (e) => {
            e.preventDefault();

            quotesWrapper.scrollBy({
                left: e.deltaY * 0.4,
                behavior: "smooth"
            });

        },
        { passive: false }
    );


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

             steppers.forEach(stepper => {
                stepper.classList.remove('active');
            });

            const index = [...quotes].indexOf(entry.target);

            steppers[index].classList.add('active');
        }

    });

    }, {
        root: quotesWrapper,
        threshold: 0.6
    });

    quotes.forEach((quote) => {
        observer.observe(quote);
    });

});