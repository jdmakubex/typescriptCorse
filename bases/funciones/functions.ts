/*
¿Qué veremos en esta sección?


Esta sección esta enfocada en aprender como trabajan las funciones en TypeScript y también nos enfocaremos en aplicar buenas prácticas a la hora de crearlas.

Puntualmente tenemos:

Declaraciones básicas de funciones
Parámetros obligatorios
Parámetros opcionales
Parámetros por defecto
Parámetros REST
Tipo de datos "Function"
Al final de la sección, tendremos el examen práctico y el examen teórico.
*/

//como primer paso hacemos una función anónima autoinvocada.

(() => {
    const hero : string = 'Flash';

    //Después del parentesis de la funcion declaramos 
    //el tipo que vamos retornar
    function returnName():string{
        return hero;
    }

     //Después del parentesis de la funcion declaramos 
    //el tipo que vamos retornar
    const activateBatisignal = ():string => {
        return 'Batiseñal activada!';
    }

    console.log(typeof activateBatisignal)

    const heroName = returnName();

})()

