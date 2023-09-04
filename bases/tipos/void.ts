(() => {
    //void significa vacío, se usa cuando una funcion no va a retornar nada
    //void es diferente de null y de undefined
    function callBatman():void {
        //solo con esto, typescrip interpreta que regresa vacío
        return;
    }

    const callSuperman = ():void =>{
        //Esto lo marca mal, porque se espera un retorno de vacío
        //return true;

    }

        //const a: void 
    const a = callBatman();
    console.log(a);

})()