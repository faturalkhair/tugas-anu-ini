// 2
// Prototype menampilkan seluruh data mahasiswa
// tugas pak asyraf

Mahasiswa.prototype.tampilkanSemuaMahasiswa = function () {
    if (Mahasiswa.daftarMahasiswa.length === 0) {
        console.log('Tidak ada data mahasiswa.');
    } else {
        console.log('Daftar Mahasiswa:');
        Mahasiswa.daftarMahasiswa.forEach((mhs, index) => {
            console.log(`\nMahasiswa ke-${index + 1}:`);
            mhs.tampilkanInfo();
        });
    }
};
