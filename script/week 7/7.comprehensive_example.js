// ==========================================
// PROGRAM COMPREHENSIVE: SISTEM PERPUSTAKAAN
// Menggabungkan semua konsep Object Week 7
// ==========================================

console.log("=== SISTEM PERPUSTAKAAN DIGITAL ===");
console.log("Program ini menggabungkan semua konsep Object dalam JavaScript\n");

// ==========================================
// 1. OBJECT BASICS - Konfigurasi Sistem
// ==========================================

console.log("=== 1. OBJECT BASICS: KONFIGURASI SISTEM ===");

// Object literal untuk konfigurasi (key-value pairs)
const CONFIG = {
    namaPerpustakaan: "Perpustakaan Digital Kampus",
    versi: "2.0",
    maxPinjam: 3,
    dendaPerHari: 1000,
    hariPinjamMaksimal: 14
};

console.log("Nama:", CONFIG.namaPerpustakaan);
console.log("Versi:", CONFIG.versi);
console.log("Maks. Pinjam:", CONFIG.maxPinjam, "buku");
console.log("Denda per hari:", "Rp" + CONFIG.dendaPerHari);

// Object sebagai associative array
let kategori = {
    "FIK": "Fiksi",
    "NON": "Non-Fiksi",
    "TEK": "Teknologi",
    "SAI": "Sains",
    "SEJ": "Sejarah"
};

console.log("\nKategori Buku:");
console.log("Kode FIK:", kategori["FIK"]);
console.log("Kode TEK:", kategori["TEK"]);

// Nested object
let lokasiBuku = {
    lantai1: {
        rak: ["Fiksi", "Non-Fiksi"],
        kapasitas: 500
    },
    lantai2: {
        rak: ["Teknologi", "Sains", "Sejarah"],
        kapasitas: 800
    }
};

console.log("\nLokasi - Lantai 1:", lokasiBuku.lantai1.rak.join(", "));
console.log("Lokasi - Lantai 2:", lokasiBuku.lantai2.rak.join(", "));
console.log("Total Kapasitas:", lokasiBuku.lantai1.kapasitas + lokasiBuku.lantai2.kapasitas, "buku");

// ==========================================
// 2. OBJECT CREATION METHODS - Membuat Buku
// ==========================================

console.log("\n=== 2. OBJECT CREATION: MEMBUAT DATA BUKU ===");

// Cara 1: Object Literal
let buku1 = {
    id: "B001",
    judul: "Belajar JavaScript",
    penulis: "Ahmad Fauzi",
    kategori: "TEK",
    tahun: 2023,
    tersedia: true
};

console.log("Buku (literal):", buku1.judul, "-", buku1.penulis);

// Cara 2: Constructor Function
function Buku(id, judul, penulis, kategori, tahun) {
    this.id = id;
    this.judul = judul;
    this.penulis = penulis;
    this.kategori = kategori;
    this.tahun = tahun;
    this.tersedia = true;
}

let buku2 = new Buku("B002", "Algoritma dan Struktur Data", "Budi Santoso", "TEK", 2022);
let buku3 = new Buku("B003", "Laskar Pelangi", "Andrea Hirata", "FIK", 2005);

console.log("Buku (constructor):", buku2.judul);
console.log("Buku (constructor):", buku3.judul);

// Cara 3: Object.create() - dengan prototype
let bukuPrototype = {
    getInfo() {
        return `${this.judul} oleh ${this.penulis} (${this.tahun})`;
    },
    getKategori() {
        return kategori[this.kategori] || "Tidak diketahui";
    }
};

let buku4 = Object.create(bukuPrototype);
buku4.id = "B004";
buku4.judul = "Sejarah Indonesia";
buku4.penulis = "Siti Rahmawati";
buku4.kategori = "SEJ";
buku4.tahun = 2020;
buku4.tersedia = true;

console.log("Buku (Object.create):", buku4.getInfo());
console.log("Kategori:", buku4.getKategori());

// Cara 4: ES6 Class
class BukuDigital {
    constructor(id, judul, penulis, kategori, tahun, format) {
        this.id = id;
        this.judul = judul;
        this.penulis = penulis;
        this.kategori = kategori;
        this.tahun = tahun;
        this.tersedia = true;
        this.format = format;
    }

    getInfo() {
        return `[${this.format}] ${this.judul} - ${this.penulis}`;
    }
}

