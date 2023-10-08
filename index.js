
const Secondhand = document.querySelector('.sec-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setdate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsdegrees = ((seconds / 60) * 360) + 90;
    Secondhand.style.transform = `rotate(${secondsdegrees}deg)`;

    const mins = now.getMinutes();
    const mindegrees = ((mins / 60) * 360) + 90;
    minhand.style.transform = `rotate(${mindegrees}deg)`;

    const hours = now.getHours(); // Get the current hour
    const hourdegrees = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hourdegrees}deg)`;

    console.log(seconds);
}

setdate(); // Call the function once to set up the initial clock state
setInterval(setdate, 1000); // Update the clock every second