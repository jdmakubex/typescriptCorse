/**
 * Basicamente, los tipos genericos se hacen cuando ponemos any como argumento
 * Esto nos permite recibir cualquier tipo de datos, para evitar errores, al momento de
 * usar la función se recomienda forzar para que regrese el tipo de dato definido 
 * por el programador, para evitar errores de tipado de dato
 */

export const printObject = (argument: any) =>{
    console.log(argument)
}
/**
 * Para declarar el tipo de dato generico en una función vamos a agregar
 * <T> a la función, podría ser otro tipo que no sea  una palabra recerbada de javascript
 * Como se observa en el ejemplo, y colocamos como tipo de dato de argumento 
 * También T
 */

//Ejemplo con función tradicionl
export function genericFunction<T>( argument: T ):T{
    return argument;
}

/**
 * Con esto, cada que usemos la función, typeScript ofrece las fuciones disponibles
 * Segun el tipo de argumento que enviamos como parametro, lo que hace que sea menos
 * posible que cometamos errores en el tipado de datos.
 */

//El mismo ejemplo con función de tipo flecha
export const genericFunctionArrow = <T> (argument: T):T => argument;