System.register(['angular2/core', 'rxjs/Observable', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1;
    var DishesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DishesService = (function () {
                function DishesService(http) {
                    this.http = http;
                    this._dishesUrl = 'app/dishes/mockDishes.json';
                }
                DishesService.prototype.getDishes = function () {
                    return this.http.get(this._dishesUrl)
                        .map(this.extractDishesData)
                        .catch(this.handleError);
                };
                DishesService.prototype.addDish = function (dish) {
                    var body = JSON.stringify(dish);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._dishesUrl, body, options)
                        .map(this.extractDishData)
                        .catch(this.handleError);
                };
                DishesService.prototype.extractDishData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad Response Status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data.dish || {};
                };
                DishesService.prototype.extractDishesData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad Response Status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data.dishes || [];
                };
                //in future will want to have remote logging infrastructure
                DishesService.prototype.handleError = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                DishesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DishesService);
                return DishesService;
            }());
            exports_1("DishesService", DishesService);
        }
    }
});
//# sourceMappingURL=dishesService.js.map