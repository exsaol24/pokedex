var pokemonList = document.getElementById("all-pokemon");
var URL = "https://pokeapi.co/api/v2/pokemon/";

var tipoPokemmon = {
    normal: 'Normal',
    fire: 'Fuego',
    water: 'Water',
    grass: 'Planta',
    electric: 'Eléctrico',
    ice: 'Hielo',
    fighting: 'Lucha',
    poison: 'Veneno',
    ground: 'Tierra',
    flying: 'Volador',
    psychic: 'Psíquico',
    bug: 'Bicho',
    rock: 'Roca',
    ghost: 'Fantasma',
    dark: 'Siniestro',
    dragon: 'Dragón',
    steel: 'Acero',
    fairy: 'Hada',
};

/*function translateToSpanish(textToTranslate) {
    const translatedText = [];

    const words = textToTranslate.split(' ');

    for (var i = 0; i < words.length; i++) {
        const word = words[i];
        if (tipoPokemmon[word]) {
            translatedText.push(tipoPokemmon[word]);
        } else {
            translatedText.push(word);
        }
    }

    return translatedText.join(' ');
}*/