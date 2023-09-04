(()=>{
    // Se debe mantener activada en el tsconfig.json 
    //la opción strictNullCheck

    let nada: undefined = undefined;
    console.log(nada)

    // null no es lo mismo que undefined

    //Por defecto typeScript ya no permite valores que no sean booleanos
    //en variables de tipo booleano, a menos que lo definamos por que
    // De esa forma lo queremos
    let isActive:(boolean|null) = null;
    console.log(isActive)

})()