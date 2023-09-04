(() => {
    /**
     *  Se puede defenir un tipo personalizado de dato como en el caso de Hero
     * en el siguiente ejemplo definimos el tipo de dato Hero
     * */
    type Hero = {
        name: string;
        age?:number;
        powers: number[];
        getName?: () => string;
    }

    /**
     * Aquí definimos que una variable pueda ser de tres tipos:
     * string, number o tipo Hero (definido previamente)
     */
    let myCustomVariable: (string | number | Hero) ='Juan';
    console.log(typeof myCustomVariable)
    
    myCustomVariable = 20;
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
    // No muestra en consola el tipo Hero, en cambio lo muestra
    // como tipo object
    console.log(typeof myCustomVariable)
})()