let buku5 = new BukuDigital("B005", "Machine Learning Dasar", "Dian Pratiwi", "TEK", 2024, "PDF");
console.log("Buku (class):", buku5.getInfo());

// ==========================================
// 3. PROPERTY OPERATIONS - Manajemen Data
// ==========================================

console.log("\n=== 3. PROPERTY OPERATIONS: MANAJEMEN DATA ===");

// Database buku menggunakan array of objects
let databaseBuku = [buku1, buku2, buku3, buku4, buku5];

// Dot notation vs bracket notation
console.log("Dot notation:", buku1.judul);
console.log("Bracket notation:", buku1["penulis"]);

// Dynamic property access
let field = "tahun";
console.log("Dynamic access (" + field + "):", buku1[field]);

// Menambah property baru
buku1.halaman = 350;
buku1.isbn = "978-602-1234-56-7";
console.log("\nSetelah tambah property:");
console.log("Halaman:", buku1.halaman);
console.log("ISBN:", buku1.isbn);

// Mengubah property
buku1.tahun = 2024;
console.log("Tahun diupdate:", buku1.tahun);

// Object.assign untuk batch update
let updateData = { edisi: 2, penerbit: "Gramedia" };
Object.assign(buku1, updateData);
console.log("Setelah Object.assign:", buku1.edisi, "-", buku1.penerbit);

// Spread operator untuk copy dan merge
let bukuCopy = { ...buku1, stok: 5 };
console.log("Copy + tambah property:", bukuCopy.judul, "- Stok:", bukuCopy.stok);

// Menghapus property
delete bukuCopy.isbn;
console.log("Setelah delete isbn:", "isbn" in bukuCopy ? "masih ada" : "sudah dihapus");

// Mengecek property
console.log("\nCek property buku1:");
console.log("'judul' in buku1:", "judul" in buku1);
console.log("hasOwnProperty('kategori'):", buku1.hasOwnProperty("kategori"));
console.log("'rating' in buku1:", "rating" in buku1);
console.log("buku1.rating !== undefined:", buku1.rating !== undefined);

// ==========================================
// 4. OBJECT METHODS - Sistem Perpustakaan
// ==========================================

console.log("\n=== 4. OBJECT METHODS: SISTEM PERPUSTAKAAN ===");

// Object dengan methods, this, getter/setter
let perpustakaan = {
    nama: CONFIG.namaPerpustakaan,
    buku: databaseBuku,
    anggota: [],
    transaksi: [],
    _nextAnggotaId: 1,

    // --- Method: Registrasi Anggota ---
    registrasiAnggota(nama, jurusan, email) {
        let anggota = {
            id: "A" + String(this._nextAnggotaId++).padStart(3, "0"),
            nama: nama,
            jurusan: jurusan,
            email: email,
            bukuDipinjam: [],
            totalDenda: 0
        };
        this.anggota.push(anggota);
        return `Anggota ${anggota.nama} terdaftar (ID: ${anggota.id})`;
    },

    // --- Method: Pinjam Buku ---
    pinjamBuku(anggotaId, bukuId) {
        let anggota = this.anggota.find(a => a.id === anggotaId);
        if (!anggota) return "Error: Anggota tidak ditemukan";

        let buku = this.buku.find(b => b.id === bukuId);
        if (!buku) return "Error: Buku tidak ditemukan";

        if (!buku.tersedia) return `Error: Buku "${buku.judul}" sedang dipinjam`;

        if (anggota.bukuDipinjam.length >= CONFIG.maxPinjam) {
            return `Error: Maks. pinjam ${CONFIG.maxPinjam} buku tercapai`;
        }

        // Proses peminjaman
        buku.tersedia = false;
        let tanggalPinjam = new Date();
        let tanggalKembali = new Date();
        tanggalKembali.setDate(tanggalKembali.getDate() + CONFIG.hariPinjamMaksimal);

        let transaksi = {
            anggotaId: anggotaId,
            bukuId: bukuId,
            tanggalPinjam: tanggalPinjam.toISOString().split("T")[0],
            tanggalBatasKembali: tanggalKembali.toISOString().split("T")[0],
            tanggalKembali: null,
            denda: 0,
            status: "Dipinjam"
        };

        this.transaksi.push(transaksi);
        anggota.bukuDipinjam.push(bukuId);

        return `"${buku.judul}" dipinjam oleh ${anggota.nama} (kembali: ${transaksi.tanggalBatasKembali})`;
    },

    // --- Method: Kembalikan Buku ---
    kembalikanBuku(anggotaId, bukuId) {
        let anggota = this.anggota.find(a => a.id === anggotaId);
        if (!anggota) return "Error: Anggota tidak ditemukan";

        let buku = this.buku.find(b => b.id === bukuId);
        if (!buku) return "Error: Buku tidak ditemukan";

        let transaksi = this.transaksi.find(
            t => t.anggotaId === anggotaId && t.bukuId === bukuId && t.status === "Dipinjam"
        );
        if (!transaksi) return "Error: Transaksi tidak ditemukan";

        // Proses pengembalian
        buku.tersedia = true;
        transaksi.tanggalKembali = new Date().toISOString().split("T")[0];
        transaksi.status = "Dikembalikan";

        // Hapus dari daftar pinjam anggota
        anggota.bukuDipinjam = anggota.bukuDipinjam.filter(id => id !== bukuId);

        return `"${buku.judul}" dikembalikan oleh ${anggota.nama}`;
    },

    // --- Method: Cari Buku ---
    cariBuku(keyword) {
        let hasil = this.buku.filter(b =>
            b.judul.toLowerCase().includes(keyword.toLowerCase()) ||
            b.penulis.toLowerCase().includes(keyword.toLowerCase())
        );
        return hasil;
    },

    // --- Getter: Jumlah Buku ---
    get totalBuku() {
        return this.buku.length;
    },

    // --- Getter: Buku Tersedia ---
    get bukuTersedia() {
        return this.buku.filter(b => b.tersedia).length;
    },

    // --- Getter: Total Anggota ---
    get totalAnggota() {
        return this.anggota.length;
    },

    // --- Method: Tampilkan Statistik ---
    tampilkanStatistik() {
        console.log("\n--- Statistik Perpustakaan ---");
        console.log("Total Buku:", this.totalBuku);
        console.log("Buku Tersedia:", this.bukuTersedia);
        console.log("Buku Dipinjam:", this.totalBuku - this.bukuTersedia);
        console.log("Total Anggota:", this.totalAnggota);
        console.log("Total Transaksi:", this.transaksi.length);
    }
};

