// 1 - Crie uma função que retorna o dano do dragão.
const dragonAttack = (dragon) => {
    const minDmg = 15;
    const { strength } = dragon;
    const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
    return dragonDmg;
};

// 2 - Crie uma função que reotorna o dano causado pelo warrior .
const warriorAttack = (warrior) => {
    const { weaponDmg } = warrior;
    const minDmg = warrior.strength;
    const maxDmg = minDmg * weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    return warriorDamage;
  };

  // 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno
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
