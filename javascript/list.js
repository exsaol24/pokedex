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

var images = new Array();
images[0] = new Image();
images[0].src = '../images/PokeBallRandom/cherish-ball.png';
images[1] = new Image();
images[1].src = '../images/PokeBallRandom/dive-ball.png';
images[2] = new Image();
images[2].src = '../images/PokeBallRandom/dusk-ball.png';
images[3] = new Image();
images[3].src = '../images/PokeBallRandom/great-ball.png';
images[4] = new Image();
images[4].src = '../images/PokeBallRandom/heal-ball.png';
images[5] = new Image();
images[5].src = '../images/PokeBallRandom/luxury-ball.png';
images[6] = new Image();
images[6].src = '../images/PokeBallRandom/master-ball.png';
images[7] = new Image();
images[7].src = '../images/PokeBallRandom/nest-ball.png';
images[8] = new Image();
images[8].src = '../images/PokeBallRandom/net-ball.png';
images[9] = new Image();
images[9].src = '../images/PokeBallRandom/poke-ball.png';
images[10] = new Image();
images[10].src = '../images/PokeBallRandom/premier-ball.png';
images[11] = new Image();
images[11].src = '../images/PokeBallRandom/quick-ball.png';
images[12] = new Image();
images[12].src = '../images/PokeBallRandom/repeat-ball.png';
images[13] = new Image();
images[13].src = '../images/PokeBallRandom/safari-ball.png';
images[14] = new Image();
images[14].src = '../images/PokeBallRandom/timer-ball.png';
images[15] = new Image();
images[15].src = '../images/PokeBallRandom/ultra-ball.png';

random = Math.round(Math.random()*(15 - 0));

var randomImage = images[random];
randomImage.setAttribute("id", "buscador-imagen");
randomImage.setAttribute("alt", "Foto Buscador");

console.log(random);

var barra = document.getElementsByClassName("barra")[0];
barra.appendChild(randomImage);