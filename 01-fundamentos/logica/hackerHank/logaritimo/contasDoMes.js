// Desenvolva um algorítimo que receba todas as contas do mês, faça a soma dos valores e diminua do da
// seu salario. Como saída mostre o totalde gastos e o quanto irá sobrar no final do mês.

const contasDoMes = (salario, contas) => {
  const gastos = contas.reduce((acc, conta) => acc + conta, 0);

  return console.log(`Salário: R$ ${salario},00
Gastos: R$ ${gastos},00
Salário com descontos: R$ ${salario - gastos},00
  `);
}

contasDoMes(1200, [150, 210, 330])
