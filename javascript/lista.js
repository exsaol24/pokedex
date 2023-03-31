const pokemonList = document.querySelector("#pokemon-list");
var URL = "https://pokeapi.co/api/v2/pokemon/";

for (var i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(datos => verPokemon(datos))
}


function verPokemon(poke) {
    var tipos = poke.types.map(type => `<p class="type ${type.type.name}">${type.type.name}</p>`);
    tipos = tipos.join('');

    var pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    }
    else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
            <div class="image">
                <img src="${poke.sprites.front_default}" alt="${poke.name}">
            </div>
            <div class="info">
                <div class="types">
                    ${tipos}
                </div>
                <div class="container">
                    <p class="id">#${poke.id}</p>
                    <h2 class="name">${poke.name}</h2>
                </div>
                
            </div>
            `;
    pokemonList.append(div);
}

/*
    <div class="pokemon">
        <div class="image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu">
        </div>
        <div class="info">
            <div class="container">
                <p class="id">#025</p>
                <h2 class="name">Pikachu</h2>
            </div>
            <div class="types">
                <p class="type electric">Eléctrico</p>
                <p class="type dragon">Eléctrico</p>
            </div>
        </div>
    </div>
*/