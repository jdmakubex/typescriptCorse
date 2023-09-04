(()=>{
    let isSuperman : boolean = true;
    let isBatman : boolean = false;
    //Esta es la forma de devolver el valor booleano asignado.
    //console.log(isSuperman)
    
    //También es interesante ver la variable y el valor
    //console.log({isBatman})

    //Esto nos permite hacer evaluaciones con resultados booleanos

    //isSuperman =true && true;
    //console.log({isSuperman})

    //si el valor de isSuperman es igual al valor de  isBatman 
    //regresa true, si no regresa false
    isSuperman = ( isBatman ) ? true : false;
    console.log({ isSuperman })

})()