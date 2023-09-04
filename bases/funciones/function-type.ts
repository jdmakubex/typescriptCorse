(() => {
    /*
    Cuando trabajamos con una una función de fecha que retorna algo en 
    una sola línea, entonces podemos trabajorlo en una solalinea
    como a + b directamente
    */

    //Función que recibe dos numeros y regresa un número
    const addNumbers =  (a: number, b:number) =>  a + b;

    // la siguiente función  se llama saludar o great
    const greet =  (name: string) =>  `Hola ${ name }`;

    //No recibe ningún argumento y retorno una string
    const saveTheWorld = () => `El mundo está salvado!`;

    //Esta es la forma de declarar que el tipo de asignación que se espera
    // tiene que ser de tipo función
    //let myFunction: Function;

    // De esta forma declaramos que será de tipo función
    // Y que dicha funcion retornará un tipo number
    let myFunction: ( y:number, z:number ) => number;

    //myfunction inicia siendo tipo any
    //myFunction = 10;
    //console.log(myFunction);

    // myFunction = addNumbers;
    //console.log( myFunction( 1, 2 ) )

    //myFunction = greet;
    //console.log( myFunction( 'Juan' ) )
    
    //myFunction = saveTheWorld;
    //console.log( myFunction() )

})()