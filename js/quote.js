const images = [
    "assets/webp/quote1.webp", "assets/webp/quote2.webp", "assets/webp/quote3.webp",
    "assets/webp/quote4.webp", "assets/webp/quote5.webp", "assets/webp/quote6.webp",
    "assets/webp/quote7.webp", "assets/webp/quote8.webp", "assets/webp/quote9.webp",
    "assets/webp/quote10.webp", "assets/webp/quote11.webp", "assets/webp/quote12.webp",
    "assets/webp/quote13.webp","assets/webp/quote14.webp"
];
//https://www.codecademy.com/resources/blog/inspirational-coding-quotes/

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

const imgElement = document.getElementById("quoteImage");
imgElement.src = randomImage;