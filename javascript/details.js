var URL = "https://pokeapi.co/api/v2/pokemon/";

function getDetails() {
    var params = window.location.search;

    var url = new URLSearchParams(params);

    var id = url.get("id");

    getPokemonDetails(id);
}

async function getPokemonDetails(id) {
    var request = await fetch(URL + id);
    var data = await request.json();
    await viewPokemon(data);
}

function viewPokemon(poke) {
    var img = document.getElementsByTagName("img")[0];
    img.src = poke.sprites.front_default;
    /*img.src = poke.sprites.other["official-artwork"].front_default;*/
    /*img.src = poke.sprites.other.home.front_default;*/
    img.alt = poke.name;

    var pid = document.getElementsByClassName("id")[0];
    pid.innerHTML = `#${id0Izqda(poke)}`;

    var name = document.getElementsByClassName("name")[0];
    name.innerHTML = `${poke.name}`;

    var types = document.getElementsByClassName("types")[0];
    getTypes(poke);

    var pweight = document.getElementsByClassName("weight")[0];
    pweight.innerHTML = `Peso: ${poke.weight / 10}kg`;

    var pheight = document.getElementsByClassName("height")[0];
    pheight.innerHTML = `Altura: ${poke.height / 10}m`;
    
    getStats(poke);
}

function getStats(poke) {
    var stats = document.getElementsByClassName("stat2");
    var progress = document.getElementsByTagName("progress");;

    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i];

        stat.innerHTML = poke.stats[i].base_stat;
        progress[i].value = poke.stats[i].base_stat;
    }
}