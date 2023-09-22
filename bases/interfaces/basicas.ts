(() =>{
/**
 * ¿Qué veremos en esta sección?


Esta sección esta dedicada a crear interfaces, las cuales nos permitirán crear reglas o planos de como se deben de construir clases, métodos u objetos.

Puntualmente aprenderemos:

¿Por qué es necesario una interfaz?
¿Cómo creamos una interfaz básica?
Crear propiedades opcionales
Crear métodos
Asignar interfaces a las clases
Al final, tendremos un examen práctico y teórico sobre las interfaces.
 */

/**
 * 
 * Dirferencia entre interfaces y tipos
 * Los tipos no son extendibles, y las interfaces si
 */

//Así es como se declara una interfaz
interface Hero  {
    name: string;
    age?:number;
    powers: number[];
    getName?: () => string;
}
// ahora cada objeto, solo la decharamos como dicho tipo
let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: [1,2]
}

let superman: Hero= {
    name: 'Clark Kent',
    age: 60,
    powers: [1],
    getName() {
        return this.name
    }
}


})()