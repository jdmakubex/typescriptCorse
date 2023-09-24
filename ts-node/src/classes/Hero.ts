import powers from '../data/powers';

/*
* Colocamos export para que la clase esté disponible en otros archivos.
* En este ejemplo, dispondremos de esta clase desde el archivo, index.ts
*/
export class  Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
        ){}
        get power():string {// return string
            /**
             * Asì como usamos el signo de interrogación para indicar algo no obligatorio
             * pordemo susar el signo de admiración para indicar que confie en el resultado
             */
            return powers.find(power => power.id === this.powerId )?.desc || 'not found';
        }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}
export class Hero5 {}

export const PI= 3.1416;
export const niNombre= 'Juan';
