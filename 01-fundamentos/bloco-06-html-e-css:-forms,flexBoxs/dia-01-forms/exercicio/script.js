window.onload = function() {
  const select = document.querySelector("#estado");
  const estados = ['','Acre','Alagoas','Amazonas','Amapá','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás',
  'Maranhão','Minas Gerais','Mato Grosso do Sul','Mato Grosso','Pará','Paraíba','Pernambuco','Piauí','Paraná','Rio de Janeiro',
  'Rio Grande do Norte','Rondônia','Roraima','Rio Grande do Sul','Santa Catarina','Sergipe','São Paulo','Tocantins'];

  function loadOptions(arr) {
    for (let i = 0; i < arr.length; i++) {
      const option = document.createElement('option');
      option.value = [arr[i]];
      option.innerText = [arr[i]];
      select.appendChild(option);
    }
  }
  loadOptions(estados);
}