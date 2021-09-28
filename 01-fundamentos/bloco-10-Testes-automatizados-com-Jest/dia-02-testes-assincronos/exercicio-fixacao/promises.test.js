// verificará se, ao chamar a função findAnimalsByType com Dog como parâmetro, o seu retorno será os dois cachorros do array Animals .
const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
  
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
  
        return reject(new Error('Não possui esse tipo de animal.'));
      }, 100);
    })
  );
  
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => (
      findAnimalsByType('Dog').then((listDogs) => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      })
    ));
  });