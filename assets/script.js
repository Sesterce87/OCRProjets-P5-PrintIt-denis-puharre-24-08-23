const slides = document.querySelectorAll('.banner-img');
const nbSlide = slides.length;
const right = document.querySelector('.arrow_right');
const left = document.querySelector('.arrow_left');
const dots = document.querySelectorAll(".dot");
const nbDot = dots.length;
let sldIdx = 0;

function nextSlide() {
    slides[sldIdx].classList.remove('active');

    if (sldIdx < nbSlide - 1) {
        sldIdx++;
    } else {
        sldIdx = 0;
    }

    slides[sldIdx].classList.add('active');
    updateDot();
	
	console.log(sldIdx);
}

function previousSlide() {
    slides[sldIdx].classList.remove('active');

    if (sldIdx > 0) {
        sldIdx--;
    } else {
        sldIdx = nbSlide - 1;
    }

    slides[sldIdx].classList.add('active');
    updateDot();

    console.log(sldIdx);
}

function updateDot() {
    dots.forEach((dotElement, index) => {
        if (index === sldIdx) {
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