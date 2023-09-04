// El tipo de dato nover, es diferente al undefined, al null o al void
// El never significa que la función no debe terminar exitosamente
(()=> {
    const error = (message = 'string'):(never|number) => {
        if (false){
            throw new Error (message);
        }
        return 1;
        

    }

    error('Auxilio!');
    console.log('Holamundo')

})()