import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("turkey", "Happy Thanksgiving", "http://www.bettycrocker.com/-/media/Images/Betty-Crocker/Tips/TipsLibrary/Cooking-Tips/How-to-Cook-a-Turkey/roast-turkey.jpg");

  constructor() { }

  ngOnInit() {
  }

}
