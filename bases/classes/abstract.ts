(()=>{

    /**
     * CLASES ABSTRACTAS
     * Usualmente las clases abstractas sirven crear otras clases, o para asegurarse que otras clases 
     * ejecuten lo que nosotros esperamos
     */
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen extends Mutante{

    }

    const wolverine : Mutante = new Xmen ('Wolverine', 'Logan');

    console.log(wolverine)


})()