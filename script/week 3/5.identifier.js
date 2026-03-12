// IDENTIFIER (NAMA VARIABEL) DALAM JAVASCRIPT

/*
Identifier adalah nama yang digunakan untuk memberi identitas pada 
variabel, fungsi, objek, atau parameter dalam program
*/

console.log("IDENTIFIER (NAMA VARIABEL) DALAM JAVASCRIPT\n");

// PENGENALAN IDENTIFIER

console.log("Pengenalan Identifier");
console.log("Identifier adalah nama yang kita buat agar komputer bisa mengenali data atau fungsi\n");

// Contoh dasar identifier
let nama = "Budi";
let umur = 20;
let nilai_mahasiswa = 85;
let totalHarga = 50000;

console.log("Contoh identifier dasar:");
console.log("nama:", nama);
console.log("umur:", umur);
console.log("nilai_mahasiswa:", nilai_mahasiswa);
console.log("totalHarga:", totalHarga);
console.log("");

// FUNGSI IDENTIFIER DALAM PROGRAM

console.log("Fungsi Identifier dalam Program");
console.log("Identifier digunakan untuk:");
console.log("1. Menyimpan data dalam variabel");
console.log("2. Memberi nama fungsi");
console.log("3. Memberi nama parameter");
console.log("4. Mengakses nilai dalam program\n");

// Contoh identifier untuk fungsi
function hitungLuas() {
    let panjang = 10;    // identifier: panjang
    let lebar = 5;       // identifier: lebar
    let luas = panjang * lebar;  // identifier: luas
    
    console.log("Luas persegi panjang:", luas);
    return luas;
}

console.log("Contoh identifier dalam fungsi:");
hitungLuas();

// Identifier dalam fungsi dengan parameter
function perkenalan(namaOrang, umurOrang) {  // identifier parameter
    let pesan = "Halo, nama saya " + namaOrang + " umur " + umurOrang + " tahun";
    return pesan;
}

console.log("Contoh identifier parameter:");
console.log(perkenalan("Sari", 19));
console.log("");

// ATURAN PENAMAAN IDENTIFIER

console.log("ATURAN PENAMAAN IDENTIFIER\n");

// ATURAN 1: HARUS DIMULAI DENGAN HURUF, UNDERSCORE, ATAU DOLLAR

console.log("1. Harus Dimulai dengan Huruf, Underscore (_), atau Dollar ($)");
console.log("Contoh yang benar:\n");

// Dimulai dengan huruf
let nama_siswa = "Ahmad";
let dataMahasiswa = "Budi";

// Dimulai dengan underscore
let _data = 10;
let _nilai = 95;

// Dimulai dengan dollar
let $harga = 5000;
let $total = 15000;

console.log("Dimulai dengan huruf:");
console.log("nama_siswa:", nama_siswa);
console.log("dataMahasiswa:", dataMahasiswa);

console.log("\nDimulai dengan underscore:");
console.log("_data:", _data);
console.log("_nilai:", _nilai);

console.log("\nDimulai dengan dollar:");
console.log("$harga:", $harga);
console.log("$total:", $total);
console.log("");

// ATURAN 2: TIDAK BOLEH DIMULAI DENGAN ANGKA

console.log("2. Tidak Boleh Dimulai dengan Angka");
console.log("Contoh salah: 1nilai, 123data, 9mahasiswa");
console.log("Jika dicoba akan menghasilkan SyntaxError\n");

/*
Contoh yang akan error:
let 1nilai = 90;     // SyntaxError
let 123data = "test"; // SyntaxError
*/

console.log("Cara yang benar:");
let nilai1 = 90;
let data123 = "test";
let mahasiswa9 = "Andi";

console.log("nilai1:", nilai1);
console.log("data123:", data123);
console.log("mahasiswa9:", mahasiswa9);
console.log("");

// ATURAN 3: BOLEH MENGANDUNG ANGKA SETELAH HURUF

console.log("3. Boleh Mengandung Angka Setelah Huruf");
console.log("Angka boleh digunakan setelah huruf pertama\n");

let nilai1_mahasiswa = 80;
let data2024 = "Tahun ajaran baru";
let mahasiswa2 = "Dewi";
let kelas3A = "Teknik Informatika";
let semester5 = "Ganjil";

console.log("nilai1_mahasiswa:", nilai1_mahasiswa);
console.log("data2024:", data2024);
console.log("mahasiswa2:", mahasiswa2);
console.log("kelas3A:", kelas3A);
console.log("semester5:", semester5);
console.log("");

// ATURAN 4: TIDAK BOLEH MENGGUNAKAN SPASI

console.log("4. Tidak Boleh Menggunakan Spasi");
console.log("Identifier tidak boleh mengandung spasi\n");

