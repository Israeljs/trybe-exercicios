const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
//   for (const key in coolestTvShow) {
//     console.log(key);
//   }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons

  console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

// Object.keys("foo");
// ["0", "1", "2"]    

// var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; // ordena um objeto com chave numérica
// console.log(Object.keys(an_obj))

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
      console.log(`${arrayOfSkills[index]} Nível: ${student[arrayOfSkills[index]]}`);
    }
  };

  //perceba que a mesma função é utilizada para iterar sobre os dois 
  //objetos, mesmo o segundo tendo uma chave a mais que o outro.
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);