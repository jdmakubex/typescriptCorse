(() =>{

    /*
    Para poner un valor por defecto en un argumento, le asignadmos 
    directamente su valor, por ejemplo:     upper: boolean = false
    */
    const fullName = ( firstName: string, lastName?:string, upper: boolean = false ): string =>{
        /*
        
        */
        if ( upper ){
            return `${ firstName } ${lastName || '----' }`.toUpperCase();
        } else {
            return `${ firstName } ${lastName || '----' }`;
        }
        
    }

    /* si omitimos el tercer parametro, por defecto tendrá el valor false
    En cambio si queremos activarlo, puedees enviar el valor true y eso
    va a activar la conversión a mayúsculas
    */
    const name = fullName( 'Tony', 'Stark', true);
    console.log ({ name });
})()