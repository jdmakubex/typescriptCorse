(()=>{

    class Avenger {

        //private name: string;
        //private team: string;
        //public realName?: string;
        static avgAge: number = 35;
        
        /** 
         * Forma corta de declarar los elementos del constructor
        */
        constructor (
            private name: string,
            private team:string, 
            public realName?:string,
            ){}
        //Asì es como declaramos un método público.
        // si le ponemos private, no hay mucha diferencia por que es javaescript
        bio(){
            return `${ this.name } (${ this.team })`
        }
    }  

    const antman: Avenger = new Avenger('Antman','Capitan','Scott Lang');

    console.log(antman)

    //Asi puede acceder a la propiedad de una instancia 
    console.log(antman.realName)

    //Las propiedades estáticas se consutan a la clase, no a las instancias
    //console.log(Avenger.avgAge)

    console.log(antman.bio())

})()