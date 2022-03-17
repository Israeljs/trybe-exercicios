const express = require('express');
const { Address, User } = require('./models');

const app = express();

app.get('/user', async (_req, res) => {
  try {
    const user = await User.findAll({
      include: { model: Address, as: 'address' },
    });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
        where: { id },
        // include: [{ model: Address, as: 'addresses' }],
        include: [{
          model: Address, as: 'address', attributes: { exclude: ['number'] },
        }],
        attributes: { exclude: ['age'] },
        // Dessa maneira, o campo number será excluído do retorno da requisição.
      });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;
