"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Contructor Avenger llamado!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullname());
        }
        get fullname() {
            return `${this.name} - ${this.realName}`;
        }
        set fullname(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            else
                this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.name = 'Chemo';
    console.log(wolverine.fullname);
})();
//# sourceMappingURL=main.js.map