
let randomNumberBox = document.getElementById('randomNumber_box');

function randomNumber() {
    for (let i = 1; i <= 5; i++) {

        const randomNumber = Math.floor(Math.random() * 9) + 1;
        let randomNumberBox = document.getElementById('randomNumber_box').innerHTML += randomNumber;

    };
}

randomNumber();

function timer() {
    for (let i = 30; i >= 1; i--) {
        setTimeout (i, 1000);
        document.getElementById('timer_box').innerHTML += i;

    }
}

timer ();





