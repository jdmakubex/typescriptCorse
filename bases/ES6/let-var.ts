(() => {
    /**
     * ¿Qué veremos en esta sección?


JavaScript va actualizando año con año, y tenemos que estar enterados de todo lo nuevo para saber cómo le sacamos el máximo provecho!

Esta sección esta orientada a enseñarles un par de cosas muy útiles y necesarias del ES6 (ES2015 o ECMAScript 6), que ya podemos utilizar con toda confianza en TypeScript.

Aprenderemos sobre:

Diferencia entre declarar variables con VAR y con LET
Uso de constantes
Plantillas literales
Funciones de flecha
Destructuración de objetos
Destructuración de Arreglos
Nuevo ciclo, el FOR OF
Conocer sobre la programación orientada a objetos
Clases
Al final, un examen práctico y teórico para afianzar los conocimientos.
     */

/**
 * Var, se usa en un caso extrmo que se requeira la compatibilidad con naveagdores
 * web anteriores; Ya no se debe usar en la actualidad, ya que permite errores.
 * 
 * Cuando usamos let, en lugar de var, TypeScript, identifica si la variable se está
 * usando antes de su declaración, y lo marca
 */

const nombre: string = 'Juan';

const getName = ():void => {
    console.log('viejo getName');
}

//getName();

})()