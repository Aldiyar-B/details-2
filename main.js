// Fetch await CSS Color Names

async function getColorNames() {
  const url = 'https://api.sampleapis.com/csscolornames/colors';
  const response = await fetch(url);
  const json = await response.json();
  const green = json.find(item => item.name === 'green');
  console.log(green);
}

getColorNames();

// Fetch .then Beersy

function getBeers() {
  const url = 'https://api.sampleapis.com/beers/ale';
  fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))
}


getBeers()