console.log("Contoh salah: total harga, nama mahasiswa");
console.log("Contoh benar:");

let totalHarga_benar = 50000;
let namaMahasiswa_benar = "Andi";
let nilai_akhir = 88;
let jumlah_barang = 25;

console.log("totalHarga_benar:", totalHarga_benar);
console.log("namaMahasiswa_benar:", namaMahasiswa_benar);
console.log("nilai_akhir:", nilai_akhir);
console.log("jumlah_barang:", jumlah_barang);
console.log("");

// ATURAN 5: TIDAK BOLEH MENGGUNAKAN SIMBOL KHUSUS

console.log("5. Tidak Boleh Menggunakan Simbol Khusus");
console.log("Tidak boleh menggunakan: @ # ! % & *");
console.log("Hanya _ dan $ yang diperbolehkan\n");

/*
Contoh yang salah:
let harga#barang = 1000;  // Error
let nilai@akhir = 90;     // Error
let total!harga = 5000;   // Error
*/

console.log("Yang diperbolehkan:");
let harga_barang = 1000;
let nilai_akhir_mahasiswa = 90;
let $totalHarga = 5000;
let _dataPrivat = "rahasia";

console.log("harga_barang:", harga_barang);
console.log("nilai_akhir_mahasiswa:", nilai_akhir_mahasiswa);
console.log("$totalHarga:", $totalHarga);
console.log("_dataPrivat:", _dataPrivat);
console.log("");

// PRAKTIK PENAMAAN YANG BAIK - CAMELCASE

console.log("PRAKTIK PENAMAAN YANG BAIK");
console.log("Dalam JavaScript biasanya digunakan camelCase\n");

let namaMahasiswa_camel = "Budi";
let totalHarga_camel = 100000;
let jumlahBarang_camel = 15;
let nilaiAkhir_camel = 85;
let statusKehadiran = true;
let alamatRumah = "Jl. Merdeka No. 10";

console.log("Contoh camelCase:");
console.log("namaMahasiswa_camel:", namaMahasiswa_camel);
console.log("totalHarga_camel:", totalHarga_camel);
console.log("jumlahBarang_camel:", jumlahBarang_camel);
console.log("nilaiAkhir_camel:", nilaiAkhir_camel);
console.log("statusKehadiran:", statusKehadiran);
console.log("alamatRumah:", alamatRumah);
console.log("");

// CONTOH PROGRAM DENGAN IDENTIFIER YANG BAIK

console.log("CONTOH PROGRAM DENGAN IDENTIFIER YANG BAIK");
console.log("Program perhitungan IPK mahasiswa\n");

// Data mahasiswa dengan identifier yang jelas
let nimMahasiswa = "12345678";
let namaMahasiswaLengkap = "Sari Indah Permata";
let jurusanMahasiswa = "Teknik Informatika";
let semesterSekarang = 6;

// Data nilai
let nilaiMataKuliah1 = 85;  // Pemrograman Web
let nilaiMataKuliah2 = 90;  // Basis Data
let nilaiMataKuliah3 = 78;  // Matematika Diskrit
let nilaiMataKuliah4 = 88;  // Algoritma

// SKS mata kuliah
let sks1 = 3;
let sks2 = 3;
let sks3 = 2;
let sks4 = 3;

// Perhitungan IPK
let totalNilaiSKS = (nilaiMataKuliah1 * sks1) + (nilaiMataKuliah2 * sks2) + 
                   (nilaiMataKuliah3 * sks3) + (nilaiMataKuliah4 * sks4);
let totalSKS = sks1 + sks2 + sks3 + sks4;
let ipkMahasiswa = totalNilaiSKS / totalSKS;

console.log("DATA MAHASISWA:");
console.log("NIM:", nimMahasiswa);
console.log("Nama:", namaMahasiswaLengkap);
console.log("Jurusan:", jurusanMahasiswa);
console.log("Semester:", semesterSekarang);

console.log("\nNILAI MATA KULIAH:");
console.log("Pemrograman Web (3 SKS):", nilaiMataKuliah1);
console.log("Basis Data (3 SKS):", nilaiMataKuliah2);
console.log("Matematika Diskrit (2 SKS):", nilaiMataKuliah3);
console.log("Algoritma (3 SKS):", nilaiMataKuliah4);

console.log("\nHASIL PERHITUNGAN:");
console.log("Total SKS:", totalSKS);
console.log("IPK:", ipkMahasiswa.toFixed(2));
console.log("");

// PERBANDINGAN IDENTIFIER YANG BAIK VS BURUK

console.log("PERBANDINGAN IDENTIFIER BAIK VS BURUK\n");

