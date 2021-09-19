
// apiScript.js     

// async function getJoke(){
  
//       const response = await fetch(API_URL)
//       const joke = await response.json();
  
//       console.log(joke)
//   }

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke();
// npm install node-fetch@^2
// window.onload = () => {
//     requestPokemonsAsync();
//     console.log('bruno')
//   }

