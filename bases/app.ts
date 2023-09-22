/**
 * Tema: Interfaces
 */


// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
//Solucion: Solo creamos la interface Auto, declaranto los tipos e cada atributo y el metodo
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar():void;
}
//fin Solucion.

const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

//Solucion: Declaramos la interface Guason, declarando cada atributo como opcional y definiendo su tipado
interface Guason {
  reir?: boolean;
  comer?:boolean;
  llorar?: boolean;
}
//Fin solucion

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

//Solución: Solo se  crea la  interface CiudadGoticaFN del método
interface CiudadGoticaFN {
  (ciudadanos : string[]):number
}
//Fin solucón

const ciudadGotica: CiudadGoticaFN = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

// Solución: Se crea la interface: PersonaIterface con sus atribudos con tipos definidos
interface PersonaIterface {
  nombre: string;
  edad: number
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void // en consola una breve descripcion.
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona  implements PersonaIterface{
  nombre: string;
  edad: number
  sexo: string;
  estadoCivil: string;

  //No olvide crear el contructor de la clase, para que no marque errores
  constructor(nombre: string, edad: number, sexo: string, estadoCivil:string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil =  estadoCivil
  }
  imprimirBio(): void {
    
  }

}