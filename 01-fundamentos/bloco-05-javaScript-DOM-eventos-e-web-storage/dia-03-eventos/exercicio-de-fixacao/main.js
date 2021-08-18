const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function changeTech(event) {
  const element = document.querySelector('.tech');
  element.classList.remove('tech');
  let bgc = event.target.style.backgroundColor;
  input.value = bgc;
  event.target.classList.add('tech');
  event.target.style.backgroundColor = 'yellow';
  //input.value = '';
}

firstLi.addEventListener('click', changeTech);
secondLi.addEventListener('click', changeTech);
thirdLi.addEventListener('click', changeTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
  let element = document.querySelector('.tech');
  element.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
});

function resetText() {
    console.log("funfou")
    firstLi.innerText = 'Opção reiniciada';
  // O Event é passado como um parâmetro para a função.
  //   event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
function chengeColor() {
    thirdLi.style.backgroundColor = 'green';
}

firstLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('mouseover', chengeColor);
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.