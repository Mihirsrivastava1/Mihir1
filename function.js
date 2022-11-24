var min = 00;
var sec = 00;
var tens = 00;
var getmin = document.querySelector('.minutes');
var getsec = document.querySelector('.seconds');
var gettens = document.querySelector('.tens');
var btnstart = document.querySelector('.btn-start');
var btnstop = document.querySelector('.btn-stop');
var btnReset = document.querySelector('.btn-Reset');
var interval;
btnstart.addEventListener('click', () => {
    interval = setInterval(startcount, 10)
})

btnstop.addEventListener('click', () => {
    clearInterval(interval);
})
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    sec = '00';
    min = '00';
    getmin.innerHTML = min;
    getsec.innerHTML = sec;
    gettens.innerHTML = tens;
})



function startcount() {
    tens++;
    if (tens <= 9) {
        gettens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        gettens.innerHTML = tens;
    }
    if (tens > 99) {
        sec++;
        getsec.innerHTML = '0' + sec;
        tens = '00';
        gettens.innerHTML = tens;
    }
    if (sec > 9) {
        getsec.innerHTML = sec;
    }
    if (sec > 59) {
        min++;
        getmin.innerHTML = '0' + min;
        sec = '00';
        getsec.innerHTML = sec;
    }
    if (min > 9) {
        getmin.innerHTML = min;
    }
}