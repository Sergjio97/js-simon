const numeriRandom = [];

function randomNumber() {
    for (let i = 1; i <= 5; i++) {

        const randomNumber = Math.floor(Math.random() * 9) + 1;
        document.getElementById('randomNumber_box').innerHTML += randomNumber;
        numeriRandom.push(randomNumber);
        console.log(numeriRandom);

    };
}

randomNumber();

const clock = setInterval(timer, 1000);

let second = 30;

function timer (){

    document.getElementById('randomNumber_box').style.display = "none"; 
    document.getElementById('timer_box').innerHTML = second-- + 's';
    if (second == -1){
        clearInterval(clock);
    }   
}

for (let i = 0; i < 5; i++){
    let user = parseInt(prompt('Inserisci i numeri che hai visualizzato'))
    if (user == numeriRandom){
        alert('hai vinto')
    } else {
        alert('hai perso')
    }
}











