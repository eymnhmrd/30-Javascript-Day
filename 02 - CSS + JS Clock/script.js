
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const SetDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;

}

setInterval(SetDate,1000);