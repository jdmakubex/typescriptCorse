(()=>{
/**
 * No es recomendale tener varios niveles de objetos anidados sobre un objeto principal,
 *  es mejor separar en varias interfaces y declarar el atributo del tipo declarado en otra interfaz. 
 * Se ejemplifica serpanrando la interfaz Adrees.
 * En luga de anidar el objeto Address como un segundo nivel en Cliente, se separa en una interfaz nueva denominada Address:
 */

/**
 * También es posible crear métodos dentro de las interfaces, pero usualmente cuando se hace eso es mejor optar pr crear una clase.
 * Las interfaces no crean instancias.
 */
    interface Client {
        name: string;
        age?: number;
        address: Address;
        //Aquí declaramos un método.
        getFullAddress (id: string ):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client1: Client = {
        name :  'Juan',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress (id:string){
            return this.address.city;
        }
    }

    const client2: Client = {
        name :  'Melissa',
        age: 30,
        address: {
            //No importa el orden de los atribudos, lo que si importa es que estén presentes
            city: 'Ottawa',
            id: 125,
            zip: 'KY2 SUD',            
        },
        getFullAddress (id:string){
            return this.address.city;
        }
    }

    /**
     * Las interfaces solo se declaran en TypeScript, estas no se transpilan a javascript. Por lo que no serán visibles en el js
     */

})()