import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {IngredientForm} from './ingredients/ingredientForm';
import {DishForm} from './dishes/dishForm';
import {SeasoningForm} from './seasonings/seasoningForm';
import {RecipeForm} from './recipes/recipeForm';

@Component({
  selector: 'my-app',
  templateUrl: 'app/appRoot.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/ingredient-form',
    name: 'IngredientForm',
    component: IngredientForm
  },
  {
    path: '/dish-form',
    name: 'DishForm',
    component: DishForm
  },
  {
    path: '/seasoning-form',
    name: 'SeasoningForm',
    component: SeasoningForm
  },
  {
    path: '/recipe-form',
    name: 'RecipeForm',
    component: RecipeForm
  }
])
export class AppComponent { }