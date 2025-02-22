//prototype
// penampung/wadahu menampung method/properti dari instansi
//dan object

// pemrograman berbasis prototype
// 


//contoh CLASS
// class Hero{
//     constructor(nama,poin){
//         this.nama = nama;
//         this.poin = poin;
//     }
// }


// function Hero (nama, poin) {
//     this.nama = nama;
//     this.poin = poin;
// }

//method== attack, hit


// =======================================


function Orang(nama, pekerjaan){
    this.nama = nama;
    this.pekerjaan = pekerjaan;

    // this.sapa = function(){
    //     return `oi apa kabar`;  
    // }
}

Orang.prototype.sapa = function(){
    return `OIOIOIOIOIIII`
}

let Ambo = new Orang('Ambo', 'Programmer')
let Budi = new Orang('Budi', 'Machine Learning')

// console.log(Ambo);
// console.log(Budi);
// kendala: sapa nya ikut ki
// let angka = [1,2,3,4]
// console.log(angka.reverse()) 

let tanggal = new Date();

console.log(tanggal.getHours())

let nama = 'Ambo';
console.log(nama.length);


// function Orang(nama, pekerjaan){
//     let orang = {};
//     let orang = Object.create(methodSapa)
//     orang.nama = nama;
//     orang.pekerjaan = pekerjaan;

//     this.sapa = function(){
//         return `halo apa kabar su`; //baris17
//     }

//     return orang;
//     return this;

// }

// let ambo = new Orang('ambo' , 'programmer');
// let budi = new Orang('budi' , 'ML player hahay');

// console.log(ambo)
// console.log(budi)








// Membuat objek prototype methodSapa untuk menyimpan metode sapa
// const methodSapa = {
//     sapa: function () {
//         return `halo apa kabar su`;
//     }
// };

// function Orang(nama, pekerjaan) {
//     // Membuat objek baru yang mewarisi dari methodSapa
//     let orang = Object.create(methodSapa);
//     orang.nama = nama;
//     orang.pekerjaan = pekerjaan;
    
//     return orang; // Mengembalikan objek yang sudah diatur
// }

// // Membuat objek baru dari fungsi Orang
// let ambo = new Orang('ambo', 'programmer');
// let budi = new Orang('budi', 'ML player hahay');

// console.log(ambo); // Output: {nama: "ambo", pekerjaan: "programmer"}
// console.log(budi); // Output: {nama: "budi", pekerjaan: "ML player hahay"}
// // console.log(ambo.sapa()); // Output: "halo apa kabar su"
// // console.log(budi.sapa()); // Output: "halo apa kabar su"

























