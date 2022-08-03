export default class cliente {
  _nome: string;

  constructor() {
    this._nome = '';
  }

  public set nome(value: string) {
    this._nome = value;
  }
}