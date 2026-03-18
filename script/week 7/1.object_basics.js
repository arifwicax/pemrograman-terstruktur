// ==========================================
// OBJECT BASICS DALAM JAVASCRIPT
// ==========================================

console.log("=== OBJECT BASICS DALAM JAVASCRIPT ===\n");
console.log("Object adalah struktur data yang menyimpan pasangan key dan value.");
console.log("Object digunakan untuk menyimpan sekumpulan data yang saling berhubungan.\n");

// ==========================================
// 1. APA ITU OBJECT
// ==========================================

console.log("=== 1. APA ITU OBJECT ===");
console.log("Object adalah kumpulan property dengan struktur key: value\n");

// Contoh object sederhana
let mahasiswa = {
    nama: "Andi Wijaya",
    umur: 20,
    jurusan: "Sistem Informasi",
    aktif: true
};

console.log("Contoh object mahasiswa:");
console.log(mahasiswa);
console.log("\nProperty object:");
console.log("- nama:", mahasiswa.nama);
console.log("- umur:", mahasiswa.umur);
console.log("- jurusan:", mahasiswa.jurusan);
console.log("- aktif:", mahasiswa.aktif);

// Object dengan berbagai tipe data
let produk = {
    id: 1001,
    nama: "Laptop Gaming",
    harga: 15000000,
    tersedia: true,
    kategori: "Electronics",
    spesifikasi: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    },
    fitur: ["Gaming", "Portable", "High Performance"]
};

console.log("\nObject dengan berbagai tipe data:");
console.log(produk);
console.log("\nNested object (spesifikasi):");
console.log(produk.spesifikasi);
console.log("\nArray dalam object (fitur):");
console.log(produk.fitur);

// ==========================================
// 2. KARAKTERISTIK OBJECT
// ==========================================

console.log("\n=== 2. KARAKTERISTIK OBJECT ===");
console.log("1. Object adalah kumpulan property");
console.log("2. Property memiliki nama (key) dan nilai (value)");
console.log("3. Nilai property bisa berupa tipe data apa saja");
console.log("4. Object dapat berubah (mutable)");
console.log("5. Object diakses menggunakan referensi\n");

// Demonstrasi mutable (dapat berubah)
console.log("Demonstrasi mutable object:");
let mobil = {
    merk: "Toyota",
    warna: "Merah",
    tahun: 2020
};

console.log("Mobil awal:", mobil);

// Mengubah property
mobil.warna = "Biru";
mobil.tahun = 2023;
console.log("Mobil setelah diubah:", mobil);

// Menambah property baru
mobil.harga = 300000000;
mobil.kondisi = "Bekas";
console.log("Mobil setelah ditambah property:", mobil);

// Demonstrasi referensi object
console.log("\nDemonstrasi referensi object:");
let a = { x: 1, y: 2 };
let b = a; // b mereferensi object yang sama dengan a

console.log("Object a:", a);
console.log("Object b:", b);

// Mengubah melalui b
b.x = 10;
b.z = 3;

console.log("\nSetelah mengubah b.x = 10 dan b.z = 3:");
console.log("Object a:", a); // a ikut berubah!
console.log("Object b:", b);
console.log("a === b:", a === b); // true, karena referensi sama

// Membuat copy independent
let c = { ...a }; // spread operator untuk copy
c.x = 100;

console.log("\nSetelah copy dengan spread operator:");
console.log("Object a:", a);
console.log("Object c:", c);
console.log("a === c:", a === c); // false, object berbeda

// ==========================================
// 3. OBJECT DALAM KEHIDUPAN NYATA
// ==========================================

console.log("\n=== 3. OBJECT DALAM KEHIDUPAN NYATA ===");

// Object untuk data user
let user = {
    id: "user_001",
    username: "johndoe",
    email: "john.doe@email.com",
    profile: {
        firstName: "John",
        lastName: "Doe",
        avatar: "https://example.com/avatar.jpg",
        bio: "Software Developer"
    },
    preferences: {
        theme: "dark",
        language: "en",
        notifications: true
    },
    stats: {
        loginCount: 45,
        lastLogin: "2024-03-18T10:30:00Z",
        accountCreated: "2024-01-15T08:00:00Z"
    }
};

console.log("Object user lengkap:");
console.log(user);

// Object untuk transaksi e-commerce
let transaction = {
    id: "tx_12345",
    userId: "user_001",
    items: [
        {
            productId: "prod_101",
            name: "Wireless Mouse",
            price: 150000,
            quantity: 2
        },
        {
            productId: "prod_102",
            name: "Mechanical Keyboard",
            price: 800000,
            quantity: 1
        }
    ],
    shipping: {
        address: "Jl. Merdeka No. 123",
        city: "Jakarta",
        cost: 25000,
        method: "reguler"
    },
    payment: {
        method: "credit_card",
        status: "paid",
        amount: 1125000 // total + shipping
    },
    timestamp: Date.now(),
    status: "processing"
};

console.log("\nObject transaction e-commerce:");
console.log(transaction);

