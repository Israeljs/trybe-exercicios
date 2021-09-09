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
  
  // 2. Encontre todas as cidades do estado de Tocantins (TO)
  console.log('As cidades do estado de Tocantins são: ');
  
  const citiesTO = cities.filter((city) => {
    return city.state === 'TO';
  });
  
  console.log(citiesTO)
  
  const citiesNames = [
    'Manaus',
    'Belém',
    'Porto Nacional',
    'Nepomuceno',
    'Cachoeira',
    'Curitiba',
    'Hortolândia',
    'Touros',
    'Jericoacoara',
    'Três Pedras',
    'João Pinheiro'
  ];
  
  const citiesEndingWithA = citiesNames.filter((name, index) => name.endsWith('a') && index < 5);
  
  // console.log(citiesEndingWithA);