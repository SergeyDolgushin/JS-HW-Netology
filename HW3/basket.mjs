export class Basket {

  constructor() {
    this.goods = [];
  }

  add = (good, amount) => {
    const currentGood = this.goods.filter((item) => item.id === good.id);

    if (currentGood.length === 0) {
      this.goods.push({...good, amount});
    } else {
      const indexOfGood = this.goods.findIndex((item) => item.id === currentGood[0].id);
      this.goods[indexOfGood] = {...good, amount: currentGood[0].amount + amount};
    }

  }

  clear = () => {
    this.goods = [];
  }

  remove = (good, amount) => {
    const currentGood = this.goods.filter((item) => item.id === good.id);
    if (currentGood.length !== 0) {
      if (currentGood[0].amount > amount) {
        this.goods = [{...good, amount: currentGood[0].amount - amount}];
      } else {
        const indexOfGood = this.goods.findIndex((item) => item.id === currentGood[0].id);
        this.goods.splice(indexOfGood, 1);
      }
    }
  }

  removeUnavailable = () => {
    const goodsArray = [...this.goods];
    goodsArray.forEach((good) => {
      if (!good.available) {
        const indexOfGood = this.goods.findIndex((item) => item.id === good.id);
        this.goods.splice(indexOfGood, 1);
      }
    });
  }

  get totalAmount() {
    let total = 0;
    this.goods.forEach((good) => {
      total += good.price * good.amount;
    });

    return total;
  }

  get totalSum() {

    return this.goods.reduce((total, currentItem) => total + currentItem.amount, 0);
  }
}
