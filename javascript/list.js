const pokemonList = document.querySelector("#pokemon-list");
const URL = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon() {
    for (var i = 1; i <= 151; i++) {
        var request = await fetch(URL + i);
        var data = await request.json();
        await viewPokemon(data);
    }
}

function viewPokemon(poke) {
    var tipos = poke.types.map(type => `<p class="type ${type.type.name}">${type.type.name}</p>`);
    tipos = tipos.join('');

    var div1 = document.createElement("div");
    div1.classList.add("pokemon");

    /*
    var a = document.createElement("a");
    a.classList.add("enlace");

    var div2 = document.createElement("div");
    div2.classList.add("image");

    var img = document.createElement("img");
    img.setAttribute("src", "poke.sprites.front_default");
    img.setAttribute("alt", "poke.name");
    
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
    div5.innerHTML = `${tipos}`;
    */

    div1.innerHTML = `
            <a class="enlace" href="html/details.html">
                <div class="image">
                    <img src="${poke.sprites.front_default}" alt="${poke.name}">
                </div>
                <div class="info">
                    <div class="container">
                        <p class="id">#${id0Izqda(poke)}</p>
                        <h2 class="name">${poke.name}</h2>
                    </div>
                    <div class="types">
                        ${tipos}
                    </div>
                </div>
            </a>
            `;

    pokemonList.appendChild(div1);
    /*div1.appendChild(a);
    a.appendChild(div2);
    div2.appendChild(img);
    a.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(p);
    div4.appendChild(h2);
    div3.appendChild(div5)*/
}

function id0Izqda(poke) {
    var pokeId = poke.id.toString();
    if (pokeId.length == 1) {
        pokeId = "00" + pokeId;
    }
    else if (pokeId.length == 2) {
        pokeId = "0" + pokeId;
    }

    return pokeId;
}