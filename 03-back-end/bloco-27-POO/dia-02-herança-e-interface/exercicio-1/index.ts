import MyClass from './paraFixar-4';
import { Superclass, Subclass } from './paraFixar-1';

const fixar4 = new MyClass(5);
// console.log(`${a}`);
console.log(fixar4.myFunc(5));
console.log(fixar4.myNumber);

function hello(ob: Superclass): void{
  ob.sayHello();
}
const sup = new Superclass();
const sub = new Subclass();

hello(sup);
hello(sub);

