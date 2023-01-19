function timer(duration){
    let timer = duration, hours, minutes, seconds;

    setInterval(function(){
        seconds = parseInt(timer % 60);
        minutes = parseInt((timer / 60) % 10);
        hours = parseInt((timer / 3600) % 24);
        days = parseInt((timer / 3600) / 24);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;
        if(--timer < 0){
            timer = 00;
        }
        const secondsDisplay = document.querySelector('#seconds')
        const minutesDisplay = document.querySelector('#minutes')
        const hoursDisplay = document.querySelector('#hours')
        const daysDisplay = document.querySelector('#days')
        secondsDisplay.textContent = seconds;
        minutesDisplay.textContent = minutes;
        hoursDisplay.textContent = hours;
        daysDisplay.textContent = days;

    },1000);
}


timer(120000)