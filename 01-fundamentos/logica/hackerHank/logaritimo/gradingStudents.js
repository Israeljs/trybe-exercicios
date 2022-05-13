function gradingStudents(grades) {
  const results = grades.map((grade) => {
    if (grade >= 38) {
      if (grade % 5 >= 3) {
        const diference = 5 - (grade % 5);
        return grade + diference;
      }
    }
    return grade ;
  });
return results;
}

console.log(gradingStudents([73, 67, 38, 33]));
