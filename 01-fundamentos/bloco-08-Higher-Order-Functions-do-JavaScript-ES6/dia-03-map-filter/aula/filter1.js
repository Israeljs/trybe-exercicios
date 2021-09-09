
const cities = [
    { state: 'AM', name: 'Manaus', region: 'N'},
    { state: 'PA', name: 'Belém', region: 'N'},
    { state: 'TO', name: 'Porto Nacional', region: 'N'},
    { state: 'MG', name: 'Nepomuceno', region: 'SE'},
    { state: 'BA', name: 'Cachoeira', region: 'NE'},
    { state: 'PR', name: 'Curitiba', region: 'S'},
    { state: 'SP', name: 'Hortolândia', region: 'SE'},
    { state: 'RN', name: 'Touros', region: 'NE'},
    { state: 'CE', name: 'Jericoacoara', region: 'NE'},
    { state: 'TO', name: 'Três Pedras', region: 'N'},
    { state: 'MG', name: 'João Pinheiro', region: 'SE'}
  ];
  
  // 1. Encontre todas as cidades da região Nordeste (NE)
  console.log('As cidades que ficam na região Nordeste são: ');
  
  // const citiesNE = [];
  
  // for(let index = 0; index < cities.length; index += 1){
  //   const city = cities[index];
    
  //   if(city.region === 'NE'){
  //     citiesNE.push(city);
  //   }
  // }
  
  // console.log(citiesNE)
  const citiesNE = cities.filter((city) => city.region === 'NE');
  
  console.log(citiesNE)