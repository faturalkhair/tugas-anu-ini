// 4 JANUARI 2025

// inheritance (pewarisan)
// ES6 dalam fitur class. kata kunci extends
// class inheritance sama sepeeti prototype inheritance, only have 1 parent class

//

// Pewarisan==> konsep dalam PBO dimana sebuah kelas (class) bisa mewarisi properti dan metode dari kelas lain.

// ANALOGI:
// memiliki kelas, memiliki kelas induk bernama KUE. kelas ini memiliki properti == rasa dan harga serta METODE == deskripsi()
// kelas KueBasah dan KueKering bisa mewarisi properti & metode tsb, bisa jg memiliki properti/meth unik masing"
// haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// 


// Kelas tanpa pewarisan
// class Kue {
//     deskripsi (rasa){ 
//         console.log(`Kue ${this.nama} memiliki rasa ${rasa}`);

//     }
// }

// const KueCoklat = new Kue ();
// KueCoklat.nama = 'Bolu';  // property 
// KueCoklat.deskripsi("ya rasa Coklat");  // methood

// const KueKeju = new Kue ();
// KueKeju.nama = 'Onde Onde';
// KueKeju.deskripsi("Onde onde laahh");




// class Kue {
//     deskripsi (rasa){ 
//         console.log(`Kue ${this.nama} memiliki rasa ${rasa}`);

//     }
// }
// class KueBasah extends Kue {

//     // deskripsi(rasa){
//     //     console.log(`Kue basa ${this.nama} memiliki rasa ${rasa}`);
//     // }

//     // meskipun dihapus, akan mewarisi
// }

// const KueCoklat = new Kue ();
// KueCoklat.nama = 'Bolu';  // property 
// KueCoklat.deskripsi("ya rasa Coklat");  // methood

// const KuePudding = new KueBasah ();
// KuePudding.nama = 'Pudding';
// KuePudding.deskripsi("Taro");

//SUPER CONSTRUCTOR
// menampung property == tujuannya
// keyword super 
// untuk memanggil constructor super class



class Kue {
    constructor(nama) {
        this.nama = nama;
    }

    deskripsi(rasa) {
        console.log(`Kue ${this.nama} memiliki rasa ${rasa}`);
    }

    infoBahan() {
        console.log(
            `Kue ${this.nama} terbuat dari bahan dasar tepung, gula, dan telur`
        );
    }
}

class KueBasah extends Kue {
    constructor(nama, harga) {
        super(nama);
        this.harga = harga;
    }

    deskripsi(rasa) {
        console.log(`Kue basah ${this.nama} memiliki rasa ${rasa}`);
        console.log(`Kue basah ${this.nama} memiliki harga ${this.harga}`);
        super.infoBahan(); // Memanggil fungsi infoBahan dari kelas induk
    }
}

const kueCetak = new Kue("Nastar");
kueCetak.deskripsi("coklat");
kueCetak.infoBahan();

const kuePudding = new KueBasah("Pudding", "300 T");
kuePudding.deskripsi("vanilla");




// kendaraan properti merk model tahun
// constructor this.merk this.model this.tahun

// deskripsi menjelaskan kendaraan tapi memanggil model tahun merk

// kelas kendaraanBensin == kapasitasTangki
// menggunakan extends kendaraan // bisa mengakses merk model tahun menggunakan super
// properti sndiri = tangki = angka


// kelas Kendaraanlistrik == kapasitasBaterai
// properti kapasitas

// berbeda dari segi kapasitas




// gambar studi kasus
//                         Kendaraan
//                         merk
//                         model
//                         tahun
//                         deskripsi()

//                             |
// kendaraanBensin             |           Kendaraan Listrik
// kapasitasTangki                         kapasitasBaterai
// IsiBensin()                             IsiDaya()



class Kendaraan {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
    }

    deskripsi() {
        console.log(`Motor ${this.merk} model ${this.model} keluaran tahun ${this.tahun}`);
    }
}

class MotorBensin extends Kendaraan {
    constructor(merk, model, tahun, kapasitasTangki) {
        super(merk, model, tahun);
        this.kapasitasTangki = kapasitasTangki;
        this.tangki = 0;
    }

    isiBensin(jumlah) {
        this.tangki += jumlah;
        if (this.tangki > this.kapasitasTangki) {
            this.tangki = this.kapasitasTangki;
        }
        console.log(`Tangki sekarang terisi ${this.tangki} liter (kapasitas maksimal: ${this.kapasitasTangki} liter).`);
    }
}

class MotorListrik extends Kendaraan {
    constructor(merk, model, tahun, kapasitasBaterai) {
        super(merk, model, tahun);
        this.kapasitasBaterai = kapasitasBaterai;
        this.kapasitas = 0;
    }

    isiDaya(jumlah) {
        this.kapasitas += jumlah;
        if (this.kapasitas > this.kapasitasBaterai) {
            this.kapasitas = this.kapasitasBaterai;
        }
        console.log(`Baterai sekarang terisi ${this.kapasitas} kWh (kapasitas maksimal: ${this.kapasitasBaterai} kWh).`);
    }
}

const motorBensin = new MotorBensin("Honda", "CBR", 2020, 15);
motorBensin.deskripsi();
motorBensin.isiBensin(10);

const motorListrik = new MotorListrik("Vespa", "Elettrica", 2023, 4);
motorListrik.deskripsi();
motorListrik.isiDaya(2);
