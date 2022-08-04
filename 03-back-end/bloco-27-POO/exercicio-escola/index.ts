import Student from './estudante';
import Client from './cliente';
import Order from './pedido';
import OrderItem from './pedidoItem';

const personOne = new Student('202001011', 'Maria da Silva');

personOne.examsGrades = [25, 20, 23, 23];
personOne.worksGrades = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);

