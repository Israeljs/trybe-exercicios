describe('Testando promise - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      test('Retorne a lista de animais', () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ];
        return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
      });
    });
  
    describe('Quando o tipo de animal não existe', () => {
      test('Retorna um erro', () => (
        expect(getListAnimals('Lion'))
          .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
      ));
    });
  });

  describe('Jest', () => {
    test('Brincando com expect', () => {
      const expectA = expect(true).toBeTruthy();
      const expectB = expect(Promise.resolve('Oi Tryber!')).resolves.toEqual('Oi Tryber!');
      const expectC = expect(Promise.reject(new Error('ERROR')))
        .rejects.toEqual(new Error('ERROR'));
      console.log('expect', expectA);
      console.log('expect.resolves', expectB);
      console.log('expect.rejects', expectC);
    });
  });
  // Perceba que o retorno do primeiro expect (que não tem os matchers) é undefined, 
  // porém o retorno do segundo e do terceiro (que tem os matchers) é uma promise .
