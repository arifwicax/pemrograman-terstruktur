// ==========================================
// OBJECT TYPE DAN OBJECT LITERALS
// ==========================================

console.log("=== OBJECT TYPE DAN OBJECT LITERALS ===\n");

// ==========================================
// MEMBUAT OBJECT
// ==========================================

console.log("=== CARA MEMBUAT OBJECT ===");

// Object literal (cara paling umum)
let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Sistem Informasi",
    aktif: true
};

console.log("mahasiswa:", mahasiswa);
console.log("typeof mahasiswa:", typeof mahasiswa);

// Object kosong
let objekKosong = {};
console.log("objekKosong:", objekKosong);

// Object dengan new Object()
let user = new Object();
user.nama = "Budi";
user.email = "budi@email.com";
console.log("user:", user);
console.log("");

// ==========================================
// MENGAKSES PROPERTY OBJECT
// ==========================================

console.log("=== MENGAKSES PROPERTY OBJECT ===");

let mobil = {
    merk: "Toyota",
    model: "Avanza",
    tahun: 2023,
    warna: "Putih",
    harga: 250000000
};

// Dot notation
console.log("Dot notation:");
console.log("mobil.merk:", mobil.merk);
console.log("mobil.model:", mobil.model);
console.log("mobil.tahun:", mobil.tahun);

// Bracket notation
console.log("\nBracket notation:");
console.log("mobil['merk']:", mobil['merk']);
console.log("mobil['model']:", mobil['model']);

// Menggunakan variabel sebagai key
let properti = "warna";
console.log("mobil[properti]:", mobil[properti]);

// Property yang tidak ada
console.log("mobil.mesin:", mobil.mesin);  // undefined
console.log("");

// ==========================================
// MENAMBAH DAN MENGUBAH PROPERTY
// ==========================================

console.log("=== MENAMBAH DAN MENGUBAH PROPERTY ===");

let laptop = {
    brand: "Asus",
    model: "VivoBook"
};

console.log("laptop awal:", laptop);

// Menambah property baru
laptop.ram = "8GB";
laptop.storage = "512GB SSD";
laptop["processor"] = "Intel i5";

console.log("laptop setelah tambah property:", laptop);

// Mengubah property yang sudah ada
laptop.model = "ROG Strix";
laptop["ram"] = "16GB";

console.log("laptop setelah ubah property:", laptop);
console.log("");

// ==========================================
// MENGHAPUS PROPERTY
// ==========================================

console.log("=== MENGHAPUS PROPERTY ===");

let produk = {
    id: 1,
    nama: "Laptop Gaming",
    harga: 15000000,
    stok: 10,
    kategori: "Elektronik"
};

console.log("produk sebelum delete:", produk);

// Menghapus property dengan delete
delete produk.stok;
delete produk["kategori"];

console.log("produk setelah delete:", produk);
console.log("produk.stok (setelah delete):", produk.stok);  // undefined
console.log("");

// ==========================================
// NESTED OBJECT
// ==========================================

console.log("=== NESTED OBJECT ===");

let perusahaan = {
    nama: "PT. ABC",
    alamat: {
        jalan: "Jl. Sudirman No. 10",
        kota: "Jakarta",
        kodePos: "10110",
        provinsi: "DKI Jakarta"
    },
    karyawan: {
        total: 150,
        departemen: {
            it: 25,
            marketing: 30,
            finance: 15,
            hr: 10
        }
    }
};

console.log("perusahaan:", perusahaan);
console.log("Nama perusahaan:", perusahaan.nama);
console.log("Kota:", perusahaan.alamat.kota);
console.log("Jumlah karyawan IT:", perusahaan.karyawan.departemen.it);

// Mengubah nested property
perusahaan.alamat.kota = "Bandung";
perusahaan.karyawan.departemen.it = 30;

console.log("Kota setelah diubah:", perusahaan.alamat.kota);
console.log("IT setelah diubah:", perusahaan.karyawan.departemen.it);
console.log("");

// ==========================================
// OBJECT METHODS
// ==========================================

console.log("=== OBJECT METHODS ===");

let kalkulator = {
    // Properties
    name: "Kalkulator Sederhana",
    version: "1.0",
    
    // Methods
    tambah: function(a, b) {
        return a + b;
    },
    
    kurang: function(a, b) {
        return a - b;
    },
    
    kali: function(a, b) {
        return a * b;
    },
    
    bagi: function(a, b) {
        if (b === 0) {
            return "Error: Tidak bisa dibagi 0";
        }
        return a / b;
    },
    
    // Method dengan arrow function (ES6)
    info: () => {
        return "Kalkulator untuk operasi dasar";
    }
};

console.log("kalkulator.name:", kalkulator.name);
console.log("kalkulator.tambah(5, 3):", kalkulator.tambah(5, 3));
console.log("kalkulator.kurang(10, 4):", kalkulator.kurang(10, 4));
console.log("kalkulator.kali(6, 7):", kalkulator.kali(6, 7));
console.log("kalkulator.bagi(15, 3):", kalkulator.bagi(15, 3));
console.log("kalkulator.bagi(10, 0):", kalkulator.bagi(10, 0));
console.log("kalkulator.info():", kalkulator.info());
console.log("");

