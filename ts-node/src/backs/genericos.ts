//import { Hero } from './classes/Hero';
import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';

// De esta forma agrupamos la importación de interfaces en una sola linea
// Tuvimos que crearun index.ts en la carpeta de interfaces
import { Villain, Hero } from '../interfaces';

/**
// Si hacemos estra prueba, veremos en la consola que se visualiza cada dato si problemas
printObject(123);
printObject(new Date());
printObject( {a:1,b:2,c:3,d:4});
printObject([1,2,3,4,5,6,7,8,9]);
printObject('Hola Mundo');
 */


//Con estos ejemplos podemos usar con varios tipos de datos la misma función
// const name:string = 'Juan';
// console.log( genericFunction(3.1416).toFixed(2) )
// console.log( genericFunction(new Date()).getDate() )
// console.log( genericFunction(name).toUpperCase() )


// console.log( genericFunctionArrow(3.1416).toFixed(2) )
// console.log( genericFunctionArrow(new Date()).getDate() )
// console.log( genericFunctionArrow(name).toUpperCase() )

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Willson',
    dangerLevel: 130,
}

console.log( genericFunctionArrow<Hero>(deadpool).realName )