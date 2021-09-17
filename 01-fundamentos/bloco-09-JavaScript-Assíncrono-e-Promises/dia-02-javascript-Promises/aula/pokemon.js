const appendPokemon = (pokemon) => {
    const ol = document.querySelector('ol');
    const li = document.createElement('li');
  
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
  
    const p = document.createElement('p');
    p.innerHTML = pokemon.name;
    
    li.appendChild(img);
    li.appendChild(p);
  
    ol.appendChild(li);
  };
  
  
  const requestPokemon = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((pokemon) => appendPokemon(pokemon))
  
  };
  
  async function requestPokemonAsync(pokemonName){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const pokemon = await response.json();
  
      console.log(pokemon)
  
      appendPokemon(pokemon);
    } catch(error){
      console.log(error);
      console.log(pokemonName)
    }
  }
  
  const requestPokemonsAsync = async () => {
    try {
      await requestPokemonAsync('pikachu');
      await requestPokemonAsync('charizard');
      await requestPokemonAsync('fearow');
      await requestPokemonAsync('meowth');
      await requestPokemonAsync('lucario');
      await requestPokemonAsync('hypno');
    } catch(error){
      console.log('Erro na função async')
    }
  }
  
  function requestPokemons(){
    requestPokemon('pikachu')
      .then(() => requestPokemon('charizard'))
      .then(() => requestPokemon('fearow'))
      .then(() => requestPokemon('meowth'))
      .then(() => requestPokemon('lucario'))
      .then(() => requestPokemon('hypno'))
      .catch(() => console.log('Erro nas requisições'))
  }
  
  window.onload = () => {
    requestPokemonsAsync();
    console.log('bruno')
  }
