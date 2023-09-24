interface Power {
    id: number;
    desc: string;

}

// La primer forma de exportar, es poner la palabra export antes de const
const powers: Power[] = [
    {
        id: 1,
        desc: "Money"
    },
    {
        id: 2,
        desc: "Drugs"
    },
];

//Esta es la segunda forma de exportar por defecto, quitamos la palabra export 
//de la constante
export default powers;