(() => {

    /*
    Rest Argumentos --> Resto de argumentos
    ...  es el operator para rest
    despues de los puntos se le pone el nombre del rest
    por defecto queda como tipo any, pero se le puede definir el tipo de rest
    y se debe definir como un arreglo
    */

    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        /*
        En esta parte, concatena el primer parámetro al resto de argumentos
        que han diso enviados como parámetros, separados por un espacios
        */
        return `${ firstName } ${ restArgs.join(' ') }`
    }

    const superman = fullName ('Clark','Joseph','Kent');
    console.log({superman})
})()