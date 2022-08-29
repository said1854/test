// Creating random color and change the background to that
// color when you press button

const generateRandomHexColor = () => `#${Math.floor(Math.random()*0xffffff).toString(16)}`;

document.querySelector('button').addEventListener('click', () => {
    document.body.style.backgroundColor = generateRandomHexColor();
})
