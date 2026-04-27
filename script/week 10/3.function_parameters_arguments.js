/*
=================================================
WEEK 10 - FUNCTION PARAMETERS & ARGUMENTS
=================================================
File: 3.function_parameters_arguments.js
Materi: Parameter dan Argumen dalam Function

Topik yang dibahas:
1. Parameter vs Argument
2. Default Parameters
3. Rest Parameters
4. Spread Operator
5. Destructuring Parameters
6. Argument Validation
=================================================
*/

console.log("=== PARAMETER DAN ARGUMEN ===\n");

// 1. PARAMETER VS ARGUMENT
console.log("1. PARAMETER VS ARGUMENT");
console.log("Parameter = variabel dalam definisi function");
console.log("Argument = nilai yang diberikan saat memanggil function");
console.log();

function contohParameterArgument(nama, umur) { // nama, umur = parameter
    return `Halo ${nama}, umur ${umur} tahun`;
}

console.log(contohParameterArgument("Andi", 20)); // "Andi", 20 = argument
console.log();

// 2. FUNCTION DENGAN BERBAGAI JUMLAH PARAMETER
console.log("2. BERBAGAI JUMLAH PARAMETER");
console.log();

// Tanpa parameter
function sapaPagi() {
    return "Selamat pagi semua!";
}

// Satu parameter
function sapaNama(nama) {
    return `Selamat pagi, ${nama}!`;
}

// Dua parameter
function sapaLengkap(nama, waktu) {
    return `Selamat ${waktu}, ${nama}!`;
}

// Banyak parameter
function buatProfil(nama, umur, kota, pekerjaan, hobby) {
    return {
        nama: nama,
        umur: umur,
        kota: kota,
        pekerjaan: pekerjaan,
        hobby: hobby
    };
}

console.log("Tanpa parameter:", sapaPagi());
console.log("Satu parameter:", sapaNama("Budi"));
console.log("Dua parameter:", sapaLengkap("Cici", "siang"));
console.log("Lima parameter:", buatProfil("Doni", 25, "Jakarta", "Developer", "Gaming"));
console.log();

// 3. DEFAULT PARAMETERS (ES6)
console.log("3. DEFAULT PARAMETERS");
console.log("Memberikan nilai default jika argument tidak diberikan");
console.log();

function sapa(nama = "Teman", waktu = "hari") {
    return `Selamat ${waktu}, ${nama}!`;
}

function hitungLuasLingkaran(jariJari = 1) {
    return Math.PI * jariJari * jariJari;
}

function buatUser(nama = "Anonymous", umur = 0, aktif = true) {
    return {
        nama: nama,
        umur: umur,
        aktif: aktif,
        tanggalDaftar: new Date().toLocaleDateString('id-ID')
    };
}

console.log("sapa() tanpa argument:", sapa());
console.log("sapa('Eko'):", sapa('Eko'));
console.log("sapa('Fani', 'malam'):", sapa('Fani', 'malam'));
console.log();

console.log("Luas lingkaran default:", hitungLuasLingkaran());
console.log("Luas lingkaran r=5:", hitungLuasLingkaran(5));
console.log();

console.log("User default:", buatUser());
console.log("User dengan nama:", buatUser("Gita"));
console.log("User lengkap:", buatUser("Hadi", 30, false));
console.log();

// Default parameter dengan expression
function buatPesan(pesan, prefix = "INFO", timestamp = new Date().toISOString()) {
    return `[${prefix}] ${timestamp}: ${pesan}`;
}

console.log("Pesan dengan default:", buatPesan("Server started"));
console.log("Pesan dengan prefix:", buatPesan("Error occurred", "ERROR"));
console.log();

// 4. REST PARAMETERS
console.log("4. REST PARAMETERS");
console.log("Mengumpulkan argument yang tidak terbatas dalam array");
console.log();

function jumlahSemua(...angka) {
    let total = 0;
    console.log("Arguments yang diterima:", angka);
    for (let num of angka) {
        total += num;
    }
    return total;
}

function cariTerbesar(...angka) {
    if (angka.length === 0) return undefined;
    return Math.max(...angka);
}

function buatDaftarBelanja(kategori, ...items) {
    return {
        kategori: kategori,
        items: items,
        jumlah: items.length
    };
}