// --- Testing Registrasi ---
console.log(perpustakaan.registrasiAnggota("Andi Pratama", "Teknik Informatika", "andi@kampus.ac.id"));
console.log(perpustakaan.registrasiAnggota("Sari Dewi", "Sistem Informasi", "sari@kampus.ac.id"));
console.log(perpustakaan.registrasiAnggota("Rudi Hartono", "Manajemen", "rudi@kampus.ac.id"));

// --- Testing Peminjaman ---
console.log("\n--- Peminjaman Buku ---");
console.log(perpustakaan.pinjamBuku("A001", "B001"));
console.log(perpustakaan.pinjamBuku("A001", "B003"));
console.log(perpustakaan.pinjamBuku("A002", "B002"));
console.log(perpustakaan.pinjamBuku("A003", "B005"));

// Test error: buku sudah dipinjam
console.log(perpustakaan.pinjamBuku("A002", "B001"));

// --- Testing Pencarian ---
console.log("\n--- Cari Buku ---");
let hasilCari = perpustakaan.cariBuku("javascript");
console.log("Cari 'javascript':", hasilCari.length, "hasil");
hasilCari.forEach(b => console.log(" -", b.judul, "(" + (b.tersedia ? "Tersedia" : "Dipinjam") + ")"));

// --- Testing Getter ---
console.log("\nGetter - Total Buku:", perpustakaan.totalBuku);
console.log("Getter - Buku Tersedia:", perpustakaan.bukuTersedia);
console.log("Getter - Total Anggota:", perpustakaan.totalAnggota);

// --- Testing Pengembalian ---
console.log("\n--- Pengembalian Buku ---");
console.log(perpustakaan.kembalikanBuku("A001", "B001"));

console.log("Buku tersedia setelah kembali:", perpustakaan.bukuTersedia);

// ==========================================
// 5. OBJECT ITERATION - Laporan Data
// ==========================================

console.log("\n=== 5. OBJECT ITERATION: LAPORAN DATA ===");

// for...in loop
console.log("--- Detail Buku 1 (for...in) ---");
for (let key in buku1) {
    if (buku1.hasOwnProperty(key)) {
        console.log(`  ${key}: ${buku1[key]}`);
    }
}

// Object.keys()
console.log("\nProperty buku1 (Object.keys):", Object.keys(buku1).join(", "));

