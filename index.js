// This function loads pokemon data from the Pokemon API
function fetchPokemonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const pokemonId = 1;
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(chucknorris) {
        console.log('data decoded from JSON:', chucknorris);
  
        // Build a block of HTML
        const chucknorrisHtml = `
          <p><strong>${chucknorris.value}</strong></p>
          <img src="${chucknorris.icon_url}" />
        `;
        document.querySelector('#chuck-norris').innerHTML = chucknorrisHtml;
      });
  }
  
  fetchPokemonJSON();