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

let fighter = Hero("Ratnasariii", 10);
let mage = Hero("Faturrrrr", 10);

console.log(fighter.attack(10));   //inniii ratnasarii punyaaa
console.log(fighter.hit(7));     

console.log(mage.attack(10));    // inii punya kuuuuuuuuuuuuuuu
console.log(mage.hit(5));     
