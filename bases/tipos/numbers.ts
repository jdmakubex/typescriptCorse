(()=>{
    //si no definimos el tipo de datos, se asume como tipo any
    //let avengers;
    //si lo imprimimos de esta forma, el valor mostrado será "undefined"
    //console.log( avengers )

    let avengers: number = 10;

    console.log( avengers )

    const villians: number = 20;

    if (avengers < villians) {
        console.log('Estamos en problemas')
    } else {
        console.log('Nos salvamos')
    }
    
    avengers = 123;
    console.log({avengers})

    // podemos usar la función Number para pasar strings a numerosÇ
    avengers = Number('55');
    console.log({avengers})

    //Usar este tipo de funciones, nos puede llevar a errores, por ejemplo:
    avengers = Number('55A');
    console.log({avengers})

    // Esto nos devuelve un NaN, que siginifica: Not a Number
    // Sin embargo NaN ya se conseidera tipo númérico, aunque no marque error

    



})()