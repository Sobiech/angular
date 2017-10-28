webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_shopping_cart_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreFrontComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreFrontComponent = (function () {
    function StoreFrontComponent(productsService, shoppingCartService) {
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
    }
    StoreFrontComponent.prototype.addProductToCart = function (product) {
        this.shoppingCartService.addItem(product, 1);
    };
    StoreFrontComponent.prototype.removeProductFromCart = function (product) {
        this.shoppingCartService.addItem(product, -1);
    };
    StoreFrontComponent.prototype.productInCart = function (product) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (obs) {
            var sub = _this.shoppingCartService
                .get()
                .subscribe(function (cart) {
                obs.next(cart.items.some(function (i) { return i.productId === product.id; }));
                obs.complete();
            });
            sub.unsubscribe();
        });
    };
    StoreFrontComponent.prototype.ngOnInit = function () {
        this.products = this.productsService.all();
    };
    return StoreFrontComponent;
}());
StoreFrontComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush,
        selector: "app-store-front",
        styles: [__webpack_require__(328)],
        template: __webpack_require__(334)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], StoreFrontComponent);

var _a, _b;
//# sourceMappingURL=store-front.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulatedCartRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopulatedCartRouteGuard = (function () {
    function PopulatedCartRouteGuard(router, shoppingCartService) {
        this.router = router;
        this.shoppingCartService = shoppingCartService;
    }
    PopulatedCartRouteGuard.prototype.canActivate = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var cartSubscription = _this.shoppingCartService
                .get()
                .subscribe(function (cart) {
                if (cart.items.length === 0) {
                    observer.next(false);
                    _this.router.navigate(["/"]);
                }
                else {
                    observer.next(true);
                }
            });
            return function () { return cartSubscription.unsubscribe(); };
        });
    };
    return PopulatedCartRouteGuard;
}());
PopulatedCartRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], PopulatedCartRouteGuard);

var _a, _b;
//# sourceMappingURL=populated-cart.route-gaurd.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CachcingServiceBase; });

var CachcingServiceBase = (function () {
    function CachcingServiceBase() {
    }
    CachcingServiceBase.prototype.cache = function (getter, setter, retreive) {
        var cached = getter();
        if (cached !== undefined) {
            return cached;
        }
        else {
            var val = retreive().share();
            setter(val);
            return val;
        }
    };
    return CachcingServiceBase;
}());

//# sourceMappingURL=caching.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageServie; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageService = (function () {
    function StorageService() {
    }
    return StorageService;
}());

// tslint:disable-next-line:max-classes-per-file
var LocalStorageServie = (function (_super) {
    __extends(LocalStorageServie, _super);
    function LocalStorageServie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorageServie.prototype.get = function () {
        return localStorage;
    };
    return LocalStorageServie;
}(StorageService));
LocalStorageServie = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LocalStorageServie);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 158;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(174);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-root",
        template: "<router-outlet></router-outlet>"
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_checkout_checkout_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_confirmation_order_confirmation_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shopping_cart_shopping_cart_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_store_front_store_front_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__route_gaurds_populated_cart_route_gaurd__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_delivery_options_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_products_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_shopping_cart_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_storage_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_store_front_store_front_component__["a" /* StoreFrontComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_products_service__["a" /* ProductsDataService */],
            __WEBPACK_IMPORTED_MODULE_11__services_delivery_options_service__["a" /* DeliveryOptionsDataService */],
            __WEBPACK_IMPORTED_MODULE_10__route_gaurds_populated_cart_route_gaurd__["a" /* PopulatedCartRouteGuard */],
            __WEBPACK_IMPORTED_MODULE_14__services_storage_service__["a" /* LocalStorageServie */],
            { provide: __WEBPACK_IMPORTED_MODULE_14__services_storage_service__["b" /* StorageService */], useClass: __WEBPACK_IMPORTED_MODULE_14__services_storage_service__["a" /* LocalStorageServie */] },
            {
                deps: [__WEBPACK_IMPORTED_MODULE_14__services_storage_service__["b" /* StorageService */], __WEBPACK_IMPORTED_MODULE_12__services_products_service__["a" /* ProductsDataService */], __WEBPACK_IMPORTED_MODULE_11__services_delivery_options_service__["a" /* DeliveryOptionsDataService */]],
                provide: __WEBPACK_IMPORTED_MODULE_13__services_shopping_cart_service__["a" /* ShoppingCartService */],
                useClass: __WEBPACK_IMPORTED_MODULE_13__services_shopping_cart_service__["a" /* ShoppingCartService */]
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_checkout_checkout_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order_confirmation_order_confirmation_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_store_front_store_front_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_gaurds_populated_cart_route_gaurd__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([
                {
                    canActivate: [__WEBPACK_IMPORTED_MODULE_5__route_gaurds_populated_cart_route_gaurd__["a" /* PopulatedCartRouteGuard */]],
                    component: __WEBPACK_IMPORTED_MODULE_2__components_checkout_checkout_component__["a" /* CheckoutComponent */],
                    path: "checkout"
                },
                {
                    canActivate: [__WEBPACK_IMPORTED_MODULE_5__route_gaurds_populated_cart_route_gaurd__["a" /* PopulatedCartRouteGuard */]],
                    component: __WEBPACK_IMPORTED_MODULE_3__components_order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */],
                    path: "confirmed"
                },
                {
                    component: __WEBPACK_IMPORTED_MODULE_4__components_store_front_store_front_component__["a" /* StoreFrontComponent */],
                    path: "**"
                }
            ])
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_shopping_cart_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(productsService, shoppingCartService) {
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productsService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
        });
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush,
        selector: "app-shopping-cart",
        template: __webpack_require__(333)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], ShoppingCartComponent);

