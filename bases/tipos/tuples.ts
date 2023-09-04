(() => {
    //Una tupla es muy parecido a un arreglo
    //Tiene la particularidad de que es mas estricto en el orden
    //del tipo de dato que admite.
    const hero: [string, number, boolean] = ['Dr Strange', 100, true];

    //Estos ejemplos nos marcan error, porque las posiciones de los datos esperan
    // Especificamene el tipo de dato declarado en la tupla
    //hero[0]= 50;
    //hero[1]= 'Batman';

    //Con el orden correcto ya no, nos marcará error.
    hero[1]= 50;
    hero[0]= 'Ironman'
    hero[2]= false;

    console.log(hero);

    
})()