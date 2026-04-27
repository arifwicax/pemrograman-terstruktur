/*
=================================================
WEEK 10 - RETURN STATEMENT & SCOPE
=================================================
File: 4.function_return_scope.js
Materi: Return Statement dan Scope dalam Function

Topik yang dibahas:
1. Return Statement
2. Multiple Returns
3. Function tanpa Return
4. Global Scope
5. Function Scope
6. Block Scope
7. Scope Chain
=================================================
*/

console.log("=== RETURN STATEMENT & SCOPE ===\n");

// 1. RETURN STATEMENT DASAR
console.log("1. RETURN STATEMENT DASAR");
console.log("Return mengembalikan nilai dan menghentikan eksekusi function");
console.log();

function tambah(a, b) {
    return a + b; // Mengembalikan hasil penjumlahan
}

function kali(a, b) {
    let hasil = a * b;
    return hasil; // Mengembalikan variabel
}

function sapaNama(nama) {
    return `Halo, ${nama}!`; // Mengembalikan string
}

console.log("tambah(5, 3):", tambah(5, 3));
console.log("kali(4, 7):", kali(4, 7));
console.log("sapaNama('Andi'):", sapaNama('Andi'));
console.log();

// 2. RETURN MENGHENTIKAN EKSEKUSI
console.log("2. RETURN MENGHENTIKAN EKSEKUSI");
console.log();

function contohReturn() {
    console.log("Ini akan dijalankan");
    return "Hasil function";
    console.log("Ini TIDAK akan dijalankan"); // Dead code
}

function cekAngka(angka) {
    console.log(`Mengecek angka: ${angka}`);
    if (angka > 10) {
        return "Lebih dari 10";
        console.log("Kode setelah return tidak dijalankan");
    }
    return "10 atau kurang";
}

console.log("contohReturn():", contohReturn());
console.log("cekAngka(15):", cekAngka(15));
console.log("cekAngka(5):", cekAngka(5));
console.log();

// 3. MULTIPLE RETURNS
console.log("3. MULTIPLE RETURNS");
console.log("Function dapat memiliki beberapa return statement");
console.log();

function hitungGrade(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
}

function statusLogin(username, password) {
    if (!username) {
        return {success: false, message: "Username tidak boleh kosong"};
    }
    if (!password) {
        return {success: false, message: "Password tidak boleh kosong"};
    }
    if (password.length < 6) {
        return {success: false, message: "Password minimal 6 karakter"};
    }
    return {success: true, message: "Login berhasil"};
}

console.log("Grade 85:", hitungGrade(85));
console.log("Grade 65:", hitungGrade(65));
console.log("Grade 45:", hitungGrade(45));
console.log();

console.log("Login valid:", statusLogin("user123", "password123"));
console.log("Login tanpa username:", statusLogin("", "password"));
console.log("Login password pendek:", statusLogin("user", "123"));
console.log();

// 4. RETURN BERBAGAI TIPE DATA
console.log("4. RETURN BERBAGAI TIPE DATA");
console.log();

// Return number
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

// Return string
function buatPesan(nama, pesan) {
    return `${nama}: ${pesan}`;
}

// Return boolean
function cekGenap(angka) {
    return angka % 2 === 0;
}

// Return array
function buatRange(mulai, selesai) {
    let hasil = [];
    for (let i = mulai; i <= selesai; i++) {
        hasil.push(i);
    }
    return hasil;
}

// Return object
function buatMahasiswa(nama, nim, jurusan) {
    return {
        nama: nama,
        nim: nim,
        jurusan: jurusan,
        aktif: true,
        tanggalDaftar: new Date()
    };
}

// Return function
function buatPengali(faktor) {
    return function(angka) {
        return angka * faktor;
    };
}

console.log("Return number:", hitungLuas(5, 8));
console.log("Return string:", buatPesan("Admin", "Server berjalan normal"));
console.log("Return boolean:", cekGenap(7));
console.log("Return array:", buatRange(1, 5));
console.log("Return object:", buatMahasiswa("Budi", "123456", "Informatika"));

