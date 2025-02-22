// 5. Input data, mengubah dan hapus data mahasiswa

const mahasiswa1 = new Mahasiswa('Ambo', 20, true);
const mahasiswa2 = new Mahasiswa('Budi', 21, false);
const mahasiswa3 = new Mahasiswa('Cika', 21, false);

mahasiswa1.tampilkanSemuaMahasiswa();

Mahasiswa.ubahMahasiswa(1, 'Budi Raharjo', 23, true);

mahasiswa1.tampilkanSemuaMahasiswa();

Mahasiswa.hapusMahasiswa(0);

mahasiswa1.tampilkanSemuaMahasiswa();