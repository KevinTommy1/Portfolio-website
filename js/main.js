const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function animateHeader() {
    let iterations = 0;

    const interval = setInterval(() => {
        document.querySelector('h1').innerText = document.querySelector('h1').dataset.value
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return letter;
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

        if (iterations > 50) clearInterval(interval);

        iterations += 1 / 3;
    }, 30);
}

function animateHeader2() {
    let iterations = 0;

    const interval = setInterval(() => {
        document.querySelector('h3').innerText = document.querySelector('h3').dataset.value
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return letter;
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

        if (iterations > 50) clearInterval(interval);

        iterations += 1/1.5;
    }, 30);
}

window.addEventListener('load', animateHeader);
window.addEventListener('load', animateHeader2);
