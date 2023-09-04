(() => {
    //El objerivo de una enumeración es trabajo con valores con un sentido
    // semántico que sea facil de leer.

    enum AudioLevel{
        min,
        medium,
        max
    }

    let currentAudio = AudioLevel.max;

    console.log( currentAudio )
    console.log(AudioLevel)

    enum enumeracion {
        a=10,
        b,
        c=9,
        d
    }
    //Como "c" se iguala a 9, el siguiente valor es 10, 
    //no importa que se repita el valor de la enumeración.
    console.log(enumeracion)

})()