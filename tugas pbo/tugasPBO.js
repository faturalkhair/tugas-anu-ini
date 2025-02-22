// COnstruction
function Mahasiswa(nama, umur, statusAktif) {
    let _nama = nama;
    let _umur = umur;
    let _statusAktif = statusAktif;

    this.tampilkanInfo = function () {
        console.log(`Nama: ${_nama}`);
        console.log(`Umur: ${_umur}`);
        console.log(`Status Aktif: ${_statusAktif ? 'Aktif ji' : 'Tidak Aktif ki'}`);
    };

    this.ubahNama = function (namaBaru) {
        _nama = namaBaru;
    };

 this.ubahUmur = function (umurBaru) {
        _umur = umurBaru;
    };

    this.ubahStatusAktif = function (statusBaru) {
        _statusAktif = statusBaru;
    };



    Mahasiswa.daftarMahasiswa.push(this);
}

Mahasiswa.daftarMahasiswa = [];

// 2. Prototype yang mmenampilkan seluruh semua data mahasiswaaa
 
Mahasiswa.prototype.tampilkanSemuaMahasiswa = function () {
    if (Mahasiswa.daftarMahasiswa.length === 0) {
        console.log('Tidak ada data mahasiswa nyaaaa.');
    } else {
        console.log('Ini Daftar Mahasiswa:');
        Mahasiswa.daftarMahasiswa.forEach((mhs, index) => {
            console.log(`\nMahasiswa ke-${index + 1}:`);
            mhs.tampilkanInfo();
        });
    }
};

//3. methi0d mengubah data mahasiswaaaaaa

Mahasiswa.ubahMahasiswa = function (index, nama, umur, statusAktif) {
    if (index >= 0 && index < Mahasiswa.daftarMahasiswa.length) {
        const mahasiswa = Mahasiswa.daftarMahasiswa[index];
        if (nama) mahasiswa.ubahNama(nama);
        if (umur) mahasiswa.ubahUmur(umur);

        if (statusAktif !== undefined) mahasiswa.ubahStatusAktif(statusAktif);
        console.log(`Data mahasiswa ke-${index + 1} sudah mi diperbarui.`);

    } else {
        console.log('Index mahasiswa tidak valid ki.');
    }
};


// 4 
//  method hapus data mahasiswa

Mahasiswa.hapusMahasiswa = function (index) {
    if (index >= 0 && index < Mahasiswa.daftarMahasiswa.length) {
        Mahasiswa.daftarMahasiswa.splice(index, 1);
        console.log('Mahasiswa sudah mi dihapus.');

    } else {
        console.log('Index mahasiswa-Nya tidak valid ki.');
    }
};

// 5
// 5555. 
// 5. Input data, mengubah dan hapus data mahasiswa

const mahasiswa1 = new Mahasiswa('Ambo', 20, true);
const mahasiswa2 = new Mahasiswa('Budi', 21, false);
const mahasiswa3 = new Mahasiswa('Cika', 21, false);
const mahasiswa4 = new Mahasiswa('Fatur', 21, true);
const mahasiswa5 = new Mahasiswa('Aliyah', 22, false);
const mahasiswa6 = new Mahasiswa('Sasa Botto', 21, false);
const mahasiswa7 = new Mahasiswa('Ika garang', 21, true);
const mahasiswa8 = new Mahasiswa('Wawan gantenk', 21, true);
const mahasiswa9 = new Mahasiswa('mus riall', 21, true);
const mahasiswa10 = new Mahasiswa('Ariel Noah', 21, true);

mahasiswa1.tampilkanSemuaMahasiswa();
Mahasiswa.ubahMahasiswa(1, 'Budi Raharjo', 23, true);


mahasiswa1.tampilkanSemuaMahasiswa();
Mahasiswa.hapusMahasiswa(0);

mahasiswa1.tampilkanSemuaMahasiswa();



// closure 
// ketika kita buat mahasiswa ==== true berarti aktif ya (Pak Asyraf)
// memanggil fungsi yang menampilkan semua mahasiswa 
// cek indeks
// mengubah data mahasiswa, cek index. ada atau tidak
// mengubahh nama umur nya