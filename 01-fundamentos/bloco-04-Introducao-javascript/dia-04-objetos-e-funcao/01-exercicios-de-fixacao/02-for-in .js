let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (const key in names) {
      console.log("Olá, " + names[key] + "!")
  }