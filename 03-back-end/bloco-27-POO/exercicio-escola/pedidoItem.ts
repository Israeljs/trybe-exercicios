export default class PedidoItem {
  _nome: string;

  _preco: number;

  constructor() {
    this._nome = '';
    this._preco = 0;
  }

  set nome(value: string) {
    this._nome = value;
  }

  set preco(value: number) {
    this._preco = value;
  }
}