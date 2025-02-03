const images = [
    "assets/quote1.webp", "assets/quote2.webp", "assets/quote3.webp",
    "assets/quote4.webp", "assets/quote5.webp", "assets/quote6.webp",
    "assets/quote7.webp", "assets/quote8.webp", "assets/quote9.webp",
    "assets/quote10.webp", "assets/quote11.webp", "assets/quote12.webp",
    "assets/quote13.webp","assets/quote14.webp"
];
//https://www.codecademy.com/resources/blog/inspirational-coding-quotes/

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

const imgElement = document.getElementById("quoteImage");
imgElement.src = randomImage;