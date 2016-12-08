import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import "rxjs/Rx"; 

import { Recipe } from "./recipe";
import { Ingredient } from "../ingredient";

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("turkey", "Main Course", "http://www.bettycrocker.com/-/media/Images/Betty-Crocker/Tips/TipsLibrary/Cooking-Tips/How-to-Cook-a-Turkey/roast-turkey.jpg", [
      new Ingredient('turkey', 1)
    ]),
    new Recipe("mashed cauliflower", "For the starch", "http://images.media-allrecipes.com/userphotos/960x960/3755727.jpg", [
      new Ingredient('cauliflower', 3),
      new Ingredient('milk', 1),
      new Ingredient('butter', 1)
    ]),
    new Recipe("green beans", "Have to have the veggies", "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/8/10/2/Thanksgiving-2011_TU0105-green-beans-onions-almonds_s4x3.jpg", [
      new Ingredient('green beans', 1),
      new Ingredient('pepper', 1)
    ]),
    new Recipe("pistachio pudding", "Dessert or side??", "http://www.willcookforsmiles.com/wp-content/uploads/2015/09/Homemade-Pistachio-Pudding-2-from-willcookforsmiles.com_.jpg", [
      new Ingredient('jello pack', 4),
      new Ingredient('cool whip', 2)
    ]),
    new Recipe("stuffing", "Soooo delicious", "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/10/3/3/FNM_110112-Cornbread-Stuffing-With-Shrimp-and-Ham-Recipe_s4x3.jpg.rend.sniipadlarge.jpeg", [
      new Ingredient('stuffing mix', 2),
      new Ingredient('butter', 2),
      new Ingredient('milk', 2)
    ]),
    new Recipe("pumpkin pie", "Hope there's room left...", "http://finedininglovers.cdn.crosscast-system.com/BlogPost/xl_9140_pumpkin-pie-finedininglovers-TP.jpg", [
      new Ingredient('pumpkin', 1),
      new Ingredient('crust', 1)
    ]),
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipe-book-28787.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipe-book-28787.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