let kaliDua = buatPengali(2);
console.log("Return function:", kaliDua(5));
console.log();

// 5. FUNCTION TANPA RETURN (UNDEFINED)
console.log("5. FUNCTION TANPA RETURN");
console.log("Function tanpa return statement menghasilkan undefined");
console.log();

function cetakPesan(pesan) {
    console.log(`Pesan: ${pesan}`);
    // Tidak ada return statement
}

function prosesData(data) {
    console.log("Memproses data:", data);
    // Melakukan sesuatu tanpa return
}

let hasil1 = cetakPesan("Hello World");
let hasil2 = prosesData([1, 2, 3]);

console.log("Hasil cetakPesan:", hasil1); // undefined
console.log("Hasil prosesData:", hasil2); // undefined
console.log();

// 6. GLOBAL SCOPE
console.log("6. GLOBAL SCOPE");
console.log("Variabel yang dapat diakses dari mana saja");
console.log();

// Variabel global
let namaAplikasi = "MyApp";
var versi = "1.0.0";
const author = "Developer Team";

function infoAplikasi() {
    // Dapat mengakses variabel global
    return `${namaAplikasi} v${versi} oleh ${author}`;
}

function ubahVersi(versiBaru) {
    versi = versiBaru; // Mengubah variabel global
}

console.log("Info awal:", infoAplikasi());
ubahVersi("2.0.0");
console.log("Info setelah update:", infoAplikasi());
console.log();

// 7. FUNCTION SCOPE
console.log("7. FUNCTION SCOPE");
console.log("Variabel yang hanya dapat diakses dalam function");
console.log();

function contohFunctionScope() {
    let lokalVar = "Saya lokal";
    var jugaLokal = "Saya juga lokal";
    const tetapLokal = "Saya tetap lokal";
    
    console.log("Dalam function:", lokalVar);
    
    return "Function selesai";
}

contohFunctionScope();

// console.log(lokalVar); // Error: lokalVar tidak terdefinisi
// console.log(jugaLokal); // Error: jugaLokal tidak terdefinisi
console.log("Variabel function scope tidak dapat diakses dari luar");
console.log();

// 8. BLOCK SCOPE
console.log("8. BLOCK SCOPE");
console.log("Variabel let dan const memiliki block scope");
console.log();

function contohBlockScope() {
    let outer = "Outer variable";
    
    if (true) {
        let inner = "Inner variable";
        const juga = "Juga inner";
        var varVariable = "Var tidak block scope";
        
        console.log("Dalam block:", outer); // Dapat diakses
        console.log("Dalam block:", inner); // Dapat diakses
    }
    
    console.log("Luar block:", outer); // Dapat diakses
    console.log("Luar block:", varVariable); // Dapat diakses (var bukan block scope)
    // console.log(inner); // Error: tidak dapat diakses
    // console.log(juga); // Error: tidak dapat diakses
}

contohBlockScope();
console.log();

// 9. SCOPE CHAIN
console.log("9. SCOPE CHAIN");
console.log("Function dapat mengakses variabel dari scope yang lebih luas");
console.log();

let global = "Global variable";

function luarFunction() {
    let outer = "Outer variable";
    
    function dalamFunction() {
        let inner = "Inner variable";
        
        // Dapat mengakses semua level scope
        console.log("Dari dalam function:");
        console.log("- Global:", global);
        console.log("- Outer:", outer);
        console.log("- Inner:", inner);
        
        return inner + " -> " + outer + " -> " + global;
    }
    
    return dalamFunction();
}

console.log(luarFunction());
console.log();

// 10. VARIABLE SHADOWING
console.log("10. VARIABLE SHADOWING");
console.log("Variabel lokal dapat 'menutupi' variabel dengan nama sama di scope luar");
console.log();

let nama = "Global Name";

function shadowingExample() {
    let nama = "Function Name"; // Menutupi variabel global
    
    if (true) {
        let nama = "Block Name"; // Menutupi variabel function
        console.log("Dalam block:", nama); // "Block Name"
    }
    
    console.log("Dalam function:", nama); // "Function Name"
}

