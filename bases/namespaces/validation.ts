/**
 * Tema: NameSpaces
 * 
 * ¿Qué veremos en esta sección?

TypeScript, es un lenguaje de programación web, que nos permite crear 
objetos que nos servirán a lo largo de nuestro programa. 
Los namespaces, existen para ayudarnos en la re utilización de nuestras variables, 
constantes y métodos.

Puntualmente aprenderemos sobre:

Explicación del ¿por qué son necesarios los namespaces?
Crear namespaces
Multiples namespaces en un mismo proyecto
Importar namespaces
Problemática que se puede presentar utilizando un namespace.
*/


/**
 * En esta ocación en vez de crear una función anónima auto invocada
 * crearemos un namespace, esto nos permitirá acceder a las funciones y clases
 * que se encuentren en dicho namespace
 */

/**
 * Los namespaces, se usan al crear librerías o frameworks, su principal función es 
 * categorizar o agrupar funciones de un mismo fin. Usualmente los frameworks ya los
 * traen incorporados, y es muy poco frecuente usarlos en el desarrollo
 */

namespace Validations {

    // con export, exponemos fuera de nuestro namespace las funciones par que estén
    // disponibles, y sean accesibles  y usables
    export const validateText = ( text: string ): boolean => {

        return ( text.length > 3) ? true : false;
        /*
        // Todo este código podemos simplificarlo
        if (text.length > 3) {
            return true;
        }else{
        return false;
        }
        */
    }

    const validateDate = ( myDate: Date ): boolean => {
        //NaN, es si no es un número
        return ( isNaN (myDate.valueOf() ) ) ? false : true;
    }


}

console.log(Validations.validateText('Tom'))
