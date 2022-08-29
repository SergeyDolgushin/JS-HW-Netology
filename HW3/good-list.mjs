import { sortPriceLow, sortPriceHigh } from './utils.mjs';

export class GoodList {
  #goods = [];

  constructor(filter, sortPrice, sortDir) {
    this.filter = {
      filter,
      test: (name) => name.match(filter),
    };
    this.sortPrice = sortPrice;
    this.sortDir = sortDir;
  }

  test = (name) => {
    return name.match(FILTER);
  }

  add = (item) => {
    if (this.filter.test(item.name) === null) {
      this.#goods = [...this.#goods, item];
    } else {
      console.log('Некорректное имя товара, id =', item.id);
    }
  }

  remove = (id) => {
    const indexOfGood = this.#goods.findIndex((item) => item.id === id);
    this.#goods.splice(indexOfGood, 1);
  }

  set setFilter(props) {
    this.sortPrice = props.sortPrice;
    this.sortDir = props.sortDir;
  }

  get list() {
    if (this.sortPrice) {
      const items = [...this.#goods];

      return this.sortDir ?
        items.sort(sortPriceLow)
        :
        items.sort(sortPriceHigh);
    } else {

      return this.#goods;
    }
  }
}
