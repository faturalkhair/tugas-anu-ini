// Private Property dan Method
// 1 Februari 2028

// tujuan: memahami pp, dan pm
// perbedaan p/m 
// privat == privasi
// tujuan use: menghindari akses langsung dari luar class.
// menyembunyikan akses lngsung 


// class Orang {
//     #umur; //private property

//     constructor(nama, umur) {
//         this.nama = nama; //public property
//         this.umur = umur; //private property
//     }

//     // public method untuk mengubah private property
//     infoUmur(){
//         return this.#umur;
//     }


//     //pib;ic ,ethod untuk mengubah private property
//     ubahUmur(umurBaru) {
//         if (umurBaru > 0) {
//             this.#umur = umurBaru;
//         } else {
//             console.error('Umur harus beng angka positif');
//         }
//     }
// }

// const siswa = new Orang('Mus Tamoan dan Pemberani HAHAHAHAHAAY', 27);
// console.log(siswa.nama);
// console.log(siswa.infoUmur());

// siswa.ubahUmur(29);
// console.log(siswa.infoUmur());
// siswa.ubahUmur(-99);


// siswa.#Umur = 30
// console.log(siswa.infoUmur());



// class akunBank {
//     #saldo;

//     constructor(saldoAwal) {
//         this.#saldo = saldoAwal;
//     }

//     #validasiSaldo(jumlah){
//         return jumlah > 0;
//     }


//     deposit(jumlah) {
//         if (this.#validasiSaldo(jumlah)) {
//             this.#saldo > jumlah;
//         } else {
//             console.error('jumlah saldo tidak valid kanda');
//         }
//     }

//     infoSaldo() {
//         return this.#saldo;
//     }
// }

// const akun = new akunBank (10999999999999999);
// akun.deposit(500);
// console.log(akun.infoSaldo());
// akun.deposit(-100);


// class Lingkaran {
//     static PI = 3.14159 // static property

//     constructor(jari2) {
//         this.jari2 = jari2;
//     }

//     luas () {
//         return Lingkaran.PI * this.jari2 ** 2; // mengakses static property
//     }
// }

// console.log(Lingkaran.PI); // output 3.14159
// const roda= new Lingkaran(5); // jari jari roda adalah 5
// console.log(roda.luas()); // output: 78.53975

// tambahkan roda.PI = 4
// console.log(roda luas)




// class Aritmatika {
//     static tambah(a,b) {
//         return a + b;
//     }
//     static kali(a,b) {
//         return a*b;
//     }
//     static bagi(a,b){
//         return a/b;
//     }
//     static kurang(a,b){
//         return a-b;
//     }
// }

// console.log(Aritmatika.tambah(175, 15));
// console.log(Aritmatika.kali(25, 15));
// console.log(Aritmatika.bagi(10, 5));
// console.log(Aritmatika.kurang(199, 99));


// const hitung = new Aritmatika();
// console.log(hitung.bagi(10, 5));
// console.log(hitung.kurang(199, 99));

// perbedaan private dan static

// 
// 

// class Orang {
//     constructor(nama) {
//         this.#nama = nama;
//     }

//     get nama(){
//         return this.#nama;
//     }
//     set nama(namaBaru){
//         this.#nama = namaBaru;
//     }
// }

// const Pegawai = new Orang ('anala');
// console.log(Pegawai.nama);
// Pegawai.#nama = 'mus cuki';
// console.log(Pegawai.nama);
//penggunaan getter setter



class User {
    static #totalUser =0;

    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
        User.#totalUser++;

    }

    static getTotalUser() {
        return `Total users: ${User.#totalUser}`;
    }

    get passwordHint() {
        return `${this.#password[0]}***`;
    }

    set password(newPassword) {
        if (newPassword.length >= 8) {
            this.#password = newPassword;
        } else {
            console.error('Minimal 8 karakter cok');
        }
    }
}

const user1 = new User('Mus', 'ada123');
const user2 = new User('Cuky', 'adakah123');

console.log(User.getTotalUser());
console.log(user1.passwordHint);
user1.password = 'tes123';
user1.password = 'adaji1234';
console.log(user1.passwordHint);