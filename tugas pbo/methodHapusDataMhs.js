// 4. method hapus data mahasiswa

Mahasiswa.hapusMahasiswa = function (index) {
    if (index >= 0 && index < Mahasiswa.daftarMahasiswa.length) {
        Mahasiswa.daftarMahasiswa.splice(index, 1);
        console.log('Mahasiswa telah dihapus.');
    } else {
        console.log('Index mahasiswa tidak valid.');
    }
};
