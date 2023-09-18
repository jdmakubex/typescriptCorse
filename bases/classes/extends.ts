(()=>{

    /**
     * Direrencia entre privated  protected:
     * 
     * private: solo puedes acceder a dichas propiedades desde las clase donde se declaró
     * protected: Pedes acceder a esas popiedades desde clases extendidas
     */


    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Contructor Avenger llamado!')
        }

        //le ponemos protected para que el metodo sea accesible desde una clase extendida
        protected  getFullname(){
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {
        constructor(
            //recibimos los argumentos
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            //Pasamos los argumentos al padre
            super( name, realName)
            console.log('Constructor Xmen llamado');
        }

        getFullnameDesdeXmen() {
            console.log( super.getFullname() )

        }

    }

    const wolverine = new Xmen('Wolverine','Logan',true)

    console.log(wolverine)
    wolverine.getFullnameDesdeXmen();
})()