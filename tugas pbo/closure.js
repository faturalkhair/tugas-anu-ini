// CLOSURE
// kombinasi antara function dan lingkungan leksikal (LEXICAL SCOPE)
//fuction yang memiliki akses ke variabel diluar dari functiton tersebut. 
// pembuatan function yang lebih fleksibe;

// function utama() {
//     let nama = 'FATYRR';

//     function cetakNama() {
//         console.log(nama);
//     }

//     cetakNama();
//     console.dir(cetakNama);
//     return cetakNama;
// }

// utama();

// let panggilNama = utama();
// panggilNama();


// function salamSapa(waktu) {
//     return function (nama){
//         console.log(`Halo selamat ${waktu}, nama saya ${nama}`)
//     }
// }

// let salamPagi = salamSapa ('Pagi')
// let salamSiang = salamSapa ('Siang')
// let salamMalam = salamSapa ('Malam')

// salamPagi('Cuki')
// salamSiang('May')
// salamMalam('Ngana')


// =============================================//


// let tambah = function() {
//     let noAntrian = 0
//     return ++noAntrian;
// }

// noAntrian = 10

// console.log(tambah());
// console.log(tambah());
// console.log(tambah());


let tambah = function() {
    let noAntrian = 0
    return function () {
        return ++noAntrian;


    }
}

let a = tambah()

noAntrian = 10

console.log(a());
console.log(a());
console.log(a());
console.log(a());