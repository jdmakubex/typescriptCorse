(() => {

    const batman: string = 'Batman';
    const LinternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(` I'm  ${batman}`);

    console.log(batman.toUpperCase());

    //En la siguiente linea, si omitimos el signo de interrogación marca error
    //El signo de interrogacón ayuda a evaluar, que si el estring contenido
    //en la variable batman tiene un caracter en la posición 11, lo muestre 
    // como mayuscula, si no, muestra undefined, pero ya no muestra error.
    console.log(batman[10]?.toUpperCase() || 'no está presente')

})()