// ==========================================
// THIS KEYWORD
// ==========================================

console.log("=== THIS KEYWORD ===");

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    // Method yang menggunakan this
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    introduce: function() {
        return `Halo, nama saya ${this.fullName()} dan umur saya ${this.age} tahun`;
    },
    
    birthday: function() {
        this.age++;
        console.log(`Selamat ulang tahun! Sekarang umur ${this.firstName} adalah ${this.age} tahun`);
    }
};

console.log("person.fullName():", person.fullName());
console.log("person.introduce():", person.introduce());
person.birthday();
console.log("person.age setelah birthday:", person.age);
console.log("");

// ==========================================
// OBJECT.KEYS(), OBJECT.VALUES(), OBJECT.ENTRIES()
// ==========================================

console.log("=== OBJECT UTILITY METHODS ===");

let smartphone = {
    brand: "Samsung",
    model: "Galaxy S23",
    storage: "256GB",
    color: "Black",
    price: 12000000
};

console.log("smartphone:", smartphone);

// Object.keys() - mendapatkan array dari keys
let keys = Object.keys(smartphone);
console.log("Object.keys():", keys);

// Object.values() - mendapatkan array dari values
let values = Object.values(smartphone);
console.log("Object.values():", values);

// Object.entries() - mendapatkan array dari [key, value] pairs
let entries = Object.entries(smartphone);
console.log("Object.entries():", entries);

// Iterasi menggunakan Object.keys()
console.log("\nIterasi dengan Object.keys():");
Object.keys(smartphone).forEach(key => {
    console.log(`${key}: ${smartphone[key]}`);
});

// Iterasi menggunakan Object.entries()
console.log("\nIterasi dengan Object.entries():");
Object.entries(smartphone).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log("");

// ==========================================
// CHECKING PROPERTIES
// ==========================================

console.log("=== CHECKING PROPERTIES ===");

let book = {
    title: "JavaScript Guide",
    author: "John Smith",
    pages: 300,
    published: true
};

// hasOwnProperty()
console.log("book.hasOwnProperty('title'):", book.hasOwnProperty('title'));        // true
console.log("book.hasOwnProperty('price'):", book.hasOwnProperty('price'));        // false

// in operator
console.log("'author' in book:", 'author' in book);                               // true
console.log("'isbn' in book:", 'isbn' in book);                                   // false

// Menggunakan !== undefined
console.log("book.pages !== undefined:", book.pages !== undefined);               // true
console.log("book.isbn !== undefined:", book.isbn !== undefined);                 // false
console.log("");

// ==========================================
// OBJECT DESTRUCTURING (ES6)
// ==========================================

console.log("=== OBJECT DESTRUCTURING ===");

let student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    gpa: 3.8,
    university: "MIT"
};

// Basic destructuring
let { name, age, major } = student;
console.log("name:", name);
console.log("age:", age);
console.log("major:", major);

// Destructuring dengan alias
let { name: studentName, gpa: gradePoint } = student;
console.log("studentName:", studentName);
console.log("gradePoint:", gradePoint);

// Destructuring dengan default value
let { name: nm, scholarship = "Tidak ada" } = student;
console.log("nm:", nm);
console.log("scholarship:", scholarship);
console.log("");

// ==========================================
// CONTOH PROGRAM: SISTEM INVENTORI
// ==========================================

console.log("=== CONTOH PROGRAM: SISTEM INVENTORI ===");

let inventori = {
    items: [],
    
    // Method untuk menambah item
    tambahItem: function(id, nama, jumlah, harga) {
        let item = {
            id: id,
            nama: nama,
            jumlah: jumlah,
            harga: harga,
            total: jumlah * harga
        };
        this.items.push(item);
        return `Item ${nama} berhasil ditambahkan`;
    },
    
    // Method untuk mencari item
    cariItem: function(id) {
        return this.items.find(item => item.id === id);
    },
    
    // Method untuk mengupdate jumlah
    updateJumlah: function(id, jumlahBaru) {
        let item = this.cariItem(id);
        if (item) {
            item.jumlah = jumlahBaru;
            item.total = item.jumlah * item.harga;
            return `Jumlah ${item.nama} diupdate menjadi ${jumlahBaru}`;
        }
        return "Item tidak ditemukan";
    },
    
    // Method untuk menampilkan semua item
    tampilkanSemua: function() {
        console.log("\n=== DAFTAR INVENTORI ===");
        this.items.forEach(item => {
            console.log(`ID: ${item.id} | ${item.nama} | Qty: ${item.jumlah} | @${item.harga} | Total: ${item.total}`);
        });
    },
    
    // Method untuk menghitung total value
    totalValue: function() {
        return this.items.reduce((total, item) => total + item.total, 0);
    }
};

// Test sistem inventori
console.log(inventori.tambahItem(1, "Laptop", 5, 10000000));
console.log(inventori.tambahItem(2, "Mouse", 20, 150000));
console.log(inventori.tambahItem(3, "Keyboard", 15, 500000));

inventori.tampilkanSemua();

console.log(inventori.updateJumlah(1, 3));
console.log("Total value inventori:", inventori.totalValue());

let item = inventori.cariItem(2);
console.log("Item dengan ID 2:", item);