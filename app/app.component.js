System.register(['angular2/core', 'angular2/router', './ingredients/ingredientForm', './dishes/dishForm', './seasonings/seasoningForm', './recipes/recipeForm'], function(exports_1, context_1) {
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
    var core_1, router_1, ingredientForm_1, dishForm_1, seasoningForm_1, recipeForm_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ingredientForm_1_1) {
                ingredientForm_1 = ingredientForm_1_1;
            },
            function (dishForm_1_1) {
                dishForm_1 = dishForm_1_1;
            },
            function (seasoningForm_1_1) {
                seasoningForm_1 = seasoningForm_1_1;
            },
            function (recipeForm_1_1) {
                recipeForm_1 = recipeForm_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/appRoot.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/ingredient-form',
                            name: 'IngredientForm',
                            component: ingredientForm_1.IngredientForm
                        },
                        {
                            path: '/dish-form',
                            name: 'DishForm',
                            component: dishForm_1.DishForm
                        },
                        {
                            path: '/seasoning-form',
                            name: 'SeasoningForm',
                            component: seasoningForm_1.SeasoningForm
                        },
                        {
                            path: '/recipe-form',
                            name: 'RecipeForm',
                            component: recipeForm_1.RecipeForm
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map