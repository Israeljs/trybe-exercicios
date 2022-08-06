// class Superclass {
//   isSuper: boolean;
//   constructor() {
//     this.isSuper = true;
//   }
//   private sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }
// class Subclass extends Superclass {
//   // constructor() {
//   //   super()
//   //   this.isSuper = false;
//   // }
//   public sayHello2(): void {
//     this.sayHello();
//   }
// }
// const myFunc = (obj: Subclass) => {
//   // console.log(obj.isSuper ? 'Super!' : 'Sub!');
//   obj.sayHello2();
// }
// // const objSuper = new Superclass()
// const objSub = new Subclass()

// // myFunc(objSuper)
// myFunc(objSub)
class Superclass {
  isSuper: boolean;
  constructor() {
    this.isSuper = true;
  }
  sayHello(): void {
    console.log('Olá mundo!');
  }
}
class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }
}
const myFunc = (obj: Superclass) => {
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}
const objSuper = new Superclass()
const objSub = new Subclass()

myFunc(objSuper)
myFunc(objSub)
