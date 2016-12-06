import { Ingredient } from "../ingredient";

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  addItems(items: Ingredient[]) {
    // the following prevents a for loop for each item in the array argument
    Array.prototype.push.apply(this.items, items);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);  
  }

}
