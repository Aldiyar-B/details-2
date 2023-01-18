import intervalToDuration from 'date-fns/intervalToDuration';
import { ar } from 'date-fns/locale';
//import format from 'date-fns';

const UI_ELEMENTS = {
    input: document.querySelector('.date__input'),
    formDate: document.querySelector('.date__form'),
    resultDiv: document.querySelector('.result'),
}

UI_ELEMENTS.formDate.addEventListener('submit', showResult);
//console.log(inputValue);
function realDateAndTime() {  
}

function showResult(e) {
    e.preventDefault();
    let date = new Date(UI_ELEMENTS.input.value); //получаем данные из инпута и неявно парсим в дату
    //в формате "Sun Jan 15 2023 02:00:00 GMT+0200 (Восточная Европа, стандартное время)"

    let distanceDateAndTime = calcResult(date);
    UI_ELEMENTS.resultDiv.textContent = `Years: ${distanceDateAndTime.years}, 
                                        Months: ${distanceDateAndTime.months}, 
                                        Days: ${distanceDateAndTime.days}, 
                                        Hours: ${distanceDateAndTime.hours}, 
                                        Minutes: ${distanceDateAndTime.minutes}, 
                                        Seconds: ${distanceDateAndTime.seconds}`;
}



function calcResult(date) {
    let result;
    console.log(date);
    if (date === new Date()) {
        return result = "This date is today";
    } else {
        //const choosenDate = date;  
        /*
        const year = choosenDate.getFullYear(); //получаем год из строки даты
        const month = choosenDate.getMonth();  //получаем месяц из строки даты
        const day = choosenDate.getDate();  //получаем день из строки даты
        console.log(`${day}-${month}-${year}`);

        //const formateDate = format(new Date(year, day, month), 'MM/dd/yyyy');
        //console.log(formateDate);
        */
        const distanceForDate = intervalToDuration({
            start: new Date(),
            end: new Date(date)
        });
        result = distanceForDate;
    }
    return result;
}

function showMessage(obj) {
    console.log(obj);
}

//добавить локал сторедж или куки и сделать таймер