console.log("jumlahSemua(1, 2, 3):", jumlahSemua(1, 2, 3));
console.log("jumlahSemua(5, 10, 15, 20):", jumlahSemua(5, 10, 15, 20));
console.log("cariTerbesar(3, 7, 2, 9, 1):", cariTerbesar(3, 7, 2, 9, 1));
console.log("Daftar belanja:", buatDaftarBelanja("Makanan", "Nasi", "Ayam", "Sayur", "Buah"));
console.log();

// Rest parameters dengan parameter biasa
function prosesNilai(nama, kelas, ...nilai) {
    let total = nilai.reduce((sum, n) => sum + n, 0);
    let rataRata = total / nilai.length;
    
    return {
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        total: total,
        rataRata: rataRata.toFixed(2)
    };
}

console.log("Proses nilai:", prosesNilai("Andi", "10A", 85, 90, 78, 92, 88));
console.log();

// 5. SPREAD OPERATOR
console.log("5. SPREAD OPERATOR");
console.log("Menyebarkan array menjadi argument terpisah");
console.log();

function tambahTigaAngka(a, b, c) {
    return a + b + c;
}

let angka = [5, 10, 15];
console.log("Array angka:", angka);
console.log("Menggunakan spread operator:", tambahTigaAngka(...angka));

// Spread dengan Math functions
let daftarNilai = [3, 7, 2, 9, 1, 5];
console.log("Daftar nilai:", daftarNilai);
console.log("Nilai terbesar:", Math.max(...daftarNilai));
console.log("Nilai terkecil:", Math.min(...daftarNilai));
console.log();

// Menggabungkan array dengan spread
function gabungArray(...arrays) {
    return [].concat(...arrays);
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
console.log("Gabung array:", gabungArray(arr1, arr2, arr3));
console.log();

// 6. DESTRUCTURING PARAMETERS
console.log("6. DESTRUCTURING PARAMETERS");
console.log("Memecah object/array menjadi parameter terpisah");
console.log();

// Destructuring object parameters
function buatKartuIdentitas({nama, umur, kota, pekerjaan}) {
    return `
=== KARTU IDENTITAS ===
Nama: ${nama}
Umur: ${umur} tahun
Kota: ${kota}
Pekerjaan: ${pekerjaan}
======================`;
}

let dataDiri = {
    nama: "Ira",
    umur: 27,
    kota: "Bandung",
    pekerjaan: "Designer"
};

console.log(buatKartuIdentitas(dataDiri));
console.log();

// Destructuring dengan default values
function pengaturanAplikasi({tema = "light", bahasa = "id", notifikasi = true} = {}) {
    return {
        tema: tema,
        bahasa: bahasa,
        notifikasi: notifikasi
    };
}

console.log("Default settings:", pengaturanAplikasi());
console.log("Custom settings:", pengaturanAplikasi({tema: "dark", bahasa: "en"}));
console.log();

// Destructuring array parameters
function hitungJarak([x1, y1], [x2, y2]) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

let titik1 = [0, 0];
let titik2 = [3, 4];
console.log(`Jarak antara ${titik1} dan ${titik2}:`, hitungJarak(titik1, titik2));
console.log();

// Destructuring nested objects
function prosesTransaksi({user: {nama, id}, produk: {nama: namaProduk, harga}, jumlah}) {
    let total = harga * jumlah;
    return {
        pembeli: nama,
        userId: id,
        produk: namaProduk,
        jumlah: jumlah,
        hargaSatuan: harga,
        totalHarga: total
    };
}

let transaksi = {
    user: {nama: "Joko", id: "USR001"},
    produk: {nama: "Laptop", harga: 10000000},
    jumlah: 1
};

console.log("Proses transaksi:", prosesTransaksi(transaksi));
console.log();

// 7. ARGUMENT VALIDATION
console.log("7. ARGUMENT VALIDATION");
console.log("Memvalidasi argument yang diberikan");
console.log();

function bagi(a, b) {
    // Validasi tipe data
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Kedua parameter harus berupa number");
    }
    
    // Validasi pembagian dengan nol
    if (b === 0) {
        throw new Error("Tidak dapat membagi dengan nol");
    }
    
    return a / b;
}

