window.addEventListener('DOMContentLoaded', initQuotesSlider);


function initQuotesSlider() {
    const quotesWrapper = document.querySelector('.quotes-wrapper');
    const quotes = [...document.querySelectorAll('.quotes')];
    const steppers = getSteppers();

    enableHorizontalScroll(quotesWrapper);
    observeQuotes(quotesWrapper, quotes, steppers);
}


function getSteppers() {
    return [
        document.querySelector('.stepper-1'),
        document.querySelector('.stepper-2'),
        document.querySelector('.stepper-3')
    ];
}


function enableHorizontalScroll(wrapper) {
    wrapper.addEventListener(
        'wheel',
        (event) => handleWheelScroll(event, wrapper),
        { passive: false }
    );
}


function handleWheelScroll(event, wrapper) {
    event.preventDefault();

    wrapper.scrollBy({
        left: event.deltaY * 0.4,
        behavior: 'smooth'
    });
}


function observeQuotes(wrapper, quotes, steppers) {
    const observer = createObserver(wrapper, quotes, steppers);

    quotes.forEach((quote) => {
        observer.observe(quote);
    });
}


function createObserver(wrapper, quotes, steppers) {
    return new IntersectionObserver(
        (entries) => handleIntersections(entries, quotes, steppers),
        {
            root: wrapper,
            threshold: 0.6
        }
    );
}


function handleIntersections(entries, quotes, steppers) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        updateActiveStepper(entry.target, quotes, steppers);
    });
}


function updateActiveStepper(target, quotes, steppers) {
    steppers.forEach((stepper) => {
        stepper.classList.remove('active');
    });

    const index = quotes.indexOf(target);

    steppers[index]?.classList.add('active');
}


function quoteChoice(choice) {
    const map = {
        one: 0,
        two: 1,
        three: 2
    };

    const quotes = document.querySelectorAll('.quotes');

    quotes[map[choice]].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });
}