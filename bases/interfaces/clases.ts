(()=>{

    /**
     * No se puede usar extends en interfaces... 
     * En su lugar se usa implements.
     * Los types se usan cuando estamos seguros que no va a extenderse, en patrones como el reduce
     * Para todo lo demás se usan interfaces.
     */
    interface Xmen{
        name: string;
        realName: string;
        mutantPower( id: number):string;
    }

    interface Human {
        age: number;
    }
   
    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        constructor(age: number, name: string, realName: string) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }

        mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
    }

    /*
    // Ejemplo de uso
    const wolverine = new Mutant(35, "Wolverine", "Logan");
    console.log(wolverine.age); // 35
    console.log(wolverine.name); // Wolverine
    console.log(wolverine.realName); // Logan
    console.log(wolverine.mutantPower(123)); // Wolverine Logan
    */

})()