// const a = 10; //si hacemos  esto, a toma el tipo de dato como 10
// let b = 10; // si hacemos esto, b toma el tipo de dato number
// por esta razón es una buena práctica declarar los tipos


//const a:number = 10;
//let b:number;
//b = 3.1416;

//si no declaramos b como number, se convierte en tipo de dato any
//hay que evitar los tipos de datos any, porque se pierde el contro
//por eso los tipos de dato any es una mala práctica
//console.log(a)


//De esta forma se declara  una función auto invocada
(() => {
    const a:number = 10;
    console.log(a)
})()