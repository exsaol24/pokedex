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
    /*a.setAttribute("target", "blank");*/
    a.setAttribute("href", `../html/details.html?id=${poke.id}`);

    var div2 = document.createElement("div");
    div2.classList.add("image");

    var img = document.createElement("img");
    img.src = poke.sprites.front_default;
    /*img.src = poke.sprites.front_shiny;*/
    /*img.src = poke.sprites.other["official-artwork"].front_default;*/
    /*img.src = poke.sprites.other.home.front_default;*/
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