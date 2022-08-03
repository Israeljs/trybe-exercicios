export default class Estudante {
  _matricula: string;
  _nome: string;
  _scoreP1: number;
  _scoreP2: number;
  _scoreP3: number;
  _scoreP4: number;
  _scoreT1: number;
  _scoreT2: number;
  
  constructor(matricula: string, nome: string, scoreP1: number, scoreP2: number, scoreP3: number, scoreP4: number, scoreT1: number, scoreT2: number) {
    this._matricula = matricula;
    this._nome = nome;
    this._scoreP1 = scoreP1;
    this._scoreP2 = scoreP2;
    this._scoreP3 = scoreP3;
    this._scoreP4 = scoreP4;
    this._scoreT1 = scoreT1;
    this._scoreT2 = scoreT2;
  }

  public scoreSum(): number {
    const sum: number = this._scoreP1 + this._scoreP2 + this._scoreP3 + this._scoreP4 + this._scoreT1 + this._scoreT2;
    return sum;
  }

  public scoreAverage(): number {
    const averange: number = this.scoreSum() / 6;
    return averange;
  }
}