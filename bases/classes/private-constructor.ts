(()=>{
/**
 * Contructor Privado
 * Sirve para controlar la forma en que las instancias son ejecutadas.
 * Para manejar singletones. Una unica instancia en toda la aplicación. Simpre regresará la misma instancia originalmente creada.
*/

    class Apocalipsis {
        
        static instance:Apocalipsis;

        private constructor ( public name: string ){}

        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
            }

            return Apocalipsis.instance;             
        }

        changeName ( newName: string ) :void {
            this.name = newName;
        }
    }

    const apocalipsis1= Apocalipsis.callApocalipsis()
    const apocalipsis2= Apocalipsis.callApocalipsis()
    const apocalipsis3= Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Xavier');


    // const apocalipsis1 =  new Apocalipsis ('Soy Apocalipsis 1... unico')
    // const apocalipsis2 =  new Apocalipsis ('Soy Apocalipsis 2... unico')
    // const apocalipsis3 =  new Apocalipsis ('Soy Apocalipsis 3... unico')
    console.log(apocalipsis1, apocalipsis2,apocalipsis3);

})()