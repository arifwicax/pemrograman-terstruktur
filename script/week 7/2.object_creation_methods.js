// ==========================================
// OBJECT CREATION METHODS DALAM JAVASCRIPT
// ==========================================

console.log("=== OBJECT CREATION METHODS DALAM JAVASCRIPT ===\n");
console.log("Ada beberapa cara untuk membuat object dalam JavaScript:");
console.log("1. Object Literal {}");
console.log("2. Constructor Function dengan new");
console.log("3. Object.create()");
console.log("4. Class (ES6)\n");

// ==========================================
// 1. OBJECT LITERAL
// ==========================================

console.log("=== 1. OBJECT LITERAL ===");
console.log("Cara paling sederhana dan paling sering digunakan\n");

// Object literal sederhana
let mobil1 = {
    merk: "Toyota",
    model: "Camry", 
    tahun: 2022,
    warna: "Hitam"
};

console.log("Mobil dengan object literal:");
console.log(mobil1);

// Object literal dengan method
let calculator = {
    result: 0,
    
    add: function(x, y) {
        this.result = x + y;
        return this.result;
    },
    
    subtract: function(x, y) {
        this.result = x - y;
        return this.result;
    },
    
    multiply: function(x, y) {
        this.result = x * y;
        return this.result;
    },
    
    divide: function(x, y) {
        if (y !== 0) {
            this.result = x / y;
        } else {
            console.log("Error: Division by zero");
            this.result = null;
        }
        return this.result;
    },
    
    clear: function() {
        this.result = 0;
        return this.result;
    }
};

console.log("\nCalculator object dengan methods:");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("20 / 4 =", calculator.divide(20, 4));
console.log("15 / 0 =", calculator.divide(15, 0));
console.log("Clear:", calculator.clear());

// Object kosong dan menambah property
let mahasiswa = {}; // Object kosong
mahasiswa.nama = "Sari";
mahasiswa.nim = "12345678";
mahasiswa.jurusan = "Informatika";
mahasiswa.semester = 5;

console.log("\nObject kosong kemudian ditambah property:");
console.log(mahasiswa);

// ==========================================
// 2. CONSTRUCTOR FUNCTION DENGAN NEW
// ==========================================

console.log("\n=== 2. CONSTRUCTOR FUNCTION DENGAN NEW ===");
console.log("Menggunakan function sebagai template untuk membuat object\n");

// Constructor function untuk Person
function Person(nama, umur, kota) {
    this.nama = nama;
    this.umur = umur;
    this.kota = kota;
    this.perkenalan = function() {
        return `Halo, saya ${this.nama}, umur ${this.umur} tahun dari ${this.kota}`;
    };
}

// Membuat object dengan constructor
let person1 = new Person("Alice", 25, "Jakarta");
let person2 = new Person("Bob", 30, "Bandung");
let person3 = new Person("Charlie", 35, "Surabaya");

console.log("Person objects dengan constructor:");
console.log("Person 1:", person1);
console.log(person1.perkenalan());

console.log("\nPerson 2:", person2);
console.log(person2.perkenalan());

console.log("\nPerson 3:", person3);
console.log(person3.perkenalan());

// Constructor untuk Produk
function Product(id, nama, harga, kategori) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.kategori = kategori;
    this.stok = 0;
    this.aktif = true;
    
    this.setStok = function(jumlah) {
        this.stok = jumlah;
    };
    
    this.jual = function(jumlah) {
        if (jumlah <= this.stok) {
            this.stok -= jumlah;
            return `Terjual ${jumlah} unit ${this.nama}, sisa stok: ${this.stok}`;
        } else {
            return `Stok tidak cukup! Stok tersedia: ${this.stok}`;
        }
    };
    
    this.getInfo = function() {
        return `${this.nama} - Rp ${this.harga.toLocaleString()} (Stok: ${this.stok})`;
    };
}

