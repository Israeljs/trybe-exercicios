const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
  return dragonDmg;
};
console.log(dragonAttack(dragon))

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo 
// strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (warrior) => {
  const maximo = warrior.strength;
  const minimo = (warrior.strength * warrior.weaponDmg);
  const warriorDmg = Math.floor((Math.random() * (maximo - minimo + 1) + minimo));
  return warriorDmg;
}
console.log(warriorAttack(warrior))

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//   O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//   A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o 
// valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
  const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
  };
  console.log(mageAttack(mage))

  // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que 
  // simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função 
  // que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints 
  // do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
  };
  
  gameActions.warriorTurn(warriorAttack);
  console.log(warrior.damage, dragon.healthPoints, gameActions)

  // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula 
  // o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o 
  // dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . 
  // Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);

  // 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula
  //  o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o 
  //  dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage 
  //  e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      const { manaSpent } = mageTurnStats;
      mage.damage = mageDamage;
      mage.mana -= manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);

  // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers 
  // atualizado e faça um console.log para visualizar o resultado final do turno.
  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      const { manaSpent } = mageTurnStats;
      mage.damage = mageDamage;
      mage.mana -= manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());
