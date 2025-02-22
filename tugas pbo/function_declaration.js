function Hero(nama, poin) {
    let hero = {};
    hero.nama = nama;
    hero.poin = poin;

    hero.attack = function(damage) {
        this.poin = damage;
        console.log(`${this.nama} menyerang, anda mendapat poin ${this.poin}`)
    }
    return hero;
}

let fighter = Hero('Balmond', 10);
let Mage = Hero('Didora', 10);
console.log(fighter.nama);
console.log(`${Mage.nama}`);

fighter.attack(20);
Mage.attack(90);

console.log(`waktu telah habis`)