var _a, _b;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = (function () {
    function CartItem() {
        this.quantity = 0;
    }
    return CartItem;
}());

//# sourceMappingURL=cart-item.model.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryOption; });
var DeliveryOption = (function () {
    function DeliveryOption() {
    }
    DeliveryOption.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
    };
    return DeliveryOption;
}());

//# sourceMappingURL=delivery-option.model.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient() {
    }
    Ingredient.prototype.updateFrom = function (src) {
        this.name = src.name;
        this.percentage = src.percentage;
    };
    return Ingredient;
}());

//# sourceMappingURL=ingredient.model.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_models_ingredient_model__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });

var Product = (function () {
    function Product() {
    }
    Product.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
        this.ingredients = src.ingredients.map(function (i) {
            var ingredient = new __WEBPACK_IMPORTED_MODULE_0_app_models_ingredient_model__["a" /* Ingredient */]();
            ingredient.updateFrom(i);
            return ingredient;
        });
    };
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = (function () {
    function ShoppingCart() {
        this.items = new Array();
        this.grossTotal = 0;
        this.deliveryTotal = 0;
        this.itemsTotal = 0;
    }
    ShoppingCart.prototype.updateFrom = function (src) {
        this.items = src.items;
        this.deliveryOptionId = src.deliveryOptionId;
        this.grossTotal = src.grossTotal;
        this.deliveryTotal = src.deliveryTotal;
        this.itemsTotal = src.itemsTotal;
    };
    return ShoppingCart;
}());

//# sourceMappingURL=shopping-cart.model.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, ".checkout_row .product_image {\n  max-height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, ".product-list {\n  list-style-type: none;\n  margin: 0; }\n\n.product-container {\n  padding: 2rem 3rem 0 0;\n  position: relative;\n  border: 1px solid #EFEFEF;\n  margin: 10px 0; }\n  .product-container:hover {\n    box-shadow: 0 0 5px rgba(50, 50, 50, 0.3); }\n  .product-container .product_image {\n    max-height: 250px; }\n  .product-container .product_price {\n    float: right;\n    margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_storage_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cart_item_model__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_shopping_cart_model__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_delivery_options_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_products_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CART_KEY = "cart";
var ShoppingCartService = (function () {
    function ShoppingCartService(storageService, productService, deliveryOptionsService) {
        var _this = this;
        this.storageService = storageService;
        this.productService = productService;
        this.deliveryOptionsService = deliveryOptionsService;
        this.subscribers = new Array();
        this.storage = this.storageService.get();
        this.productService.all().subscribe(function (products) { return _this.products = products; });
        this.deliveryOptionsService.all().subscribe(function (options) { return _this.deliveryOptions = options; });
        this.subscriptionObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.subscribers.push(observer);
            observer.next(_this.retrieve());
            return function () {
                _this.subscribers = _this.subscribers.filter(function (obs) { return obs !== observer; });
            };
        });
    }
    ShoppingCartService.prototype.get = function () {
        return this.subscriptionObservable;
    };
    ShoppingCartService.prototype.addItem = function (product, quantity) {
        var cart = this.retrieve();
        var item = cart.items.find(function (p) { return p.productId === product.id; });
        if (item === undefined) {
            item = new __WEBPACK_IMPORTED_MODULE_3__models_cart_item_model__["a" /* CartItem */]();
            item.productId = product.id;
            cart.items.push(item);
        }
        item.quantity += quantity;
        cart.items = cart.items.filter(function (cartItem) { return cartItem.quantity > 0; });
        if (cart.items.length === 0) {
            cart.deliveryOptionId = undefined;
        }
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.empty = function () {
        var newCart = new __WEBPACK_IMPORTED_MODULE_4__models_shopping_cart_model__["a" /* ShoppingCart */]();
        this.save(newCart);
        this.dispatch(newCart);
    };
    ShoppingCartService.prototype.setDeliveryOption = function (deliveryOption) {
        var cart = this.retrieve();
        cart.deliveryOptionId = deliveryOption.id;
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.calculateCart = function (cart) {
        var _this = this;
        cart.itemsTotal = cart.items
            .map(function (item) { return item.quantity * _this.products.find(function (p) { return p.id === item.productId; }).price; })
            .reduce(function (previous, current) { return previous + current; }, 0);
        cart.deliveryTotal = cart.deliveryOptionId ?
            this.deliveryOptions.find(function (x) { return x.id === cart.deliveryOptionId; }).price :
            0;
        cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
    };
    ShoppingCartService.prototype.retrieve = function () {
        var cart = new __WEBPACK_IMPORTED_MODULE_4__models_shopping_cart_model__["a" /* ShoppingCart */]();
        var storedCart = this.storage.getItem(CART_KEY);
        if (storedCart) {
            cart.updateFrom(JSON.parse(storedCart));
        }
        return cart;
    };
    ShoppingCartService.prototype.save = function (cart) {
        this.storage.setItem(CART_KEY, JSON.stringify(cart));
    };
    ShoppingCartService.prototype.dispatch = function (cart) {
        this.subscribers
            .forEach(function (sub) {
            try {
                sub.next(cart);
            }
            catch (e) {
                // we want all subscribers to get the update even if one errors.
            }
        });
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_storage_service__["b" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_storage_service__["b" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_products_service__["a" /* ProductsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_products_service__["a" /* ProductsDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_delivery_options_service__["a" /* DeliveryOptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_delivery_options_service__["a" /* DeliveryOptionsDataService */]) === "function" && _c || Object])
], ShoppingCartService);

var _a, _b, _c;
//# sourceMappingURL=shopping-cart.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"medium-4 columns\">\r\n    <h2>\r\n      <i class=\"material-icons\">shopping_basket</i>\r\n      <span>Checkout</span>\r\n    </h2>\r\n  </div>\r\n  <div class=\"medium-4 columns text-right\">\r\n    <h4>\r\n      Order Total\r\n      <span class=\"text--red text--bold js-gross-total\">{{(cart | async).grossTotal | currency:'GBP':true}}</span>\r\n    </h4>\r\n  </div>\r\n  <div class=\"medium-4 columns text-right\">\r\n    <h5 class=\"text--red\"\r\n       *ngIf=\"(cart | async).deliveryOptionId === undefined\">Please select a delivery option...</h5>\r\n    <a class=\"success button large\"\r\n       *ngIf=\"(cart | async).deliveryOptionId !== undefined\"\r\n       routerLink=\"/confirmed\">Purchase Order</a>\r\n  </div>\r\n  <hr/>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"medium-8 columns\">\r\n    <h4>Delivery 1 of 1</h4>\r\n    <small>Dispatching to the UK....</small>\r\n    <div class=\"row checkout_row\"\r\n        *ngFor=\"let item of cartItems\">\r\n      <div class=\"medium-2 columns text-center\">\r\n          <img src=\"./assets/{{item.product.id}}.jpg\"\r\n                class=\"product_image\"/>\r\n      </div>\r\n      <div class=\"medium-5 columns\">\r\n          <span class=\"text--bold js-product-name\">{{item.product.name}}</span>\r\n          <p class=\"js-product-desc\">{{item.product.description}}</p>\r\n      </div>\r\n      <div class=\"medium-2 columns text-right\">\r\n          <p class=\"text--red js-product-costs\">{{item.quantity}} x {{item.product.price | currency:'GBP':true}}</p>\r\n      </div>\r\n      <div class=\"medium-3 columns text-right\">\r\n          <p class=\"text--bold text--red js-product-total\">{{item.totalCost | currency:'GBP':true}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"medium-4 columns\">\r\n    <h4>Delivery Options</h4>\r\n\r\n    <div class=\"row delivery-option\"\r\n        *ngFor=\"let option of deliveryOptions | async\">\r\n        <div class=\"small-1 columns\">\r\n          <input type=\"radio\"\r\n                 name=\"delivery_option\"\r\n                 id=\"{{option.name}}\"\r\n                 [checked]=\"option.id === (cart | async).deliveryOptionId\"\r\n                 (click)=\"setDeliveryOption(option)\">\r\n        </div>\r\n        <div class=\"small-9 columns\">\r\n          <label class=\"text--bold js-option-name\" for=\"{{option.name}}\" (click)=\"setDeliveryOption(option)\">{{option.name}}</label>\r\n        </div>\r\n        <div class=\"small-2 columns\">\r\n          <p class=\"text--bold text--red js-option-price\">{{option.price | currency:'GBP':true}}</p>\r\n        </div>\r\n        <div class=\"small-12 columns\">\r\n          <p>{{option.description}}</p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"small-10 columns small-centered\">\r\n      <a class=\"warning button expanded\"\r\n        routerLink=\"/\">Continue Shopping</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"medium-12 columns\">\r\n    <h1>Thank you for your order, it will be dispatched shortly!</h1>\r\n  </div>\r\n</div>\r\n<br/>\r\n<br/>\r\n<div class=\"row\">\r\n  <div class=\"medium-8 small-12 columns small-centered text-center\">\r\n    <a routerLink=\"/\" class=\"button success large expanded\">Continue Shopping!</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"small-12 columns\">\r\n    <h3>\r\n      <i class=\"material-icons\">shopping_basket</i>\r\n      Your Shopping Basket\r\n    </h3>\r\n  </div>\r\n</div>\r\n<br/>\r\n<div class=\"row\">\r\n  <div class=\"small-12 columns\">\r\n    <h5>\r\n      Sub Total ({{itemCount}} items):\r\n      <span class=\"text--red text--bold js-cart-total\">{{(cart | async).grossTotal | currency:'GBP':true}}</span>\r\n    </h5>\r\n  </div>\r\n</div>\r\n<br/>\r\n<div class=\"row\">\r\n  <div class=\"small-12 columns\">\r\n    <a class=\"success button large expanded\"\r\n       [attr.disabled]=\"itemCount === 0 ? true : null\"\r\n       routerLink=\"/checkout\">Proceed To Checkout</a>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"small-12 columns text-center\">\r\n    or\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"small-12 columns\">\r\n    <button type=\"button\"\r\n            class=\"secondary button small expanded js-btn-empty-cart\"\r\n            (click)=\"emptyCart()\"\r\n            [attr.disabled]=\"itemCount === 0 ? true : null\">\r\n      Empty shopping basket\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"small-12 medium-8 columns\">\r\n    <h3>Pick your favourite juices...</h3>\r\n    <ul class=\"product-list\">\r\n      <li *ngFor=\"let product of products | async\"\r\n          class=\"product-container\">\r\n          <div class=\"row\">\r\n            <div class=\"medium-3 columns text-center\">\r\n              <img src=\"./assets/{{product.id}}.jpg\"\r\n                   class=\"product_image\"/>\r\n            </div>\r\n            <div class=\"medium-9 columns\">\r\n              <h4>\r\n                <span class=\"text--bold js-product-name\">{{product.name}}</span>\r\n                <small class=\"product_price js-product-price\">{{product.price | currency:'GBP':true}}</small>\r\n              </h4>\r\n              <p class=\"js-product-desc\">{{product.description}}</p>\r\n              <p>\r\n                <span class=\"text--bold\">ingredients:</span>\r\n                <br/>\r\n                <span *ngFor=\"let ingredient of product.ingredients \">\r\n                  {{ingredient.name}} ({{ingredient.percentage}}%)\r\n                  <br/>\r\n                </span>\r\n              </p>\r\n              <p>\r\n                <button type=\"button\"\r\n                        class=\"button success large js-btn-add\"\r\n                        (click)=\"addProductToCart(product, 1)\">Add To Cart</button>\r\n                <button type=\"button\"\r\n                        class=\"button small js-btn-remove\"\r\n                        *ngIf=\"productInCart(product) | async\"\r\n                        (click)=\"removeProductFromCart(product, 1)\">Remove item from cart</button>\r\n              </p>\r\n            </div>\r\n          </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"small-12 medium-4 columns\">\r\n    <app-shopping-cart></app-shopping-cart>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_product_model__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caching_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDataService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var count = 0;
var ProductsDataService = (function (_super) {
    __extends(ProductsDataService, _super);
    function ProductsDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ProductsDataService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.products; }, function (val) { return _this.products = val; }, function () { return _this.http
            .get("./assets/products.json")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new __WEBPACK_IMPORTED_MODULE_2_app_models_product_model__["a" /* Product */]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    return ProductsDataService;
}(__WEBPACK_IMPORTED_MODULE_4__caching_service__["a" /* CachcingServiceBase */]));
ProductsDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsDataService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_delivery_option_model__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caching_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryOptionsDataService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeliveryOptionsDataService = (function (_super) {
    __extends(DeliveryOptionsDataService, _super);
    function DeliveryOptionsDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    DeliveryOptionsDataService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.deliveryOptions; }, function (val) { return _this.deliveryOptions = val; }, function () { return _this.http
            .get("./assets/delivery-options.json")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new __WEBPACK_IMPORTED_MODULE_3__models_delivery_option_model__["a" /* DeliveryOption */]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    return DeliveryOptionsDataService;
}(__WEBPACK_IMPORTED_MODULE_4__caching_service__["a" /* CachcingServiceBase */]));
DeliveryOptionsDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DeliveryOptionsDataService);

