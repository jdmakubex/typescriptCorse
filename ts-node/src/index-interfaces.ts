
// sDe esta forma importamos una clase, para este ejemplo la clase Hero del archivo Hero.ts
// al momento de importar, cuando ponemos Hero as superHero, le ponemos un alias para
// Usarlo con ese alinas 
//import{Hero as SuperHero, Hero2} from './classes/Hero';

/**
 * Otra forma de importar los archivos es el siguiente
 */

//import * as HeroClasses from './classes/Hero';
import {Hero} from './classes/Hero';
import powers from './data/powers';

console.log('Hola Mundo!!!!!');

//Para el segundo ejemplo, tenemos todas las clases disponibles desde HeroClasses
//const ironman = new HeroClasses.Hero('ironman',1,55);
const ironman = new Hero('ironman',1,55);

console.log(ironman);
console.log(ironman.power)

//console.log(powers)