// Object.values()
console.log("Semua judul buku (Object.values mapping):");
databaseBuku.forEach(b => {
    let values = Object.values(b);
    console.log("  -", values[1]); // index 1 = judul
});

// Object.entries()
console.log("\nDetail Konfigurasi (Object.entries):");
Object.entries(CONFIG).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

// Kombinasi iteration + array methods
console.log("\n--- Laporan Buku per Kategori ---");
let laporanKategori = {};
databaseBuku.forEach(b => {
    let namaKategori = kategori[b.kategori] || b.kategori;
    if (!laporanKategori[namaKategori]) {
        laporanKategori[namaKategori] = [];
    }
    laporanKategori[namaKategori].push(b.judul);
});

Object.entries(laporanKategori).forEach(([kat, bukuList]) => {
    console.log(`${kat} (${bukuList.length} buku):`);
    bukuList.forEach(judul => console.log(`  - ${judul}`));
});

// Statistik dengan reduce
console.log("\n--- Statistik Buku ---");
let statsBuku = databaseBuku.reduce((acc, b) => {
    acc.totalBuku++;
    acc.tersedia += b.tersedia ? 1 : 0;
    acc.dipinjam += !b.tersedia ? 1 : 0;
    if (b.tahun > acc.tahunTerbaru) acc.tahunTerbaru = b.tahun;
    if (b.tahun < acc.tahunTerlama) acc.tahunTerlama = b.tahun;
    return acc;
}, { totalBuku: 0, tersedia: 0, dipinjam: 0, tahunTerbaru: 0, tahunTerlama: 9999 });

Object.entries(statsBuku).forEach(([key, val]) => {
    console.log(`  ${key}: ${val}`);
});

// Serialisasi Object (JSON)
console.log("\n--- Serialisasi Object (JSON) ---");
let bukuJSON = JSON.stringify(buku1, null, 2);
console.log("JSON.stringify buku1:");
console.log(bukuJSON);

let bukuParsed = JSON.parse(bukuJSON);
console.log("JSON.parse kembali:", bukuParsed.judul, "-", bukuParsed.penulis);

// ==========================================
// 6. PROTOTYPE & INHERITANCE - Hirarki Buku
// ==========================================

console.log("\n=== 6. PROTOTYPE & INHERITANCE: HIRARKI MEDIA ===");

// Base class: Media
class Media {
    constructor(id, judul, penulis, tahun) {
        this.id = id;
        this.judul = judul;
        this.penulis = penulis;
        this.tahun = tahun;
        this.tersedia = true;
    }

    getInfo() {
        return `[${this.constructor.name}] ${this.judul} - ${this.penulis} (${this.tahun})`;
    }

    pinjam() {
        if (!this.tersedia) return `"${this.judul}" sedang dipinjam`;
        this.tersedia = false;
        return `"${this.judul}" berhasil dipinjam`;
    }

    kembalikan() {
        this.tersedia = true;
        return `"${this.judul}" berhasil dikembalikan`;
    }

    toString() {
        return this.getInfo();
    }
}

// Child class: BukuFisik
class BukuFisik extends Media {
    constructor(id, judul, penulis, tahun, halaman, rak) {
        super(id, judul, penulis, tahun);
        this.halaman = halaman;
        this.rak = rak;
        this.tipe = "Buku Fisik";
    }

    getInfo() {
        return `${super.getInfo()} - ${this.halaman} hal, Rak: ${this.rak}`;
    }
}

// Child class: EBook
class EBook extends Media {
    constructor(id, judul, penulis, tahun, format, ukuranMB) {
        super(id, judul, penulis, tahun);
        this.format = format;
        this.ukuranMB = ukuranMB;
        this.tipe = "E-Book";
    }

    getInfo() {
        return `${super.getInfo()} - ${this.format}, ${this.ukuranMB}MB`;
    }

    download() {
        return `Download "${this.judul}" (${this.format}, ${this.ukuranMB}MB)`;
    }
}

// Child class: Jurnal
class Jurnal extends Media {
    constructor(id, judul, penulis, tahun, volume, edisi) {
        super(id, judul, penulis, tahun);
        this.volume = volume;
        this.edisi = edisi;
        this.tipe = "Jurnal";
    }

    getInfo() {
        return `${super.getInfo()} - Vol.${this.volume} Ed.${this.edisi}`;
    }
}

