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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

// A grande diferença quando vamos fazer uma requisição que necessite 
// da utilização de uma association com o Sequelize, é o campo include. 
// Esse campo diz ao Sequelize quais serão as configurações da requisição. 
// A propriedade model se refere a qual tabela será utilizada. Já a propriedade 
// as deve ser igual ao que declaramos no momento da criação da associação no respectivo model.
