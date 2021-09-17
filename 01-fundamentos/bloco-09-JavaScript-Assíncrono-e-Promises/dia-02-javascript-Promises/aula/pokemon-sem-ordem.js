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
    fetch(`https://pokeassaspi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((pokemon) => appendPokemon(pokemon))
      .catch(() => console.log('Deu erro'))
  };
  
  window.onload = () => {
    requestPokemon('pikachu');
    requestPokemon('charizard');
    requestPokemon('ditto');
    requestPokemon('blastoise');
    requestPokemon('psyduck');
  
  
    console.log('deivid')
  }
  