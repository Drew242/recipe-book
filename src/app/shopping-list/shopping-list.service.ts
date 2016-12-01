import { Ingredient } from "../ingredient";

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    // the following prevents a for loop for each item in the array argument
    Array.prototype.push.apply(this.items, items);
  }

}
