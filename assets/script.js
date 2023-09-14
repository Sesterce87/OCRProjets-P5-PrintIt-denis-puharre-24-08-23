const slides = document.querySelectorAll('.banner-img');
const nbSlide = slides.length;
const right = document.querySelector('.arrow_right');
const left = document.querySelector('.arrow_left');
const dot = document.querySelectorAll(".dot");
const nbDot = dot.length;
let count = 0;

function nextSlide() {
    slides[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    slides[count].classList.add('active');
    updateDot();
	
	console.log(count);
}

function previousSlide() {
    slides[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    slides[count].classList.add('active');
    updateDot();

    console.log(count);
}

function updateDot() {
    dot.forEach((dotElement, index) => {
        if (index === count) {
            dotElement.classList.add('dot_selected');
        } else {
            dotElement.classList.remove('dot_selected');
        }
    });
}

right.addEventListener("click", () => {
    nextSlide();
});

left.addEventListener("click", () => {
    previousSlide();
});

left.addEventListener("click", (event) => {
    if (event.button === 0) {
        console.log("Clic gauche détecté");
    } else if (event.button === 2) {
        console.log("Clic droit détecté");
    }
});

right.addEventListener("click", (event) => {
    if (event.button === 0) {
        console.log("Clic gauche détecté");
    } else if (event.button === 2) {
        console.log("Clic droit détecté");
    }
});