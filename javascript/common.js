var pokemonList = document.getElementById("all-pokemon");
var URL = "https://pokeapi.co/api/v2/pokemon/";

var tipoPokemon = {
    normal: "Normal",
    fire: "Fuego",
    water: "Agua",
    grass: "Planta",
    electric: "Eléctrico",
    ice: "Hielo",
    fighting: "Lucha",
    poison: "Veneno",
    ground: "Tierra",
    flying: "Volador",
    psychic: "Psíquico",
    bug: "Bicho",
    rock: "Roca",
    ghost: "Fantasma",
    dark: "Siniestro",
    dragon: "Dragón",
    steel: "Acero",
    fairy: "Hada",
};

function getTypes(poke) {
    var types = document.getElementsByClassName("types");

    for (var i = 0; i < poke.types.length; i++) {
        var type = document.createElement("div");
        type.classList.add("type");

        type.innerHTML = tipoPokemon[poke.types[i].type.name];
        type.style.backgroundColor = `var(--${poke.types[i].type.name})`;
        type.style.color = `white`;

        types[types.length - 1].appendChild(type);
    }
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

var pokeball = document.getElementById('pokeball');
var panel = document.getElementById('panel');
var btnJolteon = document.getElementById('btn-light');
var btnUmbreon = document.getElementById('btn-dark');
var containerPokeball = document.getElementById('pokeball');

pokeball.addEventListener('click', () => {
    panel.classList.toggle('active');
})

var preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

var setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

btnUmbreon.addEventListener('click', () => {
    setTheme('dark');
});

btnJolteon.addEventListener('click', () => {
    setTheme('light');
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);