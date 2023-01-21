
import { intervalToDuration } from 'date-fns'

const form = document.querySelector('.form');
const years = document.querySelector('.years');
const months = document.querySelector('.months');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const startValue = document.querySelector('.timer__start').value;
    getValue(startValue);
});
function getValue(value) {

    let data = intervalToDuration({
        start: new Date(Date.now()),
        end: new Date(value)
      });
        getDate(data);
};
function getDate({
    years: year,
    months: month,
    days: day,
    hours: hour,
    minutes: minut,
}) {
    years.textContent = `Осталось: ` + year + ` лет`;
    months.textContent = month + ` мес`;
    days.textContent = day + ` дней`;
    hours.textContent = hour + ` :`;
    minutes.textContent = minut;
};
