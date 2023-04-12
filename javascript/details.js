var URL = "https://pokeapi.co/api/v2/pokemon/";


async function getDetails() {
    var params = window.location.search;

    var url = new URLSearchParams(params);

    var id = url.get("id");

    var pokemonDetails = await getPokemonDetails(id);

    var pokemonChain = await getChain(pokemonDetails.species.url);

    viewPokemon(pokemonDetails);

    await createChain(pokemonDetails, pokemonChain);
}

async function getPokemonDetails(id) {
    var request = await fetch(URL + id);
    var data = await request.json();

    return data;
}

async function getSpecies(url) {

}

async function getChain(url) {
    var request1 = await fetch(url);
    var data1 = await request1.json();

    var urlChain = data1.evolution_chain.url;

    var request2 = await fetch(urlChain);
    var data2 = await request2.json();

    return data2;
}

function viewPokemon(poke) {
    var img = document.getElementsByTagName("img")[0];
    img.src = poke.sprites.front_default;
    /*img.src = poke.sprites.front_shiny;*/
    /*img.src = poke.sprites.other["official-artwork"].front_default;*/
    /*img.src = poke.sprites.other.home.front_default;*/
    img.alt = poke.name;

    var defaultBtn = document.getElementById("default-btn");
    var shinyBtn = document.getElementById("shiny-btn");

    defaultBtn.addEventListener("click", function () {
        img.src = poke.sprites.front_default;
    });

    shinyBtn.addEventListener("click", function () {
        img.src = poke.sprites.front_shiny;
    });

    var pid = document.getElementsByClassName("id")[0];
    pid.innerHTML = `#${id0Izqda(poke)}`;

    var name = document.getElementsByClassName("name")[0];
    name.innerHTML = `${poke.name}`;

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

async function createChain(pokemon, pokemonChain) {
    var chain = pokemonChain.chain;

    var haveEvol = chain.evolves_to.length != 0;

    var evolves = document.getElementById("evolves");

    /*console.log(chain);*/

    if (haveEvol) {
        await viewEvolves(chain, pokemon);
    }

    while (haveEvol) {
        if (chain.evolves_to.length == 0) {
            haveEvol = false;
        }
        if (chain.evolves_to.length != 0) {
            for (let i = 0; i < chain.evolves_to.length; i++) {
                if (chain.species.name == "tyrogue") {
                    evolves.innerHTML = "";
                }
                else {
                    await viewEvolves(chain.evolves_to[i], pokemon);
                }
            }
        }
        chain = chain.evolves_to[0];
    }

    var number = evolves.querySelectorAll("a").length;

    if (number == 1) {
        evolves.innerHTML = "";
    }
}

async function viewEvolves(chain, pokemon) {
    var pokemonId = chain.species.url.split('/')[6];

    if (pokemonId <= 151) {

        var poke = await getPokemonDetails(pokemonId);

        var evolves = document.getElementById("evolves");

        var div1 = document.createElement("div");
        div1.classList.add("pokemon");

        var a = document.createElement("a");
        a.classList.add("link");
        a.setAttribute("href", `../html/details.html?id=${poke.id}`);

        var div2 = document.createElement("div");
        div2.classList.add("image");

        var img = document.createElement("img");
        img.src = poke.sprites.front_default;
        /*img.src = poke.sprites.front_shiny;*/
        /*img.src = poke.sprites.other["official-artwork"].front_default;*/
        /*img.src = poke.sprites.other.home.front_default;*/
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
        div4.classList.add("container1");

        var p1 = document.createElement("p");
        p1.classList.add("id");
        p1.innerHTML = `#${id0Izqda(poke)}`;

        var h2 = document.createElement("h2");
        h2.classList.add("name");
        h2.innerHTML = `${poke.name}`;

        if (poke.name == pokemon.name) {
            h2.style.borderRadius = "10px";
            h2.style.paddingBottom = "5px";
            h2.style.paddingTop = "5px";
            h2.style.paddingLeft = "10px";
            h2.style.paddingRight = "10px";
            h2.style.boxShadow = "0 0 15px 0px var(--primary)";
            h2.style.background = "var(--backgroundpokemon)";
        }
        
        var div5 = document.createElement("div");
        div5.classList.add("types");

        var div6 = document.createElement("div");
        div6.classList.add("trigger");

        evolves.appendChild(div1);
        div1.appendChild(a);
        a.appendChild(div2);
        div2.appendChild(img);
        a.appendChild(div3);
        div3.appendChild(div4);
        div4.appendChild(p1);
        div4.appendChild(h2);
        div3.appendChild(div5);
        getTypes(poke);
        div3.appendChild(div6);

        div6.innerHTML = checkEvolve(chain);
    }
}

function checkEvolve(chain) {
    var innerTrigger;

    var species = getSpecies();

    if (chain.evolves_to.length == 0) {
        if (chain.evolution_details[0].trigger.name == "level-up") {
            innerTrigger = `Subir a nivel ${chain.evolution_details[0].min_level}`;
        }
        else if (chain.evolution_details[0].trigger.name == "use-item") {
            if (chain.evolution_details[0].item.name == "leaf-stone") {
                innerTrigger = `Usar Piedra Hoja`;
            }
            else if (chain.evolution_details[0].item.name == "water-stone") {
                innerTrigger = `Usar Piedra Agua`;
            }
            else if (chain.evolution_details[0].item.name == "fire-stone") {
                innerTrigger = `Usar Piedra Fuego`;
            }
            else if (chain.evolution_details[0].item.name == "thunder-stone") {
                innerTrigger = `Usar Piedra Trueno`;
            }
            else if (chain.evolution_details[0].item.name == "moon-stone") {
                innerTrigger = `Usar Piedra Lunar`;
            }
        }
        else if (chain.evolution_details[0].trigger.name == "trade") {
            innerTrigger = `Intercambio`;
        }
    }
    else if (chain.evolves_to.length != 0 && chain.evolution_details.length != 0) {
        if (chain.evolves_to[0].evolution_details[0].trigger.name == "level-up" || chain.evolution_details[0].trigger.name == "level-up") {
            if (chain.evolution_details[0].min_happiness == null && chain.evolution_details[0].held_item == null && chain.evolution_details[0].known_move == null) {
                innerTrigger = `Subir a nivel ${chain.evolution_details[0].min_level}`;
            }
            else {
                innerTrigger = "";
            }
        }
        else if (chain.evolution_details[0].trigger.name == "use-item") {
            if (chain.evolution_details[0].item.name == "leaf-stone") {
                innerTrigger = `Usar Piedra Hoja`;
            }
            else if (chain.evolution_details[0].item.name == "water-stone") {
                innerTrigger = `Usar Piedra Agua`;
            }
            else if (chain.evolution_details[0].item.name == "fire-stone") {
                innerTrigger = `Usar Piedra Fuego`;
            }
            else if (chain.evolution_details[0].item.name == "thunder-stone") {
                innerTrigger = `Usar Piedra Trueno`;
            }
            else if (chain.evolution_details[0].item.name == "moon-stone") {
                innerTrigger = `Usar Piedra Lunar`;
            }
        }
        else if (chain.evolution_details[0].trigger.name == "trade") {
            innerTrigger = `Intercambio`;
        }
    }
    else {
        innerTrigger = "";
    }

    return innerTrigger;
}

pokemonImages();

function pokemonImages() {
  random = Math.round(Math.random() * (8 - 0));

  var randomDefault = document.createElement("img");
  var randomShiny = document.createElement("img");
  randomDefault.src = `../images/FotosRandom/Default/${[random]}.png`;
  randomShiny.src = `../images/FotosRandom/Shiny/${[random]}.png`;
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