// Menghitung total dari items
let itemTotal = 0;
for (let item of transaction.items) {
    itemTotal += item.price * item.quantity;
}
console.log("\nTotal items:", itemTotal.toLocaleString('id-ID'));
console.log("Shipping cost:", transaction.shipping.cost.toLocaleString('id-ID'));
console.log("Grand Total:", transaction.payment.amount.toLocaleString('id-ID'));

// ==========================================
// 4. OBJECT VS TIPE DATA LAIN
// ==========================================

console.log("\n=== 4. OBJECT VS TIPE DATA LAIN ===");

// Perbandingan penyimpanan data
console.log("Tanpa object (terpisah-pisah):");
let siswa_nama = "Budi";
let siswa_kelas = "10A";
let siswa_umur = 16;
let siswa_nilai = [85, 90, 78];

console.log("Nama:", siswa_nama);
console.log("Kelas:", siswa_kelas);
console.log("Umur:", siswa_umur);
console.log("Nilai:", siswa_nilai);

console.log("\nDengan object (terorganisir):");
let siswa = {
    nama: "Budi",
    kelas: "10A",
    umur: 16,
    nilai: [85, 90, 78],
    rataRata: function() {
        let total = this.nilai.reduce((sum, n) => sum + n, 0);
        return total / this.nilai.length;
    }
};

console.log("Object siswa:", siswa);
console.log("Rata-rata nilai:", siswa.rataRata());

// Array of objects vs multiple arrays
console.log("\nArray of objects vs multiple arrays:");

// Multiple arrays (sulit dikelola)
let names = ["Alice", "Bob", "Charlie"];
let ages = [25, 30, 35];
let cities = ["Jakarta", "Bandung", "Surabaya"];

console.log("Multiple arrays:");
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} (${ages[i]}) dari ${cities[i]}`);
}

// Array of objects (lebih terorganisir)
let people = [
    { name: "Alice", age: 25, city: "Jakarta" },
    { name: "Bob", age: 30, city: "Bandung" },
    { name: "Charlie", age: 35, city: "Surabaya" }
];

console.log("\nArray of objects:");
for (let person of people) {
    console.log(`${person.name} (${person.age}) dari ${person.city}`);
}

// ==========================================
// 5. KEUNTUNGAN MENGGUNAKAN OBJECT
// ==========================================

console.log("\n=== 5. KEUNTUNGAN MENGGUNAKAN OBJECT ===");
console.log("✅ Organisasi data yang lebih baik");
console.log("✅ Mengelompokkan data terkait");
console.log("✅ Mudah diakses dan dimodifikasi");
console.log("✅ Dapat menyimpan berbagai tipe data");
console.log("✅ Mendukung nested structure");
console.log("✅ Dapat memiliki method/function");
console.log("✅ Fleksibel dalam penggunaan\n");

// Contoh fleksibilitas object
let config = {
    app: {
        name: "My Application",
        version: "1.0.0",
        debug: true
    },
    database: {
        host: "localhost",
        port: 3306,
        name: "mydb"
    },
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3
    },
    getConnectionString: function() {
        return `${this.database.host}:${this.database.port}/${this.database.name}`;
    },
    isProduction: function() {
        return !this.app.debug;
    }
};

console.log("Configuration object:");
console.log(config);
console.log("\nConnection string:", config.getConnectionString());
console.log("Is production:", config.isProduction());

// ==========================================
// 6. TIPS MENGGUNAKAN OBJECT
// ==========================================

console.log("\n=== 6. TIPS MENGGUNAKAN OBJECT ===");
console.log("💡 Gunakan nama property yang deskriptif");
console.log("💡 Kelompokkan data terkait dalam nested object");
console.log("💡 Konsisten dalam penamaan (camelCase recommended)");
console.log("💡 Gunakan method untuk operasi terkait data");
console.log("💡 Hindari modifikasi object yang di-share antar komponen");
console.log("💡 Gunakan const untuk object yang tidak akan di-reassign\n");

// Contoh best practices
const bookLibrary = {
    name: "Central Library",
    books: [],
    
    addBook: function(title, author, isbn) {
        const book = {
            id: this.books.length + 1,
            title: title,
            author: author,
            isbn: isbn,
            available: true,
            addedDate: new Date().toISOString()
        };
        this.books.push(book);
        console.log(`Book added: ${title} by ${author}`);
        return book;
    },
    
    findBook: function(searchTerm) {
        return this.books.find(book => 
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },
    
    getStats: function() {
        return {
            totalBooks: this.books.length,
            availableBooks: this.books.filter(book => book.available).length,
            borrowedBooks: this.books.filter(book => !book.available).length
        };
    }
};

console.log("Book library system:");
bookLibrary.addBook("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748");
bookLibrary.addBook("Clean Code", "Robert C. Martin", "978-0132350884");
bookLibrary.addBook("You Don't Know JS", "Kyle Simpson", "978-1491904244");

console.log("\nLibrary stats:", bookLibrary.getStats());

let foundBook = bookLibrary.findBook("javascript");
console.log("\nFound book:", foundBook);

console.log("\n=== SELESAI - OBJECT BASICS ===");