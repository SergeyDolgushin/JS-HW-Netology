import { Good } from './good.mjs';

export class BasketGood extends Good {

  constructor(params, amount) {
    super(params);
    this.amount = amount;
  }
}
