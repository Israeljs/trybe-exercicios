"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const margerita_1 = __importDefault(require("./margerita"));
const pepperoni_1 = __importDefault(require("./pepperoni"));
const pizza_1 = __importStar(require("./pizza"));
const SaleOff_1 = __importDefault(require("./SaleOff"));
const preparePizza = (pizza) => {
    pizza.makePizza();
    pizza.printPrice();
};
console.log('\n\n');
const pepperoni = new pepperoni_1.default(pizza_1.PizzaSize.EXTRA_LARGE);
preparePizza(pepperoni);
const margerita = new margerita_1.default(pizza_1.PizzaSize.EXTRA_LARGE);
preparePizza(margerita);
console.log('Pizzas feitas até o momento: ', pizza_1.default.getCountOrder);
const pepperoniPromocao = new SaleOff_1.default(pepperoni);
pepperoniPromocao.pizza.extra;
const margeritaPromocao = new SaleOff_1.default(margerita);
margeritaPromocao.pizza;
