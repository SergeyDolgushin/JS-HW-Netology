const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function question (query) {
    return new Promise((resolve) => {
        rl.question(query, (data) => {
            resolve(data);
        })
    })
}


function makeCounter() {
    let startCount = 1;

    return () => startCount++;
}


async function game(magicNumber, currentCount) {
    const count = currentCount();
    
    question('Введите число:').then((answer) => {
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
    })
}

async function game_2(magicNumber, currentCount) {
    const count = currentCount();
    
    let answer = await question('Введите число, игра 2:');

    if (magicNumber === Number(answer)) {
        console.log(`Вы выиграли за число попыток___: ${count}`);
        const currentCount = makeCounter();
        const magicNumber = Math.floor(Math.random() * 100)
        game(magicNumber, currentCount);
    };
    if (magicNumber < Number(answer)) {
        console.log(`Ваше число больше, попытка___: ${count}`);
    };
    if (magicNumber > Number(answer)) {
        console.log(`Ваше число меньше, попытка___: ${count}`);
    };
    if (answer === 'Q') {
        rl.close();
        return;
    };

    game(magicNumber, currentCount);
};

const currentCount = makeCounter();
game(40, currentCount);

// const currentCount_2 = makeCounter();
// game_2(50, currentCount_2);
// setInterval(()=> console.log("!"), 500);

