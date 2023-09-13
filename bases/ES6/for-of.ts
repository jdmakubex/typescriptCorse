(()=>{
    type Avenger = {
        name: string,
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const captainAmetica: Avenger = {
        name: 'Capitan América',
        weapon: 'Shiel'
    }

    const Thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [Thor,captainAmetica,ironman];
        
    for (const avenger of avengers){
        console.log(avenger.name,avenger.weapon)
    }

})()