var _a;
//# sourceMappingURL=delivery-options.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_delivery_options_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_products_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_shopping_cart_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutComponent = (function () {
    function CheckoutComponent(productsService, deliveryOptionService, shoppingCartService) {
        this.productsService = productsService;
        this.deliveryOptionService = deliveryOptionService;
        this.shoppingCartService = shoppingCartService;
    }
    CheckoutComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    CheckoutComponent.prototype.setDeliveryOption = function (option) {
        this.shoppingCartService.setDeliveryOption(option);
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryOptions = this.deliveryOptionService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
            _this.productsService.all().subscribe(function (products) {
                _this.products = products;
                _this.cartItems = cart.items
                    .map(function (item) {
                    var product = _this.products.find(function (p) { return p.id === item.productId; });
                    return __assign({}, item, { product: product, totalCost: product.price * item.quantity });
                });
            });
        });
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-checkout",
        styles: [__webpack_require__(327)],
        template: __webpack_require__(331)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_products_service__["a" /* ProductsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_products_service__["a" /* ProductsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_delivery_options_service__["a" /* DeliveryOptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_delivery_options_service__["a" /* DeliveryOptionsDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object])
], CheckoutComponent);

var _a, _b, _c;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderConfirmationComponent = (function () {
    function OrderConfirmationComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        this.shoppingCartService.empty();
    };
    return OrderConfirmationComponent;
}());
OrderConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-order-confirmation",
        template: __webpack_require__(332)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], OrderConfirmationComponent);

var _a;
//# sourceMappingURL=order-confirmation.component.js.map

/***/ })

},[383]);
//# sourceMappingURL=main.bundle.js.map