console.log("Contoh identifier yang BURUK:");
console.log("(Benar secara sintaks tapi tidak jelas maknanya)\n");

let a = "Budi";
let x1 = 20;
let data12345 = 85;
let z = true;

console.log("a:", a);
console.log("x1:", x1);
console.log("data12345:", data12345);
console.log("z:", z);

console.log("\nContoh identifier yang BAIK:");
console.log("(Jelas dan mudah dipahami)\n");

let namaLengkapSiswa = "Budi";
let umurSiswa = 20;
let nilaiUjianAkhir = 85;
let statusKelulusan = true;

console.log("namaLengkapSiswa:", namaLengkapSiswa);
console.log("umurSiswa:", umurSiswa);
console.log("nilaiUjianAkhir:", nilaiUjianAkhir);
console.log("statusKelulusan:", statusKelulusan);
console.log("");

// CONTOH IDENTIFIER DALAM FUNGSI KOMPLEKS

console.log("CONTOH IDENTIFIER DALAM FUNGSI KOMPLEKS");
console.log("Program kasir sederhana\n");

function hitungTotalBelanja(hargaBarang1, jumlahBarang1, hargaBarang2, jumlahBarang2) {
    let subtotalBarang1 = hargaBarang1 * jumlahBarang1;
    let subtotalBarang2 = hargaBarang2 * jumlahBarang2;
    let totalSebelumPajak = subtotalBarang1 + subtotalBarang2;
    let persentasePajak = 0.1; // 10%
    let nominalPajak = totalSebelumPajak * persentasePajak;
    let totalSetelahPajak = totalSebelumPajak + nominalPajak;
    
    console.log("STRUK BELANJA:");
    console.log("Barang 1: Rp", hargaBarang1.toLocaleString(), "x", jumlahBarang1, "= Rp", subtotalBarang1.toLocaleString());
    console.log("Barang 2: Rp", hargaBarang2.toLocaleString(), "x", jumlahBarang2, "= Rp", subtotalBarang2.toLocaleString());
    console.log("Subtotal: Rp", totalSebelumPajak.toLocaleString());
    console.log("Pajak (10%): Rp", nominalPajak.toLocaleString());
    console.log("TOTAL: Rp", totalSetelahPajak.toLocaleString());
    
    return totalSetelahPajak;
}

// Menggunakan fungsi dengan identifier yang jelas
let hargaBuku = 25000;
let jumlahBuku = 2;
let hargaPulpen = 3000;
let jumlahPulpen = 5;

let totalBayar = hitungTotalBelanja(hargaBuku, jumlahBuku, hargaPulpen, jumlahPulpen);
console.log("");

// TIPS PENAMAAN IDENTIFIER

console.log("TIPS PENAMAAN IDENTIFIER YANG BAIK\n");

console.log("1. Gunakan nama yang deskriptif");
console.log("   Baik: nilaiUjianMatematika");
console.log("   Buruk: x, a, data1");

console.log("\n2. Gunakan camelCase untuk JavaScript");
console.log("   Baik: namaMahasiswa, totalHarga");
console.log("   Hindari: nama_mahasiswa, NamaMahasiswa");

console.log("\n3. Hindari singkatan yang tidak jelas");
console.log("   Baik: jumlahMahasiswa");
console.log("   Buruk: jmlMhs, jMhs");

console.log("\n4. Gunakan kata kerja untuk fungsi");
console.log("   Baik: hitungLuas(), tampilkanData()");
console.log("   Buruk: luas(), data()");

console.log("\n5. Konsisten dalam penamaan");
console.log("   Jika menggunakan 'nama', gunakan terus, jangan campur dengan 'name'");
console.log("");

// KESIMPULAN

console.log("KESIMPULAN");
console.log("Identifier adalah nama yang digunakan untuk variabel, fungsi, atau objek dalam program\n");

console.log("Aturan utama identifier dalam JavaScript:");
console.log("1. Harus dimulai dengan huruf, underscore (_), atau dollar ($)");
console.log("2. Tidak boleh dimulai dengan angka");
console.log("3. Boleh mengandung angka setelah huruf");
console.log("4. Tidak boleh menggunakan spasi");
console.log("5. Tidak boleh menggunakan simbol khusus (kecuali _ dan $)");
console.log("");

console.log("Praktik terbaik:");
console.log("- Gunakan camelCase");
console.log("- Pilih nama yang deskriptif dan jelas");
console.log("- Hindari singkatan yang membingungkan");
console.log("- Konsisten dalam penamaan");
console.log("- Identifier yang baik membuat program mudah dipahami dan dikelola");

console.log("\nProgram identifier JavaScript selesai");
