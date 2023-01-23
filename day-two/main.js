const secondHand = document.querySelector('.second-hand')

function setDate() {
    const current = new Date();
    const seconds = current.getSeconds();
    const secondsDegrees = ((seconds / 90) * 360);
    secondHand.style.transform =  `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000)