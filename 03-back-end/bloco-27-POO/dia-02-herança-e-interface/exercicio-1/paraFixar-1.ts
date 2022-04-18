export class Superclass {
  public isSuper: boolean = true;

  public sayHello(): void {
    console.log('Olá mundo!');
  }

}

export class Subclass extends Superclass {

}

// Crie uma classe chamada Superclass .
// A Superclass deve possuir um atributo público isSuper
// isSuper deve ser setado como true na inicialização.
// A Superclass deve possuir um método público chamado sayHello , que deve imprimir um "Olá mundo!".
// Crie uma classe chamada Subclass que herda da Superclass .
// Crie uma função fora do escopo da Subclass que recebe um objeto da Superclass .
// Dentro da função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass .
// Chame a função 2 vezes, passando os objetos criados.
