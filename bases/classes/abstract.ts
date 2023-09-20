(()=>{

    /**
     * CLASES ABSTRACTAS
     * Usualmente las clases abstractas sirven crear otras clases, o para asegurarse que otras clases 
     * ejecuten lo que nosotros esperamos.
     * Otro uso es para especificar que estoy esperando una clase, objeto u oagumento extendido de una clase.
     */
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    //Las clases extendidas pueden tener métodos especializads de cada clase
    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo salvado!';
        }
    }

    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundos conquistado!';
        }
    }

    const wolverine : Xmen = new Xmen ('Wolverine', 'Logan');
    const magneto : Villian = new Villian ('Magneto', 'Magnus');
    //Descomentar para ver resultados
    //console.log(wolverine.salvarMundo());
    //console.log(magneto.conquistarMundo());

    //Esta función nos ayuda a acceder al atributo realname, que viene de la clase Mutante
    const printName = ( charracter: Mutante ) => {
        console.log ( charracter.realName);
    }

    //Sin mandamos como parametro a Wolverine, nos devuelve diractamente su realName
    //printName( magneto );

})()