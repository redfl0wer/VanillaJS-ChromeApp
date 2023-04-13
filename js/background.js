//image source : unsplash.com

const images = ["marek-piwnicki-9TKW2zO5uTo-unsplash.jpg", "wolfgang-hasselmann-Hmrx_cZWC3s-unsplash.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);