// //Construction function (Keyword new)
// function Hero(nama, poin) {
//     this.nama = nama;
//     this.poin = poin;

//     this.attack = function(damage) {
//         this.poin += damage;
//         console.log(`${this.nama} menyerang dan mendapatkan poin ${this.poin}`);
//     }

//     this.hit = function(damage) {
//         this.poin -= damage;
//         console.log(`${this.nama} diserang dan poin berkurang ${this.poin}`);
//     }
// }

// let fighter = new Hero("Zilong", 10);
// let mage = new Hero("Deudora", 10);

// // fighter.attack(5);
// // mage.hit(8);
// console.log(fighter);
// console.log(mage);

// console.log(mage.attack,(20))

//============================================================================
let System = {
    out : {
        println: function(data){
            console.log(data);
        }
    }
}
 
System.out.println("Halo Dek");
//System.out.println("Halo Dek"); object, property atau atribut, method

//============================================================================


//Pertemuan Berikutnya "Prototype"