shadowingExample();
console.log("Global scope:", nama); // "Global Name"
console.log();

// 11. CLOSURE
console.log("11. CLOSURE (Preview)");
console.log("Function yang dapat mengakses variabel dari scope luar meski sudah selesai");
console.log();

function buatCounter() {
    let count = 0; // Variabel dalam scope function
    
    return function() {
        count++; // Mengakses variabel dari scope luar
        return count;
    };
}

let counter1 = buatCounter();
let counter2 = buatCounter();

console.log("Counter1 call 1:", counter1()); // 1
console.log("Counter1 call 2:", counter1()); // 2
console.log("Counter1 call 3:", counter1()); // 3

console.log("Counter2 call 1:", counter2()); // 1 (terpisah)
console.log("Counter2 call 2:", counter2()); // 2
console.log();

// 12. CONTOH PRAKTIS: SISTEM SKOR GAME
console.log("12. CONTOH PRAKTIS: SISTEM SKOR GAME");
console.log();

function buatGameSkor() {
    let skor = 0;
    let level = 1;
    let nyawa = 3;
    
    function tambahSkor(poin) {
        if (nyawa <= 0) {
            return "Game Over! Tidak bisa menambah skor.";
        }
        
        skor += poin;
        
        // Level up setiap 1000 poin
        if (skor >= level * 1000) {
            level++;
            return `Level Up! Sekarang level ${level}. Skor: ${skor}`;
        }
        
        return `Skor: ${skor}, Level: ${level}`;
    }
    
    function kurangiNyawa() {
        if (nyawa > 0) {
            nyawa--;
            return `Nyawa tersisa: ${nyawa}`;
        } else {
            return "Game Over!";
        }
    }
    
    function getStatus() {
        return {
            skor: skor,
            level: level,
            nyawa: nyawa,
            gameOver: nyawa <= 0
        };
    }
    
    function reset() {
        skor = 0;
        level = 1;
        nyawa = 3;
        return "Game direset!";
    }
    
    // Return object dengan methods
    return {
        tambahSkor: tambahSkor,
        kurangiNyawa: kurangiNyawa,
        getStatus: getStatus,
        reset: reset
    };
}

let game = buatGameSkor();

console.log(game.tambahSkor(150)); // Tambah skor
console.log(game.tambahSkor(300)); // Tambah skor
console.log(game.tambahSkor(600)); // Level up!
console.log(game.kurangiNyawa()); // Kurangi nyawa
console.log(game.getStatus()); // Cek status
console.log();

// 13. BEST PRACTICES
console.log("13. BEST PRACTICES");
console.log();

console.log("RETURN STATEMENT:");
console.log("✓ Selalu return nilai yang konsisten");
console.log("✓ Gunakan early return untuk mengurangi nesting");
console.log("✓ Return type yang mudah dipahami");
console.log();

console.log("SCOPE:");
console.log("✓ Gunakan let/const daripada var");
console.log("✓ Minimal akses ke global scope");
console.log("✓ Hindari variable shadowing yang membingungkan");
console.log("✓ Gunakan scope yang sesuai dengan kebutuhan");
console.log();

// Contoh early return
function validasiInput(data) {
    // Early return untuk kasus error
    if (!data) {
        return {valid: false, error: "Data tidak boleh kosong"};
    }
    
    if (typeof data !== 'string') {
        return {valid: false, error: "Data harus berupa string"};
    }
    
    if (data.length < 3) {
        return {valid: false, error: "Data minimal 3 karakter"};
    }
    
    // Return untuk kasus sukses
    return {valid: true, data: data.trim()};
}

console.log("Validasi kosong:", validasiInput(""));
console.log("Validasi number:", validasiInput(123));
console.log("Validasi pendek:", validasiInput("ab"));
console.log("Validasi valid:", validasiInput("Hello World"));
console.log();

console.log("=== SELESAI: RETURN STATEMENT & SCOPE ===");