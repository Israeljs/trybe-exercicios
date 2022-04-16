"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_1 = __importDefault(require("./pizza"));
class Margerita extends pizza_1.default {
    constructor(size) {
        super(size);
        this.extra = { desert: false };
        this._ingredients.push('basil', 'cheese', 'olive', 'tomatoes');
        this._pricePerSize = this._pricePerSize.map((p) => (Object.assign(Object.assign({}, p), { price: p.price + 2.0 })));
        this.extra.desert = true;
    }
    makePizza() {
        console.log(`Making Margerita's pizza with size ${this._size}`);
    }
    printPrice() {
        var _a;
        console.log(`Price is: ${(_a = this._pricePerSize.find((p) => p.size === this._size)) === null || _a === void 0 ? void 0 : _a.price} ${this._ingredients}`);
    }
}
exports.default = Margerita;
