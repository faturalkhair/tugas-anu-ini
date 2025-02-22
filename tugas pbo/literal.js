// object literal
let hero = {
    name : 'fighter',
    poin : 10,

    attack : function(damage) {
        this.poin = this.poin + damage;

        console.log(`${this.name} menyerang, anda mendapat poin ${this.poin}`);
        return '';
    }
}
// console.log(hero);
// console.log(hero.name);
console.log(hero.attack(20));



// bektik
// `${farhan}`

// nama Object
// hero

// 2 properti
// name : 'fighter',
// poin : '10',
