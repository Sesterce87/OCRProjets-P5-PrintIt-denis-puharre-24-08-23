// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

const slides = document.querySelectorAll ('.banner-img');
const nbSlide = slides.length;
const right = document.querySelector ('.arrow_right');
const left = document.querySelector ('.arrow_left');
let count = 0;

function slideSuivante() {
	slides[count].classList.remove('active');

	if(count < nbSlide - 1){
		count++;
	}
	else {
		count = 0;
	}

	slides[count].classList.add('active');
	console.log(count);
}
right.addEventListener("click", slideSuivante);

function slidePrecedente() {
	slides[count].classList.remove('active');

	if(count > 0){
		count--;
	}
	else {
		count = nbSlide - 1;
	}

	slides[count].classList.add('active');
	console.log(count);
}
left.addEventListener("click", slidePrecedente);


left.addEventListener("click", (event) => {
if (event.button === 0) {
    console.log("Clic gauche détecté");
} 
else if (event.button === 2) {
    console.log("Clic droit détecté");
}
});

right.addEventListener("click", (event) => {
if (event.button === 0) {
    console.log("Clic gauche détecté");
} 
else if (event.button === 2) {
    console.log("Clic droit détecté");
}
});