// Membuat instance dari masing-masing class
let mediaFisik = new BukuFisik("M001", "Struktur Data dengan Java", "Prof. Hadi", 2023, 450, "A-12");
let mediaEbook = new EBook("M002", "Python untuk Data Science", "Dr. Wati", 2024, "PDF", 25);
let mediaJurnal = new Jurnal("M003", "Analisis Algoritma Sorting", "Tim Riset", 2024, 8, 3);

console.log("--- Daftar Media (Inheritance) ---");
console.log(mediaFisik.getInfo());
console.log(mediaEbook.getInfo());
console.log(mediaJurnal.getInfo());

// Demonstrasi inheritance: semua punya method pinjam/kembalikan
console.log("\n--- Test Method dari Parent (Media) ---");
console.log(mediaFisik.pinjam());
console.log(mediaFisik.pinjam()); // sudah dipinjam
console.log(mediaFisik.kembalikan());

// Method khusus child class
console.log("\n--- Method Khusus EBook ---");
console.log(mediaEbook.download());

// Cek instanceof (prototype chain)
console.log("\n--- Prototype Chain ---");
console.log("mediaFisik instanceof BukuFisik:", mediaFisik instanceof BukuFisik);
console.log("mediaFisik instanceof Media:", mediaFisik instanceof Media);
console.log("mediaEbook instanceof EBook:", mediaEbook instanceof EBook);
console.log("mediaEbook instanceof BukuFisik:", mediaEbook instanceof BukuFisik);

// Object.create() - prototype inheritance
console.log("\n--- Object.create() Prototype ---");
let mediaDasar = {
    tampilkan() {
        return `${this.judul} (${this.tipe})`;
    }
};

let majalah = Object.create(mediaDasar);
majalah.judul = "National Geographic";
majalah.tipe = "Majalah";
console.log("Object.create:", majalah.tampilkan());
console.log("hasOwnProperty 'judul':", majalah.hasOwnProperty("judul"));
console.log("hasOwnProperty 'tampilkan':", majalah.hasOwnProperty("tampilkan")); // false, dari prototype

// Object.assign() - menyalin object
console.log("\n--- Object.assign() - Copy ---");
let mediaBackup = Object.assign({}, mediaFisik);
console.log("Backup:", mediaBackup.judul, "- Rak:", mediaBackup.rak);

// Spread operator
let mediaSpread = { ...mediaEbook, catatan: "Rekomendasi dosen" };
console.log("Spread:", mediaSpread.judul, "-", mediaSpread.catatan);

// ==========================================
// FITUR MODERN ES6
// ==========================================

console.log("\n=== FITUR MODERN ES6 ===");

// Shorthand property
let judul = "Pemrograman Web";
let penulis = "Farhan";
let tahun = 2024;
let bukuShorthand = { judul, penulis, tahun };
console.log("Shorthand:", bukuShorthand);

// Computed property names
let propName = "kategori";
let bukuComputed = {
    judul: "Data Mining",
    [propName]: "Teknologi"
};
console.log("Computed property:", bukuComputed);

// Destructuring
let { judul: judulBuku, penulis: penulisBuku } = buku1;
console.log("Destructuring:", judulBuku, "-", penulisBuku);

// ==========================================
// STATISTIK AKHIR
// ==========================================

perpustakaan.tampilkanStatistik();

// Tampilkan semua transaksi
console.log("\n--- Riwayat Transaksi ---");
perpustakaan.transaksi.forEach((t, i) => {
    let buku = perpustakaan.buku.find(b => b.id === t.bukuId);
    let anggota = perpustakaan.anggota.find(a => a.id === t.anggotaId);
    console.log(`${i + 1}. ${anggota.nama} - "${buku.judul}" [${t.status}]`);
});

console.log("\n=== PROGRAM SELESAI ===");
console.log("Program ini mendemonstrasikan:");
console.log("✓ Object Basics (key-value, nested, associative array)");
console.log("✓ Object Creation (literal, constructor, Object.create, class)");
console.log("✓ Property Operations (akses, ubah, hapus, cek)");
console.log("✓ Object Methods (method, this, getter/setter)");
console.log("✓ Object Iteration (for...in, keys, values, entries)");
console.log("✓ Prototype & Inheritance (class, extends, prototype chain)");
console.log("✓ Serialisasi (JSON.stringify, JSON.parse)");
console.log("✓ Fitur Modern ES6 (shorthand, spread, destructuring)");