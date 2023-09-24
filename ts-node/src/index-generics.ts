import { getPokemon } from "./generics/get-pokemon";

//Esto se usó para la prueba inicia
//console.log(getPokemon())

// para la prueba ya implementanco async
getPokemon(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.error (error))
    .finally(() => console.log('Fin de getPokemon'))