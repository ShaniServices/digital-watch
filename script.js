const hour = document.querySelector('.hour');
const mint = document.querySelector('.mint');
const sec = document.querySelector('.sec');
const date = document.querySelector('.tdate');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

const setTime = () => {
    const now = new Date();

    hour.innerHTML = now.getHours();

    mint.innerHTML = now.getMinutes();
    
    sec.innerHTML = now.getSeconds();

    date.innerHTML = now.getDate()

    month.innerHTML = now.getMonth()

    year.innerHTML = now.getFullYear()
}

setInterval(setTime, 1000);