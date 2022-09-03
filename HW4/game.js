const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function makeCounter() {
    let startCount = 1;

    return () => startCount++;
}

function game(magicNumber, currentCount) {
    const count = currentCount();
    
    rl.question('Введите число:', (answer) => {
        if (magicNumber === Number(answer)) {
            console.log(`Вы выиграли за число попыток: ${count}`);
            const currentCount = makeCounter();
            const magicNumber = Math.floor(Math.random() * 100)
            game(magicNumber, currentCount);
        }
        if (magicNumber < Number(answer)) {
            console.log(`Ваше число больше, попытка: ${count}`);
        }
        if (magicNumber > Number(answer)) {
            console.log(`Ваше число меньше, попытка: ${count}`);
        }
        if (answer === 'Q') {
            rl.close();
            return;
        }
      
        game(magicNumber, currentCount);
      });
}


const currentCount = makeCounter();
game(56, currentCount);

// setInterval(()=> console.log("!"), 500);