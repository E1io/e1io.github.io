const images = [
    "img/quote1.webp", "img/quote2.webp", "img/quote3.webp",
    "img/quote4.webp", "img/quote5.webp", "img/quote6.webp",
    "img/quote7.webp", "img/quote8.webp", "img/quote9.webp",
    "img/quote10.webp", "img/quote11.webp", "img/quote12.webp",
    "img/quote13.webp","img/quote14.webp"
];
//https://www.codecademy.com/resources/blog/inspirational-coding-quotes/

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

const imgElement = document.getElementById("quoteImage");
imgElement.src = randomImage;