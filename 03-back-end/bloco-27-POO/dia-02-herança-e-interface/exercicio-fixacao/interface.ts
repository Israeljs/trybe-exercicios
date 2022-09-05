interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const soma = myParam + this.myNumber;
    // return (console.log(`E a soma é: ${soma}`))
    return `E a soma é: ${soma}`
  }
}

const myObject = new MyClass(15);
console.log(myObject.myNumber)
console.log(myObject.myFunc(5))
