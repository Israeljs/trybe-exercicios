export type EnergyType = {
  type_: 'mana' | 'stamina';
  amount: number;
};

const energy: EnergyType = {
  type_: 'mana',
  amount: 1000,
};

interface Employee {
  firstName: string;
  lastName: string;
  obj: EnergyType,
  fullName(): string;
}

const employee: Employee = {
  firstName: 'John',
  lastName: 'Doe',
  obj: energy,
  fullName(): string {
    return `${this.firstName} ${this.lastName}`; // usamos o "this" para acessar as propriedades da interface
  },
};

employee.firstName = 'ssss';
console.log(employee);

// npx ts-node src/poo.ts