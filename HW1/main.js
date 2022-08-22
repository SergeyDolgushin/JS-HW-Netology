const MIN_RANGE = 0;
const MAX_RANGE = 999;

const result = {
    equal: 'Вы угадали',
    less: 'Ваше число меньше',
    more: 'Ваше число больше'
};

function getRandomInteger(min, max) {

    return Math.round(Math.random() * (max - min) + min)
  };

function getUserNumber(){
    let userNumber = prompt();
    while (isNaN(userNumber)) {
        alert("Введите число");
        userNumber = prompt();
    }

    return Number(userNumber);
  }

function guessNumber() {

    const randomNumber = getRandomInteger(MIN_RANGE, MAX_RANGE);
    console.log(randomNumber);

    const userNumber = getUserNumber();
    console.log(userNumber);
    
    if (userNumber > randomNumber) {
        
        return alert(result.more);
    }

    if (userNumber < randomNumber) {
        
        return alert(result.less);
    }

    return alert(result.equal);
}


function startGame() {
    let isStartGame = true;

    while(isStartGame) {
        guessNumber();

        alert('Введите 1, чтобы продолжить игру или игра окончена');
        const userChoice = Number(prompt());
        isStartGame = (userChoice === 1) ? true : false;
    }
}

startGame();