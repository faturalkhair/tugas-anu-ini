// 18 JANUARI 2029

// Getter SETTER
// method / function 
// sama sama method dan function dalam class
// 


// getter == method/function u/ mengambil nilai properti dari objek
// setter == method/function u/ mengatur/modifikasi nilai properti dari objek

// kapan bisa diakses dan kapan di modifikasi 
// berapapun objek yg dibikin, getter setter akan tetap ada dalam class
// ecapsulation == pembungkusan
// mengambil dan mengganti nama menggunakan methodnya

// class Orang {
//     constructor(nama){
//         this.nama = nama;

//     }
//     get infoNama(){
//         return this.nama;
//     }
//     set editNama(namaBaru) {
//         this.nama = namaBaru;
//     }
// }

// const pegawai = new Orang("Sukimay");
// console.log(pegawai.infoNama);
// pegawai.editNama = ("Sukijat");
// console.log(pegawai.infoNama);

// class Persegi {
//     constructor(lebar, tinggi) {
//         this.lebar = lebar;
//         this.tinggi = tinggi;
//     }
//     // getter untuk
//     get luas() {
//         return this.lebar * this.tinggi;
//     }
// }

// const segiEmpat = new Persegi(10,5);
// console.log(segiEmpat.luas);

// segiEmpat.editLebar = -10;
// segiEmpat.editTinggi = 5;
// // segiEmpat.luas = 100;
// console.log(segiEmpat.luas); 




class akunBank {
    constructor(saldoAwal) {
        this.saldo = saldoAwal;
    }

    get infoSaldo () {
        return this.saldo;
    }

    set tambahSaldo (jumlah){
        if (jumlah >= 0){
            this.saldo += jumlah;
        }else {
            console.error('saldo tidak boleh negatif!');
        }
    }
}

const akun = new akunBank (1000);
console.log(akun.infoSaldo);

akun.tambahSaldo = 1000;
console.log(akun.saldo);






// aplikasi menerapkan class dan interaksi object
// inheritance (pewarisan)
// getter setter (opsional)
// contoh== hero vs monster 
// ada poin setiap menyerang/diserang
// siapa yang duluan habis nyawanya
// objeknya saling berinteraksi
// ok
// class object pewarisan
// bit.ly/PBO.js
// tambahkan keterangan.
// method ini fungsinya ini, ini, ini dll
// bisa pak
// Folder
// Tugas2_105841107021_FaturrohmanAl-Khair_Kelas5C



