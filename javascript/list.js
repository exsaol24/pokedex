var pokemonList = document.getElementById("all-pokemon");
var URL = "https://pokeapi.co/api/v2/pokemon/";

var arrayPokemon = [];

async function getPokemon() {
  for (var i = 1; i <= 151; i++) {
    var request = await fetch(URL + i);
    var data = await request.json();
    await arrayPokemon.push(data);
    await viewPokemon(data);
  }
}

function viewPokemon(poke) {

  var div1 = document.createElement("div");
  div1.classList.add("pokemon");
  div1.classList.add("light-mode");

  var a = document.createElement("a");
  a.classList.add("link");
  a.setAttribute("href", `../html/details.html?id=${poke.id}`);

  var div2 = document.createElement("div");
  div2.classList.add("image");

  var img = document.createElement("img");
  img.src = poke.sprites.front_default;
  /*img.src = poke.sprites.front_shiny;*/
  /*img.src = poke.sprites.other["official-artwork"].front_default;*/
  /*img.src = poke.sprites.other.home.front_default*/
  img.alt = poke.name;

  var defaultBtn = document.getElementById("default-btn");
  var shinyBtn = document.getElementById("shiny-btn");

  defaultBtn.addEventListener("click", function () {
    img.src = poke.sprites.front_default;
  });

  shinyBtn.addEventListener("click", function () {
    img.src = poke.sprites.front_shiny;
  });

  var div3 = document.createElement("div");
  div3.classList.add("info");

  var div4 = document.createElement("div");
  div4.classList.add("container");

  var p = document.createElement("p");
  p.classList.add("id");
  p.innerHTML = `#${id0Izqda(poke)}`;

  var h2 = document.createElement("h2");
  h2.classList.add("name");
  h2.innerHTML = `${poke.name}`;

  var div5 = document.createElement("div");
  div5.classList.add("types");

  pokemonList.appendChild(div1);
  div1.appendChild(a);
  a.appendChild(div2);
  div2.appendChild(img);
  a.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(p);
  div4.appendChild(h2);
  div3.appendChild(div5);
  getTypes(poke);
}

var searchInput = document.getElementById('search-input');

function searchPokemon(search) {
  pokemonList.innerHTML = ''; // Vaciar la lista de Pokemons
  const filteredPokemon = arrayPokemon.filter((pokemon) => {
    var name = pokemon.name.toLowerCase();
    var term = search.toLowerCase();
    return name.includes(term);
  });

  filteredPokemon.forEach((pokemon) => {
    viewPokemon(pokemon);
  });
}


searchInput.addEventListener('input', () => {
  var search = searchInput.value;
  searchPokemon(search);
});

randomPokeball();

function randomPokeball() {
  random = Math.round(Math.random() * (15 - 0));

  var randomImage = document.createElement("img");
  randomImage.src = `images/PokeballRandom/${[random]}.png`;
  randomImage.setAttribute("id", "buscador-imagen");
  randomImage.setAttribute("alt", "Foto Buscador");

  var barra = document.getElementsByClassName("barra")[0];
  barra.appendChild(randomImage);
}

pokemonImages();

function pokemonImages() {
  random = Math.round(Math.random() * (8 - 0));

  var randomDefault = document.createElement("img");
  var randomShiny = document.createElement("img");
  randomDefault.src = `images/FotosRandom/Default/${[random]}.png`;
  randomShiny.src = `images/FotosRandom/Shiny/${[random]}.png`;
  randomDefault.classList.add("default");
  randomDefault.setAttribute("id", "default-btn");
  randomDefault.setAttribute("alt", "Modo Normal");
  randomShiny.classList.add("shiny");
  randomShiny.setAttribute("id", "shiny-btn");
  randomShiny.setAttribute("alt", "Modo Shiny");

  var shinyPanel = document.getElementById("shinyPanel");
  shinyPanel.appendChild(randomDefault);
  shinyPanel.appendChild(randomShiny);
}