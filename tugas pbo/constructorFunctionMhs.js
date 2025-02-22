// Fatur al khair
// 1. Constructor function Mahasiswa

function Mahasiswa(nama, umur, statusAktif) {
    let _nama = nama;
    let _umur = umur;
    let _statusAktif = statusAktif;

    this.tampilkanInfo = function () {
        console.log(`Nama: ${_nama}`);
        console.log(`Umur: ${-umur}`);
        console.log(`Status Aktif: ${_statusAktif ? 'Aktif' : 'Tidak Aktif'}`);


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

