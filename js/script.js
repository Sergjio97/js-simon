
let randomNumberBox = document.getElementById('randomNumber_box');

function randomNumber() {
    for (let i = 1; i <= 5; i++) {

        const randomNumber = Math.floor(Math.random() * 9) + 1;
        let randomNumberBox = document.getElementById('randomNumber_box').innerHTML += randomNumber;

    };
}

randomNumber();

const clock = setInterval(timer, 1000);

let second = 30;

function timer (){
    document.getElementById('timer_box').innerHTML = second-- + 's';
    if (second == -1){
        clearInterval(clock);
    }   
}











