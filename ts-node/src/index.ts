/**
 * Este index, se ocupará en el tema de decoracores.
 * ¿Qué veremos en esta sección?


Los decoradores son una característica nueva en el TypeScript 
que cada vez es más utilizada por otros frameworks como Angular 2. Pero vamos a aprender a utilizar decoradores en nuestros proyectos.

Puntualmente aprenderemos sobre:

¿Qué son los decoradores?
¿Para qué sirven?
Decoradores de clases
Decoradores de fabrica
Ejemplos prácticos
Decoradores anidados
Decoradores de métodos
Decoradores de propiedades
Decoradores de parámetros

Los decoradores, son funciones que se ejecutan solamente en el
momento de transpilación, y basicamente permite extender
algunas funcionalidades o propiedades  de una clase, método u objetos.

Fueron creados para hacer el código mas fácil de leer

Los decoradores sirven para no copiar la misma lógica en varios lugares
 */

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
charmander.savePokemonToDB(50)