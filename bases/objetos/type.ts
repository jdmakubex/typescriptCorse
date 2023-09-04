(() => {
    /** TYPES
     * Para evitar declarar en cada objeto los tipos que componen
     * dicho objeto, mejor se declara un tipo de dato que contiene
     * todos los tipos que componen dicho objeto
     */

    type Hero = {
        name: string;
        age?:number;
        powers: number[];
        getName?: () => string;
    }
    // ahora cada objeto, solo la decharamos como dicho tipo
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1,2]
    }

    let superman: Hero= {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name
        }
    }

})()