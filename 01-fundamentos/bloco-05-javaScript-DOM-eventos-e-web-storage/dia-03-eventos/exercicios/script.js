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
    const listaDias = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i++) {
        const element = dezDaysList[i];
        const lis = document.createElement('li');

        lis.classList.add('day');
        lis.innerText = element;
        listaDias.appendChild(lis);
         console.log(lis);
  
      if (element === 24 || element === 25 || element === 31) {
          lis.classList.add('holiday');
      }; 
      if (element === 4 || element === 11 || element === 18 || element === 25) {
          lis.classList.add('friday');
      };
 
    };
  };

  function feriados(feriados) {
      const div = document.querySelector('.buttons-container');
      const butao = document.createElement('button');

      butao.innerText = feriados;
      butao.id = "btn-holiday";
      div.appendChild(butao);
  };
  
  let click = 0;
  function searchHollyday() {
    const holidays = document.querySelectorAll('.holiday');
    click += 1;
    
    for (const value of holidays) {
      if (click % 2 === 1) {
        value.style.color = "#666";
      } else {
        value.style.color = "green";
      }
    }
    // for (let i = 0; i < holidays.length; i++) {
    //   holidays[i].style.color = 'green';
      
    // }
  };
  

  createDaysOfTheWeek();
  createDays();
  feriados('Feriados');
  const bt = document.querySelector("#btn-holiday");
  bt.addEventListener('click', searchHollyday);

//   p {
//     display: block;
//     margin-block-start: 1em;
//     margin-block-end: 1em;
//     margin-inline-start: 0px;
//     margin-inline-end: 0px;
// }
// div {
//   display: block;
// }