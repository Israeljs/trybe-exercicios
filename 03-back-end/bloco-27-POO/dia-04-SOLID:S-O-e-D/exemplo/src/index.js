"use strict";
// SRP Exemplo "menos pior"
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApproved = exports.updateApprovalData = exports.approvedStudents = exports.percentageGradesIntoLetters = void 0;
/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
    name,
    disciplines: disciplines.map(({ name, grade }) => {
        let letterGrade;
        if (grade >= 0.9)
            letterGrade = 'A';
        else if (grade >= 0.8)
            letterGrade = 'B';
        else if (grade >= 0.7)
            letterGrade = 'C';
        else if (grade >= 0.6)
            letterGrade = 'D';
        else if (grade >= 0.1)
            letterGrade = 'E';
        else
            letterGrade = 'F';
        return { name, grade, letterGrade };
    })
});
exports.percentageGradesIntoLetters = percentageGradesIntoLetters;
/* "Determinar" */
const approvedStudents = ({ disciplines }) => disciplines.every(({ grade }) => grade > 0.7);
exports.approvedStudents = approvedStudents;
/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
    console.log(`A pessoa com nome ${studentName} foi aprovada!`);
    disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
};
exports.updateApprovalData = updateApprovalData;
function setApproved(students) {
    students
        .map(percentageGradesIntoLetters)
        .filter(approvedStudents)
        .map(updateApprovalData);
}
exports.setApproved = setApproved;


//  exemplo ruim
// type Discipline = {
//   name: string;
//   grade: number;
//   letterGrade?: string;
// };
// type Student = {
//   name: string;
//   disciplines: Discipline[];
// };
// function setApproved(students: Array<Student>) {
//   const studentsWithLetterGrade = students.map((student) => {
//     const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
//       if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
//       else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
//       else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
//       else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
//       else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
//       else discipline.letterGrade = 'F';
//       return discipline;
//     });
//     return {
//       name: student.name,
//       disciplines: disciplinesWithLetterGrade,
//     };
//   });
//   const approvedStudents = studentsWithLetterGrade.filter(({ disciplines }) =>
//     disciplines.every((discipline) => discipline.grade > 0.7));
//   /* Finja que o console.log é algo que atualiza uma base de dados */
//   approvedStudents.map(({ name, disciplines }) => {
//     console.log(`A pessoa com nome ${name} foi aprovada!`);
//     disciplines.map(({ name, letterGrade }) =>
//       console.log(`${name}: ${letterGrade}`));
//   });
// }
// /* Abaixo temos um exemplo de execução */
// const students = [
//   {
//     name: 'Lee',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.6 },
//     ],
//   },
//   {
//     name: 'Clementine',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
// ];
// setApproved(students);
/*
Saída:
A pessoa com nome Clementine foi aprovada!
matemática: B
história: A
*/ 
