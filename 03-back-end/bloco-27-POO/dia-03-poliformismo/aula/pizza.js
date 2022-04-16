"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaSize = void 0;
var PizzaSize;
(function (PizzaSize) {
    PizzaSize["MEDIUM"] = "MEDIUM";
    PizzaSize["LARGE"] = "LARGE";
    PizzaSize["EXTRA_LARGE"] = "EXTRA_LARGE";
})(PizzaSize = exports.PizzaSize || (exports.PizzaSize = {}));
class Pizza {
    // public extra: IExtra = { border: false, desert: true };
    constructor(size) {
        this._size = size;
        this._ingredients = ['sauce'];
        this._pricePerSize = [
            { size: PizzaSize.MEDIUM, price: 25.0 },
            { size: PizzaSize.LARGE, price: 35.0 },
            { size: PizzaSize.EXTRA_LARGE, price: 40.0 },
        ];
        Pizza._count += 1;
    }
    static get getCountOrder() {
        return Pizza._count;
    }
    get pizzaSize() {
        return this._size;
    }
    printPrice() {
        var _a;
        console.log(`Price is: ${(_a = this._pricePerSize.find((p) => p.size === this._size)) === null || _a === void 0 ? void 0 : _a.price}`);
    }
}
exports.default = Pizza;
Pizza._count = 0;
