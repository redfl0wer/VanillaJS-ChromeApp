//image source : unsplash.com

const images = ["jonas-denil-4SuuEYOWYBg-unsplash.jpg", "marek-piwnicki-9TKW2zO5uTo-unsplash.jpg", "masahiro-miyagi-O1NYX40Du2g-unsplash.jpg", "mos-design-169lPCb09AA-unsplash.jpg", "mos-design-oF8nBV_sfJI-unsplash.jpg", "wolfgang-hasselmann-Hmrx_cZWC3s-unsplash.jpg", "xavier-photography-wEL2u7wQhnY-unsplash.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);