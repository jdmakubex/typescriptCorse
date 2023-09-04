(() =>{

    /*
    El signo se interrogación después de lastname y antes de los dos puntos
    indica que dicho argumento en la función es opcional.
    */
    const fullName = ( firstName: string, lastName?:string ): string =>{
        /*
        Para que no aparezca undefined en la consola, si no viene el argumento 
        lastName, podemos agregar || 'No lastName', predefiniendo un mensaje
        */
        return `${ firstName } ${lastName || 'No lastname' }`;
    }

    //De esa forma pondemos no enviar el argumento lastname a la función fullName
    const name = fullName( 'Tony',  );
    console.log ({ name });
})()