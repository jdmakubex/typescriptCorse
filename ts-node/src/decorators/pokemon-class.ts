
function printToConsole( constructor: Function ){
    console.log(constructor)
}

// También se puede hacer con funciones de flecha
const printToConsoleConditional = (print: boolean = false): Function => {
    if (print){
        return printToConsole;
    }else{
        return()=>{}
    }
}

/**Decoradores de bloqueo */
//Esta función previene la expanción de atributos en objetos
const bloquearPrototipo = function(constructor: Function){
    //Seal previene que se añadan nuevas propiedades al objeto
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

/**Ahora este es un ejemplo de factory decorator, 
 * sirve para implemtarse como decoradores de métodos.
 * Un factory Decorator es una función que retorna otra función.
 */

function CheckValidPokemonId (){
    return function( target: any, propertyKey: string, descriptor:PropertyDescriptor ){
        //console.log({target,propertyKey,descriptor});
        
        //Esto se hizo para retornar el is, despues si está dentro del rago permitido
        const originalMethod = descriptor.value;
        
        descriptor.value = (id:number) => {
            if(id<0 || id >800 ){
                return console.error('El id del pokemon debe ser entre 1 y 800')
            }else{
                return originalMethod(id)
            }
        }
    }
}

/**
 * Si quisiera usar la función: printToConsole como un decorador
 * Lo haría de la siguiente forma:
 */

//Este es un decorador Ejemplo 1
//@printToConsole

//Ejemplo2
@bloquearPrototipo //Solo se añade el decorador, se puede anidar tantos decoradores como desees.
@printToConsoleConditional(true)
export class Pokemon{

    public  publicApi: string = 'https://pokeapi.co'
    
    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB (id:number){
        console.log(`Pokemon guardado en la BD ${id}`)

    }
}

/**
 * Si marca error, ir al tsconfig.json y descomentar: 
 * "experimentalDecorators": true,
 * Buscar un atributo antes y poner una coma, para que sea 
 * un json valido 
 */

