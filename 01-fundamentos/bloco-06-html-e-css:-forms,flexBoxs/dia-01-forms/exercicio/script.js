window.onload = function() {
  loadOptions();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields)

}

function loadOptions() {
  const select = document.querySelector("#estado");
  const estados = ['','Acre','Alagoas','Amazonas','Amapá','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás',
  'Maranhão','Minas Gerais','Mato Grosso do Sul','Mato Grosso','Pará','Paraíba','Pernambuco','Piauí','Paraná','Rio de Janeiro',
  'Rio Grande do Norte','Rondônia','Roraima','Rio Grande do Sul','Santa Catarina','Sergipe','São Paulo','Tocantins'];

  for (let i = 0; i < estados.length; i++) {
    const option = document.createElement('option');
    option.value = [estados[i]];
    option.innerText = [estados[i]];
    select.appendChild(option);
  }
}


function validateDate() {
  const date = document.getElementById('data-inicio').innerText;

  console.log(date)
}
validateDate()