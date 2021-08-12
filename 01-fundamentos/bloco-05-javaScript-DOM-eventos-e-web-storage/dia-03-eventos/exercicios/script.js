function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const listaDias = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i++) {
        const element = dezDaysList[i];
        const li = document.createElement('li');

        li.innerHTML = element;
        listaDias.appendChild(li);
        
        li.className = 'day';
        // console.log(li);
  
      if (element === 24 || element === 25 || element === 31) {
          li.className = 'day holiday';
      }; 
      if (element === 4 || element === 11 || element === 18 || element === 25) {
          li.className = 'day friday';
      };
 
    };
  };

  function feriados(feriados) {
      const div = document.querySelector('.buttons-container');
      const butao = document.createElement('buttom');

      butao.innerText = feriados;
      butao.id = "btn-holiday";
      div.appendChild(butao);
  }

  createDaysOfTheWeek();
  createDays();
  feriados('Feriados');


