import { goods } from './utils.mjs';
import { GoodList } from './good-list.mjs';
import { Basket } from './basket.mjs';
import { Good } from './good.mjs';
import { BasketGood } from './basket-good.mjs';

const FILTER = /[-().^+]/;
const goodsArray = [];
const basketGoodsArray = [];

console.log('*************Good*************');
for (let item of goods) {
  goodsArray.push(new Good(item));
}
console.table(goodsArray);
goodsArray[4].setAvailable(true);
console.table(goodsArray);

console.log('*************GoodList*************');
const itemsList = new GoodList(FILTER, true, false);
for (let item of goodsArray) {
  itemsList.add(item);
}
console.table(itemsList.list);
itemsList.remove(3);
console.table(itemsList.list);
console.log('*************Basket*************');
for (let item of itemsList.list) {
  basketGoodsArray.push(new BasketGood(item));
}
console.table(basketGoodsArray);
console.log('*************BasketList*************');
const basket = new Basket();
for (let item of basketGoodsArray) {
  basket.add(item, 1);
}
console.table(basket.goods);
console.log('Общая стоимость', basket.totalAmount);
console.log('Общее количество', basket.totalSum);
basket.add(basketGoodsArray[1], 2);
basket.removeUnavailable();
console.table(basket.goods);
basket.clear();
console.table(basket.goods);
