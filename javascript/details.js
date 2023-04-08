var URL = "https://pokeapi.co/api/v2/pokemon/";
var URL2 =  "https://pokeapi.co/api/v2/evolution-chain/";

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
    viewEvolves(data);
    var request2 = await fetch(URL2 + id);
    var data2 = await request2.json();
    console.log(data2);
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

function viewEvolves(poke) {
    var evolves = document.getElementById("evolves");

    var div1 = document.createElement("div");
    div1.classList.add("pokemon");

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
    div4.classList.add("container1");

    var p = document.createElement("p");
    p.classList.add("id");
    p.innerHTML = `#${id0Izqda(poke)}`;

    var h2 = document.createElement("h2");
    h2.classList.add("name");
    h2.innerHTML = `${poke.name}`;

    var div5 = document.createElement("div");
    div5.classList.add("types");

    var div6 = document.createElement("div");

    evolves.appendChild(div1);
    div1.appendChild(a);
    a.appendChild(div2);
    div2.appendChild(img);
    a.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(p);
    div4.appendChild(h2);
    div3.appendChild(div5);
    getTypes(poke);
    div3.appendChild(div6);
/*
    if (poke.chain.evolves_to[0].evolution_details[0].trigger.name == "level-up") {
        if (poke.chain.evolves_to[0].evolution_details[0].min_level != null) {
            div6.innerHTML = `HOLA ${poke.chain..evolves_to[0].evolution_details[0].min_level}`;
        }
    }
*/
}
/*
function checkEvolves(poke) {
    if (poke.chain.evolves_to[evolves_to[evolution_details]].min_level != null) {
        
    }
}*/