export default class ItemPedido {
  nome: string;

  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  // set nome(value: string) {
  //   this._nome = value;
  // }

  // set preco(value: number) {
  //   this._preco = value;
  // }
}