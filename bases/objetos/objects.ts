/*
¿Qué veremos en esta sección?


Aprenderemos a utilizar los objetos en TypeScript, su uso y mantener nuestro código bien limpio mediante tipos personalizados.

Los temas serán:

Objetos básicos
Crear objetos con tipos específicos
Crear métodos dentro de objetos
Tipos personalizados
Crear variables que soporten varios tipos a la vez.
Comprobar el tipo de un objeto.
Al final, el respectivo examen práctico y teórico.
 */

(() => {
    /**
     * Esta es la forma en que se declara un objeto en javascript
     * los dos puntos indica el tipo de dato
     * las llaves hacen referencia que el tipo de datos es "objeto"
     */

    // para hacer opcional la edad, le ponemos un signo de interrogación
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    // flash  = {
    //     name: 'Clarck Kent',
    //     //age: 60,
    //     powers: ['Super Fuerza'],
    //     getName(){
    //         return this.name;
    //     }
    // }

    // console.log( flash.getName() )

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad']
    }

    console.log(flash)

})()