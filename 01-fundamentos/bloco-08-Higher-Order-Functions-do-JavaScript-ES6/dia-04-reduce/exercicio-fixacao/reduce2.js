const assert = require('assert');

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

//   crie uma função para mostrar na tela um relatório que diz em qual matéria 
//   o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !

  const expectedResult = [
    { name: 'Jorge', materia: 'Português' },
    { name: 'Mario', materia: 'Biologia' },
    { name: 'Jorge', materia: 'Português' },
    { name: 'Maria', materia: 'Química' },
    { name: 'Natalia', materia: 'Português' },
    { name: 'Wilson', materia: 'Português' },
  ]

  const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
  };
  
  const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name}));
  
  console.log(reportBetter(estudantes));

  assert.deepStrictEqual(reportBetter(estudantes), expectedResult);

// exemplo fodástico
  var vendedores = [
    { nome:'Adão', vendas:32 },
    { nome:'Bruno', vendas:23 },
    { nome:'Claudio', vendas:16 },
    { nome:'Dejair', vendas:7 },
    { nome:'Eduardo', vendas:4 },
    { nome:'Flavio', vendas:3 }
];

var totalVendas = vendedores.reduce(function(v, e) {
    v[e.nome] = e.vendas;
    return v;
}, {});

console.log(totalVendas);
// retona:
// {
//   "Adão": 32,
//   "Bruno": 23,
//   "Claudio": 16,
//   "Dejair": 7,
//   "Eduardo": 4,
//   "Flavio": 3
// }
