(()=>{

    /**
     * NOTA: Descomenta los console.log para ver el funcionamiento de las clases, y los geters y seters
     * 
     * Direrencia entre privated  protected:
     * 
     * private: solo puedes acceder a dichas propiedades desde las clase donde se declaró
     * protected: Pedes acceder a esas popiedades desde clases extendidas
     * 
     * Que es un Geter y un Seter
     * Parecieran atributos normales de una clase, pero se comportan como métodos.
     * Los getters siempre deben regresar algo mediante un return
     */

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            //console.log('Contructor Avenger llamado!')
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
            //Pasamos los argumentos al padre, siempre debe ser lo primero que se pase
            //de lo contrario marcará error.
            super( name, realName)
            //console.log('Constructor Xmen llamado');
        }

        getFullnameDesdeXmen() {
            //console.log( super.getFullname() )
        }

        //getter: Método que obtiene un valor
        get fullname(){
            return `${ this.name } - ${ this.realName }`;
        }

        //Seter: Método que establece un valor, espera un argumento
        set fullname( name: string) {
            if ( name.length < 3){
                throw new Error('El nombre debe ser mayor a 3 letras')
            }else
                this.name = name;
        }
    }

    const wolverine = new Xmen('Wolverine','Logan',true)

    //wolverine.getFullnameDesdeXmen();

    //Así uso un Setter
    wolverine.name = 'Chemo';

    // Así uso un getter
    // console.log(wolverine.fullname)
})()