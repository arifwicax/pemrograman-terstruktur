// ==========================================
// VARIABLES DAN CONSTANTS
// ==========================================

console.log("=== VARIABLES DAN CONSTANTS DALAM JAVASCRIPT ===\n");

// ==========================================
// PERBEDAAN LET DAN CONST
// ==========================================

console.log("=== PERBEDAAN LET DAN CONST ===");

// LET - variabel yang bisa diubah
let nama = "Andi";
console.log("Nama awal:", nama);

nama = "Budi";  // Bisa diubah
console.log("Nama setelah diubah:", nama);

// CONST - konstanta yang tidak bisa diubah
const PI = 3.14159;
console.log("Nilai PI:", PI);

// Mencoba mengubah const akan error
try {
    // PI = 3.14;  // Uncomment ini untuk melihat error
    console.log("Const PI tidak bisa diubah");
} catch (error) {
    console.log("Error:", error.message);
}
console.log("");

// ==========================================
// DEKLARASI VARIABEL
// ==========================================

console.log("=== CARA DEKLARASI VARIABEL ===");

// Deklarasi dengan let
let umur;                    // Deklarasi tanpa inisialisasi
console.log("umur (belum diisi):", umur);  // undefined

umur = 25;                   // Inisialisasi setelah deklarasi
console.log("umur (setelah diisi):", umur);

// Deklarasi dengan langsung inisialisasi
let alamat = "Jakarta";
console.log("alamat:", alamat);

// Multiple declaration
let x = 10, y = 20, z = 30;
console.log("x:", x, "y:", y, "z:", z);
console.log("");

// ==========================================
// CONST HARUS DIINISIALISASI
// ==========================================

console.log("=== CONST HARUS DIINISIALISASI ===");

// Const harus langsung diberi nilai
const NAMA_APLIKASI = "Sistem Informasi";
const MAX_USER = 100;

console.log("NAMA_APLIKASI:", NAMA_APLIKASI);
console.log("MAX_USER:", MAX_USER);

// Const tidak bisa dideklarasi tanpa nilai
// const EMPTY_CONST;  // Ini akan error
console.log("Const harus langsung diberi nilai saat deklarasi");
console.log("");

// ==========================================
// SCOPE VARIABEL
// ==========================================

console.log("=== SCOPE VARIABEL ===");

// Global scope
let globalVar = "Variabel Global";

function testScope() {
    // Function scope
    let localVar = "Variabel Lokal";
    console.log("Dalam function - globalVar:", globalVar);
    console.log("Dalam function - localVar:", localVar);
    
    // Block scope
    if (true) {
        let blockVar = "Variabel Block";
        console.log("Dalam block - blockVar:", blockVar);
    }
    
    // console.log(blockVar);  // Error: blockVar tidak bisa diakses di luar block
}

testScope();
console.log("Luar function - globalVar:", globalVar);
// console.log("Luar function - localVar:", localVar);  // Error: localVar tidak bisa diakses
console.log("");

// ==========================================
// HOISTING
// ==========================================

console.log("=== HOISTING ===");
console.log("Hoisting adalah perilaku JavaScript yang 'mengangkat' deklarasi ke atas");

// Contoh hoisting dengan var (tidak disarankan)
console.log("hoistedVar sebelum deklarasi:", typeof hoistedVar);  // undefined (bukan error)
var hoistedVar = "Saya di-hoist";
console.log("hoistedVar setelah deklarasi:", hoistedVar);

// Let dan const tidak di-hoist dengan cara yang sama
try {
    // console.log(notHoisted);  // Error jika uncomment
    let notHoisted = "Tidak di-hoist";
    console.log("Let dan const tidak bisa diakses sebelum deklarasi");
} catch (error) {
    console.log("Error:", error.message);
}
console.log("");

// ==========================================
// NAMING CONVENTIONS
// ==========================================

console.log("=== NAMING CONVENTIONS ===");

