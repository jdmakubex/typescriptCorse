(()=>{
    class Avenger{
        name;
        power;

        //El constructor lo usan para configurar mas a detalle la clase
        // y tratar de asignar el tipado
        constructor(name="No name",power=0){
            this.name=name;
            this.power=power;
        }
    }

    // Extends, es para dar herencia a una clase, con respecto de otra
    // clase previamente creada
    class FlyingAvenger extends Avenger {
        flying;
        //El constructor lo usan para configurar mas a detalle la clase
        // y tratar de asignar el tipado
        constructor(name,power){
            //agregando super(),invocamos el contructor de la clase padre 
            super(name,power);
            this.flying=true;
        }
    }

    const hulk = new Avenger('Hulk',9001)
    const falcon = new FlyingAvenger('Falcon',50)

    console.log(falcon)
})()


/**
 * ¡Hola, Gaston!

Antes de ES6, se usaba comillas simples (') o comillas dobles (") para envolver una cadena de texto o string. Y las cadenas tienen una funcionalidad muy limitada.

Para permitir resolver problemas más complejos, las plantillas de ES6 proporcionan la sintaxis que permite trabajar con cadenas de manera más segura y limpia.

En ES6, se crea una plantilla literal envolviendo el texto en (`) de la siguiente manera:

let simple = `This is a template literal ${VARIABLE}`;

Con las plantillas literales obtienes las siguientes características:

-Una cadena multilínea: una cadena que puede abarcar varias líneas.

-Formato de cadena: la capacidad de sustituir parte de la cadena por los valores de variables o expresiones. Esta función también se denomina interpolación de cadenas.

-Escape de HTML: la capacidad de transformar una cadena para que sea seguro incluirla en HTML.

Puedes visitar su documentación y ver más ejemplos:
 */