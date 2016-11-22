import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("turkey", "Main Course", "http://www.bettycrocker.com/-/media/Images/Betty-Crocker/Tips/TipsLibrary/Cooking-Tips/How-to-Cook-a-Turkey/roast-turkey.jpg", []),
    new Recipe("mashed cauliflower", "For the starch", "http://images.media-allrecipes.com/userphotos/960x960/3755727.jpg", []),
    new Recipe("green beans", "Have to have the veggies", "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/8/10/2/Thanksgiving-2011_TU0105-green-beans-onions-almonds_s4x3.jpg", []),
    new Recipe("pistachio pudding", "Dessert or side??", "http://www.willcookforsmiles.com/wp-content/uploads/2015/09/Homemade-Pistachio-Pudding-2-from-willcookforsmiles.com_.jpg", []),
    new Recipe("stuffing", "Soooo delicious", "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/10/3/3/FNM_110112-Cornbread-Stuffing-With-Shrimp-and-Ham-Recipe_s4x3.jpg.rend.sniipadlarge.jpeg", []),
    new Recipe("pumpkin pie", "Hope there's room left...", "http://finedininglovers.cdn.crosscast-system.com/BlogPost/xl_9140_pumpkin-pie-finedininglovers-TP.jpg", []),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
