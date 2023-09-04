(() =>{
    //Cuando ponemos tipado de datos a los parametros de la función 
    //los volvemos obligatorios o requeridos, por lo que typescript 
    //se vuelve mas estricto, y solo aceptará ese tipo de dato
    const fullName = ( firstName: string, lastName:string ): string =>{
        return `${ firstName } ${lastName}`;
    }

    const name = fullName( 'Tony', 'Stark' );
    console.log ({ name });
})()