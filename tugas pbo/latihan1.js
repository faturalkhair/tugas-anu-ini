// // Membuat objek dengan properti dan metode
// let mahasiswa = {
//     nama: "Budi",
//     umur: 21,
//     jurusan: "Informatika",
    
//     // Metode dalam objek
//     perkenalan: function() {
//         return `Hai, nama saya ${this.nama}, saya berumur ${this.umur} tahun dan jurusan saya adalah ${this.jurusan}.`;
//     }
// };

// // Akses properti objek
// console.log(mahasiswa.nama);        // Output: Budi
// console.log(mahasiswa.umur);        // Output: 21

// // Menggunakan metode objek
// console.log(mahasiswa.perkenalan()); // Output: Hai, nama saya Budi, saya berumur 21 tahun dan jurusan saya adalah Informatika.

function orang(nama, umur) {
    let orang = {}; // Tetap menggunakan nama 'orang'

    // Menambahkan properti
    orang.nama = nama;
    orang.umur = umur;

    // Menambahkan method 'kerja'
    orang.kerja = function(jam) {
        console.log("Ayah bekerja selama " + jam + " jam");   
    };

     return orang;
}

 let ayah = orang("Ambo", 55);
let ibu = orang("Siti", 45);

 ayah.kerja(8);  

// Menampilkan properti dari objek 'ibu'
console.log("Nama ibu: " + ibu.nama + ", Umur ibu: " + ibu.umur);  
// bagaimana method 

//