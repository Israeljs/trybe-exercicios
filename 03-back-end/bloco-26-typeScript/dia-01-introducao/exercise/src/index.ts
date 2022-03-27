enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

// Exercícios
// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
enum DaysOfWeek {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
enum RainbowColors {
  Red = "Vermelho",
  Orange = "Laranja",
  Yellow = "Amarelo",
  Green = "Verde",
  Blue = "Azul",
  Indigo = "Anil",
  Violet = "Violeta",
}
// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
enum Actions {
  Save,
  Print,
  Open,
  View,
  Close,
}
// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
enum CardinalPoints {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

console.log(DaysOfWeek);
console.log(RainbowColors);
console.log(Actions);
console.log(CardinalPoints);
