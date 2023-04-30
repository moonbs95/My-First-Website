const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];

const chosenImage = images[Math.round(Math.random() * (images.length - 1))];

const style = document.createAttribute("style");
const bgImage = `background-image: url('img/${chosenImage}')`;
style.value = bgImage;

document.body.setAttributeNode(style);