// Membuat produk-produk
let laptop = new Product(1, "Laptop Gaming", 15000000, "Electronics");
laptop.setStok(10);

let mouse = new Product(2, "Wireless Mouse", 250000, "Electronics");
mouse.setStok(50);

let keyboard = new Product(3, "Mechanical Keyboard", 800000, "Electronics");
keyboard.setStok(20);

console.log("\nProduk-produk dengan constructor:");
console.log(laptop.getInfo());
console.log(mouse.getInfo());
console.log(keyboard.getInfo());

console.log("\nSimulasi penjualan:");
console.log(laptop.jual(2));
console.log(mouse.jual(15));
console.log(keyboard.jual(25)); // Stok tidak cukup

// ==========================================
// 3. NEW OBJECT()
// ==========================================

console.log("\n=== 3. NEW OBJECT() ===");
console.log("Cara lama yang jarang digunakan\n");

// Menggunakan new Object()
let mobil2 = new Object();
mobil2.merk = "Honda";
mobil2.model = "Civic";
mobil2.tahun = 2021;
mobil2.warna = "Putih";
mobil2.start = function() {
    return `${this.merk} ${this.model} dinyalakan`;
};

console.log("Mobil dengan new Object():");
console.log(mobil2);
console.log(mobil2.start());

// Perbandingan dengan object literal
let mobil3 = {
    merk: "Honda",
    model: "Civic",
    tahun: 2021,
    warna: "Putih",
    start: function() {
        return `${this.merk} ${this.model} dinyalakan`;
    }
};

console.log("\nMobil dengan object literal (lebih sederhana):");
console.log(mobil3);
console.log("Keduanya menghasilkan object yang sama\n");

// ==========================================
// 4. OBJECT.CREATE()
// ==========================================

console.log("=== 4. OBJECT.CREATE() ===");
console.log("Membuat object dengan prototype tertentu\n");

// Membuat prototype object
let animalPrototype = {
    jenis: "Unknown",
    suara: "Silent",
    bersuara: function() {
        return `${this.nama} (${this.jenis}) bersuara: ${this.suara}`;
    },
    info: function() {
        return `Nama: ${this.nama}, Jenis: ${this.jenis}, Umur: ${this.umur} tahun`;
    }
};

// Membuat object dengan Object.create()
let kucing = Object.create(animalPrototype);
kucing.nama = "Whiskers";
kucing.jenis = "Kucing";
kucing.umur = 3;
kucing.suara = "Meow";

let anjing = Object.create(animalPrototype);
anjing.nama = "Buddy";
anjing.jenis = "Anjing";
anjing.umur = 5;
anjing.suara = "Woof";

let burung = Object.create(animalPrototype);
burung.nama = "Tweety";
burung.jenis = "Burung";
burung.umur = 2;
burung.suara = "Tweet";

console.log("Animal objects dengan Object.create():");
console.log(kucing.info());
console.log(kucing.bersuara());

console.log("\n" + anjing.info());
console.log(anjing.bersuara());

console.log("\n" + burung.info());
console.log(burung.bersuara());

// Object.create(null) - object tanpa prototype
let pureObject = Object.create(null);
pureObject.key1 = "value1";
pureObject.key2 = "value2";

console.log("\nPure object tanpa prototype:");
console.log(pureObject);
console.log("Tidak punya method bawaan seperti toString():", typeof pureObject.toString);

// ==========================================
// 5. ES6 CLASS
// ==========================================

console.log("\n=== 5. ES6 CLASS ===");
console.log("Cara modern menggunakan class syntax\n");

// Class definition
class Vehicle {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.kecepatan = 0;
    }
    
    start() {
        return `${this.merk} ${this.model} dinyalakan`;
    }
    
    accelerate(increment = 10) {
        this.kecepatan += increment;
        return `Kecepatan sekarang: ${this.kecepatan} km/h`;
    }
    
    brake(decrement = 10) {
        this.kecepatan = Math.max(0, this.kecepatan - decrement);
        return `Kecepatan sekarang: ${this.kecepatan} km/h`;
    }
    
    getInfo() {
        return `${this.merk} ${this.model} (${this.tahun}) - Kecepatan: ${this.kecepatan} km/h`;
    }
}

