// index.js
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        // include: [{ model: Address, as: 'addresses' }],
        include: [{
          model: Address, as: 'addresses', attributes: { exclude: ['number'] },
        }],
        attributes: { exclude: ['age'] },
        // Dessa maneira, o campo number será excluído do retorno da requisição.
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// Lazy Loading
// Esse método consiste, basicamente, em não especificar uma propriedade 
// includes no momento de realizar a query no banco. Dessa forma, cria-se 
// a possibilidade de termos dois usos para o mesmo endpoint.
// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
// const employee = await Employee.findOne({ where: { id } });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//        if (req.query.includeAddresses === 'true') {
//          const addresses = await Address.findAll({ where: { employeeId: id } });
//          return res.status(200).json({ employee, addresses });
//        }

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

// A grande diferença quando vamos fazer uma requisição que necessite 
// da utilização de uma association com o Sequelize, é o campo include. 
// Esse campo diz ao Sequelize quais serão as configurações da requisição. 
// A propriedade model se refere a qual tabela será utilizada. Já a propriedade 
// as deve ser igual ao que declaramos no momento da criação da associação no respectivo model.
