const subtrair = require('./math');

test("subtraiar", () => {
    // testando se a função foi chamada
    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
  });



  describe('2 - Verifica o usuário', () => {
    // Crie sua mock da função fetchURL() aqui
  
    test('verifica se o usuário é o tunico', async () => (
      api.fetchURL().then((user) => {
        expect(user.gender).toEqual('male');
        expect(user.name.first).toEqual('Antônio');
        expect(user.name.last).toEqual('Britto');
        expect(user.location.country).toEqual('Brazil');
        expect(user.email).toEqual('tunico@bol.com.br');
        expect(user.login.username).toEqual('tunicao123');
        expect(user.login.password).toEqual('1234567890');
      })
    ));
  });
  
