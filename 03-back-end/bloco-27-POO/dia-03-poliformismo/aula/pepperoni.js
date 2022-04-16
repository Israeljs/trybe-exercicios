"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_1 = __importDefault(require("./pizza"));
class Pepperoni extends pizza_1.default {
    constructor(size) {
        super(size);
        this.extra = { border: false };
        this._ingredients.push('pepperoni', 'cheese');
        this._pricePerSize = this._pricePerSize.map((p) => (Object.assign(Object.assign({}, p), { price: p.price + 5.0 })));
        this.extra.border = true;
    }
    makePizza() {
        console.log(`Making Pepperoni's pizza with size ${this._size}`);
    }
    printPrice() {
        var _a;
        console.log(`Price is: ${(_a = this._pricePerSize.find((p) => p.size === this._size)) === null || _a === void 0 ? void 0 : _a.price} ${this._ingredients}`);
    }
    static showOff() {
        console.log('Peppero the BEST PIZZA EVERRRR');
    }
}
exports.default = Pepperoni;
