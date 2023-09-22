(()=> {

    /**
     * Aplicar interfaces en funciones es algo muy poco común pero si se puede llegar a implementar
     */
    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumbers;


    addNumbersFunction = (a: number, b: number) => {
        return 10;
    }

})()