import { Good } from './good.mjs';

export class BasketGood extends Good {

  constructor(params) {
    super(params);
    this.amount = 0;
  }
}
