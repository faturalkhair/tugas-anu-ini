// 3

//

// mengubah data mahasiswaaaaaa

Mahasiswa.ubahMahasiswa = function (index, nama, umur, statusAktif) {
    if (index >= 0 && index < Mahasiswa.daftarMahasiswa.length) {
        const mahasiswa = Mahasiswa.daftarMahasiswa[index];
        if (nama) mahasiswa.ubahNama(nama);
        if (umur) mahasiswa.ubahUmur(umur);
        if (statusAktif !== undefined) mahasiswa.ubahStatusAktif(statusAktif);
        console.log(`Data mahasiswa ke-${index + 1} telah diperbarui.`);
    } else {
        console.log('Index mahasiswa tidak valid.');
    }
};