// Membuat instance dari class
let car1 = new Vehicle("BMW", "X3", 2023);
let car2 = new Vehicle("Audi", "A4", 2022);

console.log("Vehicle objects dengan class:");
console.log(car1.getInfo());
console.log(car1.start());
console.log(car1.accelerate(20));
console.log(car1.accelerate(15));
console.log(car1.brake(10));

console.log("\n" + car2.getInfo());
console.log(car2.start());
console.log(car2.accelerate(30));

// Class dengan inheritance
class ElectricVehicle extends Vehicle {
    constructor(merk, model, tahun, batteryCapacity) {
        super(merk, model, tahun);
        this.batteryCapacity = batteryCapacity;
        this.batteryLevel = 100;
    }
    
    charge(amount = 20) {
        this.batteryLevel = Math.min(100, this.batteryLevel + amount);
        return `Battery charged to ${this.batteryLevel}%`;
    }
    
    getInfo() {
        return `${super.getInfo()} - Battery: ${this.batteryLevel}% (${this.batteryCapacity} kWh)`;
    }
}

let tesla = new ElectricVehicle("Tesla", "Model 3", 2023, 75);

console.log("\nElectric Vehicle dengan inheritance:");
console.log(tesla.getInfo());
console.log(tesla.start());
console.log(tesla.accelerate(25));
tesla.batteryLevel = 30; // Simulasi battery rendah
console.log(tesla.charge(40));
console.log(tesla.getInfo());

// ==========================================
// 6. PERBANDINGAN METHODS
// ==========================================

console.log("\n=== 6. PERBANDINGAN METHODS ===");

// Object untuk testing
let testObjects = {
    literal: { name: "Object Literal", method: "{}" },
    constructor: new Person("Constructor", 25, "Jakarta"),
    newObject: new Object(),
    created: Object.create({ prototype: true }),
    fromClass: new Vehicle("Class", "Method", 2024)
};

testObjects.newObject.name = "New Object";
testObjects.created.name = "Object.create";

console.log("\nPerbandingan hasil dari berbagai method:");
for (let [method, obj] of Object.entries(testObjects)) {
    console.log(`${method}:`, obj.name || obj.merk || "Unnamed");
}

// Performance test sederhana
console.log("\nPerformance test (1000 objects):");

// Object literal performance
let start = performance.now();
for (let i = 0; i < 1000; i++) {
    let obj = { id: i, name: `Object ${i}`, active: true };
}
let literalTime = performance.now() - start;

// Constructor performance
start = performance.now();
for (let i = 0; i < 1000; i++) {
    let obj = new Person(`Person ${i}`, 25, "City");
}
let constructorTime = performance.now() - start;

// Class performance
start = performance.now();
for (let i = 0; i < 1000; i++) {
    let obj = new Vehicle("Brand", `Model ${i}`, 2024);
}
let classTime = performance.now() - start;

console.log(`Object Literal: ${literalTime.toFixed(2)} ms`);
console.log(`Constructor: ${constructorTime.toFixed(2)} ms`);
console.log(`Class: ${classTime.toFixed(2)} ms`);

console.log("\n=== TIPS MEMILIH METHOD ===");
console.log("💡 Object Literal: Untuk object sederhana dan unik");
console.log("💡 Constructor Function: Untuk compatibility dengan browser lama"); 
console.log("💡 Class: Untuk aplikasi modern dengan inheritance");
console.log("💡 Object.create(): Untuk kontrol prototype yang spesifik");
console.log("💡 new Object(): Hindari, gunakan literal {} sebagai gantinya");

console.log("\n=== SELESAI - OBJECT CREATION METHODS ===");