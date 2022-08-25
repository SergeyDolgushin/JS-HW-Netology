const basket = [];

const names = [
    '1 good',
    '2 good',
    '3 good',
    '4 good',
    '5 good',
]

const descriptions = [
    '1 good description',
    '2 good description',
    '3 good description',
    '4 good description',
    '5 good description',
]

function getRandomInteger(min, max) {

    return Math.round(Math.random() * (max - min) + min)
  };

const goods = names.map((name, index) => ({
        id: getRandomInteger(1, 100),
        name: name,
        description: descriptions[index],
        sizes: getRandomInteger(20, 60),
        price: getRandomInteger(100, 1000),
        available: Boolean(getRandomInteger(0, 1)),
    })
)

const addToBasket = (nameGood, amount) => {
    const good = goods.filter((good) => good.name === nameGood);
    basket.push({
        good: good[0],
        amount,
    });
}

const getTotalOrder = () => {
    let totalSumm = 0;
    let totalAmount = 0;   
    for (let item of basket) {
        totalSumm += item.good.price * item.amount;
        totalAmount += item.amount; 
    }

    console.log(totalAmount, totalSumm);
}

const deleteFromBasket = (nameGood, amount = 1) => {
    const indexOfGood = basket.findIndex((item) => item.good.name === nameGood);
    if (indexOfGood !== -1) {
        if (amount >= basket[indexOfGood].amount) {
            basket.splice(indexOfGood, 1);
        } else {
            basket[indexOfGood].amount = basket[indexOfGood].amount - amount; 
        }
    }
}


addToBasket(names[1], 1);
addToBasket(names[3], 2);
console.log(basket);
getTotalOrder();
console.log("------------------------------------");

deleteFromBasket(names[3], 2);
console.log(basket);
getTotalOrder();