function buatEmail(nama, domain) {
    // Validasi parameter kosong
    if (!nama || !domain) {
        throw new Error("Nama dan domain harus diisi");
    }
    
    // Validasi tipe string
    if (typeof nama !== 'string' || typeof domain !== 'string') {
        throw new Error("Nama dan domain harus berupa string");
    }
    
    return `${nama.toLowerCase()}@${domain.toLowerCase()}`;
}

// Testing dengan input valid
try {
    console.log("bagi(10, 2):", bagi(10, 2));
    console.log("buatEmail('Kiki', 'Gmail.com'):", buatEmail('Kiki', 'Gmail.com'));
} catch (e) {
    console.log("Error:", e.message);
}

// Testing dengan input invalid
console.log("\nTesting dengan input invalid:");
try {
    console.log(bagi(10, 0)); // Error: pembagian nol
} catch (e) {
    console.log("Error:", e.message);
}

try {
    console.log(bagi("10", 2)); // Error: tipe data
} catch (e) {
    console.log("Error:", e.message);
}

try {
    console.log(buatEmail("", "gmail.com")); // Error: parameter kosong
} catch (e) {
    console.log("Error:", e.message);
}
console.log();

// 8. FLEXIBLE FUNCTION PARAMETERS
console.log("8. FLEXIBLE FUNCTION PARAMETERS");
console.log("Function yang dapat menerima berbagai format input");
console.log();

function formatTanggal(tanggal, format = 'dd/mm/yyyy') {
    let date;
    
    // Flexible input: string, number (timestamp), atau Date object
    if (typeof tanggal === 'string') {
        date = new Date(tanggal);
    } else if (typeof tanggal === 'number') {
        date = new Date(tanggal);
    } else if (tanggal instanceof Date) {
        date = tanggal;
    } else {
        throw new Error("Format tanggal tidak valid");
    }
    
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    
    switch(format) {
        case 'dd/mm/yyyy':
            return `${day}/${month}/${year}`;
        case 'yyyy-mm-dd':
            return `${year}-${month}-${day}`;
        case 'dd-mm-yyyy':
            return `${day}-${month}-${year}`;
        default:
            return `${day}/${month}/${year}`;
    }
}

console.log("Dari string:", formatTanggal('2024-01-15'));
console.log("Dari timestamp:", formatTanggal(Date.now()));
console.log("Dari Date object:", formatTanggal(new Date()));
console.log("Format ISO:", formatTanggal('2024-01-15', 'yyyy-mm-dd'));
console.log();

// 9. CONTOH PRAKTIS: SISTEM PEMESANAN
console.log("9. CONTOH PRAKTIS: SISTEM PEMESANAN");
console.log();

function buatPesanan({
    pelanggan,
    items = [],
    diskon = 0,
    pengiriman = 'regular',
    alamat,
    catatan = ''
} = {}) {
    // Validasi input wajib
    if (!pelanggan || !alamat) {
        throw new Error("Data pelanggan dan alamat harus diisi");
    }
    
    if (!Array.isArray(items) || items.length === 0) {
        throw new Error("Minimal harus ada satu item pesanan");
    }
    
    // Hitung total
    let subtotal = items.reduce((total, item) => {
        return total + (item.harga * item.jumlah);
    }, 0);
    
    let potongan = subtotal * (diskon / 100);
    let ongkir = pengiriman === 'express' ? 25000 : 10000;
    let totalHarga = subtotal - potongan + ongkir;
    
    return {
        id: 'ORDER-' + Date.now(),
        pelanggan: pelanggan,
        items: items,
        subtotal: subtotal,
        diskon: diskon,
        potongan: potongan,
        ongkir: ongkir,
        total: totalHarga,
        pengiriman: pengiriman,
        alamat: alamat,
        catatan: catatan,
        tanggal: new Date().toLocaleString('id-ID')
    };
}

let pesananBaru = buatPesanan({
    pelanggan: {nama: "Lina", email: "lina@email.com"},
    items: [
        {nama: "Baju", harga: 150000, jumlah: 2},
        {nama: "Celana", harga: 200000, jumlah: 1}
    ],
    diskon: 10,
    pengiriman: 'express',
    alamat: "Jl. Merdeka No. 123, Jakarta",
    catatan: "Kirim sore hari"
});

console.log("Pesanan berhasil dibuat:");
console.log(pesananBaru);
console.log();

console.log("=== SELESAI: PARAMETER DAN ARGUMEN ===");