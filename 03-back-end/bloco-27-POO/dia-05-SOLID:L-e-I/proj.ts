export default abstract class  Race { // não pode ser instanciada

  constructor(private _name: string, private _dexterity: number) { }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances() { // está associado com a classe, e não com os objetos: Classe.metodo()
    return new Error('Not implemented');
  }

  abstract get maxLifePoints(): number; // obriga as subclasses a implementar o método
}
