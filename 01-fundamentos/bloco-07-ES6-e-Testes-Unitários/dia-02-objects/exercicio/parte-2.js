const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const turnoManha = (obj, key, value) => {
      
    obj[key] = value;
    return obj;
  }

  console.log(turnoManha(lesson2, 'turno', 'manhã'));

  // Crie uma função para listar as keys de um objeto.
  const showKey = (obj) => {
    console.log(Object.keys(obj))
  }
  showKey(lesson1);

  // Crie uma função para mostrar o tamanho de um objeto.
  const sizeObj = (obj) =>  Object.keys(obj).length;
  console.log(sizeObj(lesson1));

  // Crie uma função para listar os valores de um objeto.
  const listValues = (obj) =>  Object.values(obj);
  console.log(listValues(lesson1));

  // Crie um objeto de nome allLessons.
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
   console.log(allLessons);

  // allLessons();

//Usando o objeto criado no exercício 5, crie uma função
//que retorne o número total de estudantes em todas as aulas.
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  console.log(array)
  for (value of array) {
    total += obj[value].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// Crie uma função que obtenha o valor da chave de 
// acordo com a sua posição no objeto.
getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));//matemática

// Crie uma função que verifique se o par (chave / valor) existe na função.
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

// Crie uma função para contar quantos estudantes assistiram às aulas de matemática. 
// Use o objeto criado no exercício 5.
const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (const value of array) {
    if(obj[value].materia === 'Matemática'){
    total += obj[value].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório
// do professor ou professora, as aulas que ele ou ela ministrou e o número 
// total de estudantes. Use o objeto criado no exercício 5:
const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (const value of array) {
    if (value.professor === name) {
      allLessons.push(value.materia)
      allStudent += value.numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
