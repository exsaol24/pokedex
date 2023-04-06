var pokemonList = document.getElementById("all-pokemon");
var URL = "https://pokeapi.co/api/v2/pokemon/";

/*function getTypes() {
    var params = window.location.search;

    var url = new URLSearchParams(params);

    

    console.log(url);
}

async function getPokemonDetails(poke) {
    var tipos = document.getElementsByClassName("type");

    getTypes();

    for (var i = 0; i <= tipos.length; i++) {
        var div1 = document.createElement("div")
        div1.classList.add("types");
        
    }
}

function viewPokemon(poke) {
    var tipos = poke.types.map(types => `<p class="type ${types.type.name}">${types.type.name}</p>`);
    tipos = tipos.join('');

    var div1 = document.createElement("div");
    div1.classList.add("pokemon");

    var div2 = document.createElement("div");
    div2.classList.add("image");

    var img = document.createElement("img");
    img.src = poke.sprites.front_default;
    /*img.src = poke.sprites.other["official-artwork"].front_default;*/
    /*img.src = poke.sprites.other.home.front_default;*//*
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
    div5.innerHTML = `${tipos}`;

    pokemonList.appendChild(div1);
    div1.appendChild(a);
    a.appendChild(div2);
    div2.appendChild(img);
    a.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(p);
    div4.appendChild(h2);

    div3.appendChild(div5) /* Añadir tipos *//*
}

/*
    <div class="pokemon">
        <div class="image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu">
        </div>
        <div class="info">
            <div class="container">
                <p class="id">#025</p>
                <h2 class="name">Pikachu</h2>
            </div>
            <div class="types">
                <p class="type electric">Eléctrico</p>
            </div>
            <hr>
            <div class="container">
                <p class="weight">Peso: 0.6kg</p>
                <p class="height">Altura: 0.4m</p>
            </div>
            <hr>
            <div class="stats">
                <div class="ps">
                    <p>Vida: 35</p>
                </div>
                <div class="atack">
                    <p>Ataque: 55</p>
                </div>
                <div class="defense">
                    <p>Defensa: 40</p>
                </div>
                <div class="special-attack">
                    <p>Ataque especial: 50</p>
                </div>
                <div class="special-defense">
                    <p>Defensa especial: 50</p>
                </div>
                <div class="speed">
                    <p>Velocidad: 90</p>
                </div>
            </div>
        </div>
    </div>
*/