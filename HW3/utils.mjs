const names = [
  '1 good()',
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

export const goods = names.map((name, index) => ({
      id: index,
      name: name,
      description: descriptions[index],
      sizes: getRandomInteger(20, 60),
      price: getRandomInteger(100, 1000),
      available: false,
  })
)


export const sortPriceLow = (itemA, itemB) => itemA.price - itemB.price;
export const sortPriceHigh = (itemA, itemB) => itemB.price - itemA.price;

