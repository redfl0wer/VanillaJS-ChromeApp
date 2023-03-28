//image source : unsplash.com

const images = ["img/andrea-davis-zGP_2B5G5Ok-unsplash.jpg", "img/boxed-water-is-better-tbhNNRIWxig-unsplash.jpg", "img/jonas-denil-4SuuEYOWYBg-unsplash.jpg", "img/marek-piwnicki-9TKW2zO5uTo-unsplash.jpg", "img/masahiro-miyagi-O1NYX40Du2g-unsplash.jpg", "img/mos-design-169lPCb09AA-unsplash.jpg", "img/mos-design-oF8nBV_sfJI-unsplash.jpg", "img/remy_loz-w9_mcsegoKY-unsplash.jpg", "img/wolfgang-hasselmann-Hmrx_cZWC3s-unsplash.jpg", "img/xavier-photography-wEL2u7wQhnY-unsplash.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);