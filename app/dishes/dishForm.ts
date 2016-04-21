import {Component, OnInit} from 'angular2/core';

import {DishesService} from './dishesService';

@Component({
  selector: 'dish-form',
  templateUrl: 'app/dishes/dishForm.html',
  providers: [DishesService]
})
export class DishForm implements OnInit{
  dishArr: Dish[];
  dishModel: Dish;
  submitted: boolean;
  active: boolean;
  errorMessage: string;

  constructor(private _dishesService: DishesService) {
    this.dishArr = [];
    this.submitted = false;
    this.dishModel = new Dish("", "");
    this.active = true;
  }

  ngOnInit() {
    this.getDishes();
  }

  private getDishes() {
    this._dishesService.getDishes()
                       .subscribe(
                         dishes => this.dishArr = dishes,
                         error => this.errorMessage = <any>error);
  }

  private addDish() {
    if (!this.dishModel) { return; }
    this._dishesService.addDish(this.dishModel)
                       .subscribe(
                         dish => this.dishArr.push(dish),
                         error => this.errorMessage = <any>error);
  }

  onSubmit() {
    this.dishArr.push(this.dishModel);
    //to reset form to "pristine state" - work around via Angular2 docs
    this.active = false;
    this.dishModel = new Dish("", "");
    setTimeout(() => this.active = true, 0);
  }
}

export class Dish {
  constructor(
    public name: string,
    public ingredientCapacity: string
    ){}

}