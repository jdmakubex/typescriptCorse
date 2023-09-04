(() => {
    let avenger: any = 123;
    let exist;
    // una const no se puede declarar sin asignarle un dato o marca error.
    // por lo tanto se le debe asignar un valor inicial.
    //const dato;
    let power;

    //Se debe evitar el uso del tipo de dato any en lo posible.
    //Cuando usamos el tipo de dato any, TypeScript ya no auocompleta las opciones
    // segun el topo de dato las funciones de las que dispone.

    avenger = 'Dr. Strange';
    //console.log( avenger.charAt(0) );

    //CASTING: es una particularidad de typescript
    //Se puede hacer un casteo como local para tratar el tipo de datos
    // para tener accceso a los métodos disponibles de dicho tipo
    console.log( (avenger as string).charAt(0) );

    avenger = 150.23246415;
    //console.log( avenger.toFixed(2) );
    // Este es un casteo de tipo number
    console.log( <number>avenger.toFixed(2) );

    console.log(exist);
    console.log(power);

})()