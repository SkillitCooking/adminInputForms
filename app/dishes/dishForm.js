System.register(['angular2/core', './dishesService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dishesService_1;
    var DishForm, Dish;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dishesService_1_1) {
                dishesService_1 = dishesService_1_1;
            }],
        execute: function() {
            DishForm = (function () {
                function DishForm(_dishesService) {
                    this._dishesService = _dishesService;
                    this.dishArr = [];
                    this.submitted = false;
                    this.dishModel = new Dish("", "");
                    this.active = true;
                }
                DishForm.prototype.ngOnInit = function () {
                    this.getDishes();
                };
                DishForm.prototype.getDishes = function () {
                    var _this = this;
                    this._dishesService.getDishes()
                        .subscribe(function (dishes) { return _this.dishArr = dishes; }, function (error) { return _this.errorMessage = error; });
                };
                DishForm.prototype.addDish = function () {
                    var _this = this;
                    if (!this.dishModel) {
                        return;
                    }
                    this._dishesService.addDish(this.dishModel)
                        .subscribe(function (dish) { return _this.dishArr.push(dish); }, function (error) { return _this.errorMessage = error; });
                };
                DishForm.prototype.onSubmit = function () {
                    var _this = this;
                    this.dishArr.push(this.dishModel);
                    //to reset form to "pristine state" - work around via Angular2 docs
                    this.active = false;
                    this.dishModel = new Dish("", "");
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                DishForm = __decorate([
                    core_1.Component({
                        selector: 'dish-form',
                        templateUrl: 'app/dishes/dishForm.html',
                        providers: [dishesService_1.DishesService]
                    }), 
                    __metadata('design:paramtypes', [dishesService_1.DishesService])
                ], DishForm);
                return DishForm;
            }());
            exports_1("DishForm", DishForm);
            Dish = (function () {
                function Dish(name, ingredientCapacity) {
                    this.name = name;
                    this.ingredientCapacity = ingredientCapacity;
                }
                return Dish;
            }());
            exports_1("Dish", Dish);
        }
    }
});
//# sourceMappingURL=dishForm.js.map