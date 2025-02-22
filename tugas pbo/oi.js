 const methodHero = {
    attack: function(damage) {
        this.poin += damage;
        return `${this.name} menyerang dan mendapatkan poin ${this.poin}`;  
    },

    hit: function(damage) {
        this.poin -= damage;  
        console.log(`${this.name} diserang dan poin berkurang menjadi ${this.poin}`); 
    },

    heal: function(heal) {
        this.poin += heal;  
        console.log(`${this.name} mendapatkan heal dan poin menjadi ${this.poin}`);
    }
};

 function Hero(nama, poin) {
     let hero = Object.create(methodHero);
    hero.name = nama;  
    hero.poin = poin;   
    return hero;      
}

let fighter = Hero("Zilong", 10);
let mage = Hero("Deudora", 10);

console.log(fighter.attack(10));   
console.log(fighter.hit(5));       