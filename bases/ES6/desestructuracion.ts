(() => {
    /**  DESESTRURACION DE OBJETOS
     * La desustrucración consiste en tomar un objeto y sacarle las propiedades que nos
     * interesan
     */

    //Creamos un tipo una interfaz que se llama Avenger (paso 1)
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    

    // Creamos un objeto (paso2)
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downyy Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

/*Esta es una forma tradicional de crear una deconstrucción

    //desestructuramos los atributos que nos interesan
    const { poder , vision } = avengers

    //ahorea tenemos disponibles los métodos según el tipado que tengan
    // y podemos usarlos
    console.log(poder.toFixed(2) , vision.toUpperCase())
*/

// Esta es otra forma de crear una deconstrucción

/*
    const printAvenger = ( avengers: Avengers ) => {
        console.log(avengers.vision);

    }
*/

const printAvenger = ( {ironman, ...resto} : Avengers ) => {
        console.log(ironman,resto);

    }

    printAvenger(avengers); 

// DESESTRUCTURACIÓN DE ARREGLOS

const avengersArr:string[] = ['Cap. Ameroca.','Ironman', 'Hulk'];

//Esta es una forma clásica de acceder a un elemento de un arreglo
//const ironman = avengersArr[1];
//desestructurando quedaría así:
const[ ,ironman, ] =  avengersArr;
console.log({ironman})
})()