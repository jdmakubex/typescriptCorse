import axios from 'axios';
import { Pokemon } from '../interfaces';


// El async hace que la función devuelva una promesa,m por lo tanto la función
// se vuelve generica, es decir que regresará acorde al tipo de dato que retorne
// la función, async es propia de javascript, no de typescript
export const getPokemon = async(pokemonId: number): Promise<Pokemon> => {
    /*
    //Esto se usó para las primeras pruebas
    console.log('Hola mundo')
    if (true) throw new Error('Auxilio!!')
    return 1;
    */

    // Dentro de una promesa podemos usar la palabra recerbada await
    // Que hace que se espere a que termine la ejecución de la petición
    // Luego continúa el scope del programa
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
    //console.log(resp.data.name)
    return data;
}