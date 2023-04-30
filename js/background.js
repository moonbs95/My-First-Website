const images = ['02.jpg', '03.jpg'];

const chosenImage = images[Math.round(Math.random() * (images.length - 1))];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);