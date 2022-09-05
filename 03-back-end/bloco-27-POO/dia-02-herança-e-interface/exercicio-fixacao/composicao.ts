interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(`Eu quero dizer: ${param}`);   
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(`Eu queria dizer: ${param}`);   
  }  
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExempleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`${key} mas disse ${value}`);
  }
}
// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExempleDatabase(logger1);
const database2 = new ExempleDatabase(logger2);
const database3 = new ExempleDatabase();
// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');

// Não faz sentido que a classe (tabuleiro) nem a classe(tabuleiro de xadrez)
// herde da classe Database, visto que um tabuleiro não é um tipo de banco de dados. O correto 
// neste caso seria utilizar composição de classes, que é reunir todos os tipos de objetos que 
// você precisa em uma mesma classe ao invés de fazer herança:
