const date = new Date(); //mai datum

const renderCalendar = () => { //Function

    

    date.setDate(7);

    const monthDays = document.querySelector('.days');
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const firstDayIndex = date.getDay();
    const nextDays = 7 - lastDayIndex -1;
    
    const months = [
        "Január",
        "Február",
        "Március",
        "Április",
        "Május",
        "Június",
        "Július",
        "Augusztus",
        "Szeptember",
        "Október",
        "November",
        "December",
    ];
    
    document.querySelector('.date h1').innerHTML = date.getFullYear() + ", " + months[date.getMonth()];
    
    document.querySelector('.date p').innerHTML = "Mai dátum: " + new Date().toLocaleDateString();
    
    let days = "";
    
    for(let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    
    for(let i = 1; i <= lastDay; i++) {
        if(
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
        ){
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    monthDays.innerHTML = days;
}


document.querySelector('.prev').addEventListener
('click',() => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})

document.querySelector('.next').addEventListener
('click',() => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

renderCalendar();