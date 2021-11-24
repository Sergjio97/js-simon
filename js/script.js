
function randomNumber() {
    for (let i = 1; i <= 5; i++) {

        const randomNumber = Math.floor(Math.random() * 9) + 1;
        document.getElementById('randomNumber_box').innerHTML += randomNumber;

    };
}

randomNumber();



let timeout3s = setTimeout(timeout, 3000);

function timeout (){
    const clock = setInterval(timer, 1000);
}

let second = 30;

function timer (){

    document.getElementById('randomNumber_box').style.display = "none"; 
    document.getElementById('timer_box').innerHTML = second-- + 's';
    if (second == -1){
        clearInterval(clock);
    }   
}