// camelCase (umum untuk variabel dan function)
let namaLengkap = "John Doe";
let hitungTotalHarga = 1000;

// PascalCase (umum untuk class/constructor)
let UserProfile = "Constructor-like";

// UPPER_CASE (umum untuk konstanta)
const API_URL = "https://api.example.com";
const MAX_RETRY_ATTEMPTS = 3;

// snake_case (tidak umum di JavaScript tapi bisa digunakan)
let user_id = 12345;

console.log("namaLengkap (camelCase):", namaLengkap);
console.log("API_URL (UPPER_CASE):", API_URL);
console.log("user_id (snake_case):", user_id);
console.log("");

// ==========================================
// BEST PRACTICES
// ==========================================

console.log("=== BEST PRACTICES ===");

// 1. Gunakan const untuk nilai yang tidak berubah
const TAX_RATE = 0.1;
const COMPANY_NAME = "PT. ABC";

// 2. Gunakan let untuk nilai yang berubah
let counter = 0;
let isLoggedIn = false;

// 3. Nama variabel yang deskriptif
let userAge = 25;           // ✓ Good
let a = 25;                 // ✗ Bad

// 4. Hindari nama yang ambigu
let userData = {};          // ✓ Good
let data = {};              // ✗ Bad

console.log("Best practices:");
console.log("- Gunakan const untuk nilai tetap");
console.log("- Gunakan let untuk nilai yang berubah");
console.log("- Beri nama yang deskriptif");
console.log("- Hindari singkatan yang ambigu");
console.log("");

// ==========================================
// OBJECT DAN ARRAY DENGAN CONST
// ==========================================

console.log("=== OBJECT DAN ARRAY DENGAN CONST ===");

// Const object - object tidak bisa diganti, tapi isinya bisa
const user = {
    name: "John",
    age: 30
};

console.log("user awal:", user);

// Bisa mengubah property
user.name = "Jane";
user.age = 25;
console.log("user setelah diubah:", user);

// Tapi tidak bisa reassign object
// user = {};  // Error jika uncomment

// Const array - array tidak bisa diganti, tapi isinya bisa
const numbers = [1, 2, 3];
console.log("numbers awal:", numbers);

// Bisa mengubah isi array
numbers.push(4);
numbers[0] = 10;
console.log("numbers setelah diubah:", numbers);

// Tapi tidak bisa reassign array
// numbers = [];  // Error jika uncomment
console.log("");

// ==========================================
// CONTOH PROGRAM: KONFIGURASI APLIKASI
// ==========================================

console.log("=== CONTOH PROGRAM: KONFIGURASI APLIKASI ===");

// Konstanta konfigurasi
const CONFIG = {
    APP_NAME: "Sistema Akademik",
    VERSION: "1.0.0",
    MAX_LOGIN_ATTEMPTS: 3,
    SESSION_TIMEOUT: 1800000  // 30 menit dalam milidetik
};

// Variabel runtime
let currentUser = null;
let loginAttempts = 0;
let isMaintenanceMode = false;

function login(username, password) {
    if (isMaintenanceMode) {
        return "Aplikasi sedang maintenance";
    }
    
    if (loginAttempts >= CONFIG.MAX_LOGIN_ATTEMPTS) {
        return "Maksimal percobaan login tercapai";
    }
    
    // Simulasi validasi login
    if (username === "admin" && password === "123456") {
        currentUser = username;
        loginAttempts = 0;  // Reset counter
        return `Berhasil login ke ${CONFIG.APP_NAME} v${CONFIG.VERSION}`;
    } else {
        loginAttempts++;
        return `Login gagal. Sisa percobaan: ${CONFIG.MAX_LOGIN_ATTEMPTS - loginAttempts}`;
    }
}

// Test program
console.log(login("user", "wrong"));      // Login gagal
console.log(login("admin", "wrong"));     // Login gagal
console.log(login("admin", "123456"));    // Berhasil

console.log("Current user:", currentUser);
console.log("Login attempts:", loginAttempts);