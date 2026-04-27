# MODUL PERTEMUAN 10

# Function dalam JavaScript

---

# A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi / Informatika
Pertemuan: Minggu ke-10

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari **Function dalam JavaScript**.

Function merupakan **blok kode yang dapat digunakan berulang kali** untuk **menyelesaikan tugas tertentu**.

Sebagai contoh, function untuk menghitung luas lingkaran:

```javascript
function luasLingkaran(jariJari) {
    return 3.14 * jariJari * jariJari;
}
```

Function untuk menyapa pengguna:

```javascript
function sapa(nama) {
    return "Halo, " + nama + "!";
}
```

Mahasiswa akan mempelajari:

* konsep function dan kegunaan
* cara mendefinisikan function
* cara memanggil function
* parameter dan argument
* return value
* arrow function
* closure dan scope
* function sebagai nilai

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini mahasiswa diharapkan mampu:

1. Menjelaskan konsep function dalam JavaScript
2. Membuat function dengan berbagai cara
3. Memanggil function dengan parameter
4. Menggunakan return value dari function
5. Membuat arrow function
6. Memahami scope dan closure
7. Menggunakan function sebagai nilai

---

# D. Apa Itu Function

Function adalah **blok kode yang diberi nama dan dapat dipanggil berulang kali** untuk **menyelesaikan tugas tertentu**.

Struktur umum function:

```javascript
function namaFunction(parameter1, parameter2) {
    // kode yang akan dijalankan
    return hasilnya;
}
```

Contoh function sederhana:

```javascript
function tambah(a, b) {
    return a + b;
}

// Memanggil function
let hasil = tambah(5, 3); // hasil = 8
```

Analogi function seperti **mesin**:
- **Input**: parameter yang diberikan
- **Proses**: kode di dalam function
- **Output**: nilai yang dikembalikan (return)

---

# E. Keuntungan Menggunakan Function

Beberapa keuntungan menggunakan function:

1. **Reusability** - Kode dapat digunakan berulang
2. **Modular** - Kode terbagi menjadi bagian-bagian kecil
3. **Maintainability** - Mudah dipelihara dan diubah
4. **Readability** - Kode lebih mudah dibaca
5. **Testing** - Mudah ditest secara terpisah

Contoh tanpa function:

```javascript
// Menghitung luas persegi panjang beberapa kali
let luas1 = 5 * 3;
let luas2 = 10 * 7; 
let luas3 = 4 * 6;
```

Contoh dengan function:

```javascript
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

let luas1 = luasPersegiPanjang(5, 3);
let luas2 = luasPersegiPanjang(10, 7);
let luas3 = luasPersegiPanjang(4, 6);
```

---

# F. Cara Mendefinisikan Function

Ada beberapa cara untuk mendefinisikan function dalam JavaScript.

---

# 1. Function Declaration

Cara paling sederhana dan paling sering digunakan.

```javascript
function namaFunction(parameter) {
    // kode function
    return nilai;
}
```

Contoh:

```javascript
function sapa(nama) {
    return "Halo, " + nama + "!";
}

function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

function cekGenap(angka) {
    if (angka % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
```

**Karakteristik**: Function declaration mengalami **hoisting** (dapat dipanggil sebelum didefinisikan).

---

# 2. Function Expression

Function yang disimpan dalam variabel.

```javascript
const namaFunction = function(parameter) {
    // kode function
    return nilai;
};
```

Contoh:

```javascript
const kali = function(a, b) {
    return a * b;
};

const bagi = function(a, b) {
    return a / b;
};

// Anonymous function expression
const hasil = function(x) {
    return x * x;
}(5); // langsung dipanggil
```

**Karakteristik**: Function expression tidak mengalami hoisting.

---

# 3. Arrow Function (ES6)

Sintaks yang lebih ringkas untuk menulis function.

```javascript
const namaFunction = (parameter) => {
    // kode function
    return nilai;
};

// Untuk satu parameter, tanda kurung bisa dihilangkan
const namaFunction = parameter => nilai;

// Untuk return langsung
const namaFunction = (parameter) => nilai;
```

Contoh:

```javascript
// Arrow function biasa
const tambah = (a, b) => {
    return a + b;
};

// Arrow function ringkas
const kali = (a, b) => a * b;

// Satu parameter
const kuadrat = x => x * x;

// Tanpa parameter
const sapaMorning = () => "Selamat pagi!";
```

---

# 4. Function Constructor

Cara yang jarang digunakan, menggunakan constructor Function.

```javascript
const namaFunction = new Function('parameter1', 'parameter2', 'return parameter1 + parameter2');
```

Contoh:

```javascript
const tambah = new Function('a', 'b', 'return a + b');
console.log(tambah(2, 3)); // 5
```

**Catatan**: Cara ini tidak direkomendasikan karena sulit dibaca dan kurang efisien.

---

# G. Memanggil Function

Function dipanggil dengan **nama function diikuti tanda kurung** berisi argument.

```javascript
namaFunction(argument1, argument2);
```

Contoh:

```javascript
function perkenalan(nama, umur) {
    return `Nama saya ${nama}, umur ${umur} tahun`;
}

// Memanggil function
let hasil1 = perkenalan("Andi", 20);
let hasil2 = perkenalan("Budi", 22);

console.log(hasil1); // "Nama saya Andi, umur 20 tahun"
console.log(hasil2); // "Nama saya Budi, umur 22 tahun"
```

---

# H. Parameter dan Argument

**Parameter** adalah variabel yang didefinisikan dalam function.
**Argument** adalah nilai yang diberikan saat memanggil function.

```javascript
function sapa(nama) {    // nama adalah parameter
    return "Halo " + nama;
}

sapa("Andi");           // "Andi" adalah argument
```

---

# 1. Default Parameter

Memberikan nilai default jika argument tidak diberikan.

```javascript
function sapa(nama = "Teman") {
    return "Halo " + nama;
}

console.log(sapa());        // "Halo Teman"
console.log(sapa("Andi"));  // "Halo Andi"
```

---

# 2. Rest Parameter

Mengumpulkan argument yang tidak terbatas ke dalam array.

```javascript
function jumlahSemua(...angka) {
    let total = 0;
    for (let n of angka) {
        total += n;
    }
    return total;
}

console.log(jumlahSemua(1, 2, 3));        // 6
console.log(jumlahSemua(1, 2, 3, 4, 5)); // 15
```

---

# 3. Destructuring Parameter

Memecah object atau array menjadi variabel terpisah.

```javascript
// Destructuring object
function buatProfil({nama, umur, kota}) {
    return `${nama}, ${umur} tahun, dari ${kota}`;
}

let orang = {nama: "Andi", umur: 25, kota: "Jakarta"};
console.log(buatProfil(orang));

// Destructuring array
function hitungKoordinat([x, y]) {
    return Math.sqrt(x * x + y * y);
}

console.log(hitungKoordinat([3, 4])); // 5
```

---

# I. Return Statement

**Return** mengembalikan nilai dari function dan menghentikan eksekusi function.

```javascript
function cekPositif(angka) {
    if (angka > 0) {
        return "Positif";
    } else if (angka < 0) {
        return "Negatif";
    } else {
        return "Nol";
    }
}
```

Aturan return:

1. Function tanpa return menghasilkan `undefined`
2. Return menghentikan eksekusi function
3. Bisa return nilai apa saja (number, string, object, function, dll)

```javascript
function contohReturn() {
    console.log("Ini akan dijalankan");
    return "Hasil";
    console.log("Ini TIDAK akan dijalankan");
}
```

---

# J. Scope dan Closure

**Scope** adalah area dimana variabel dapat diakses.
**Closure** adalah function yang dapat mengakses variabel dari scope luar.

---

# 1. Global Scope

Variabel yang didefinisikan di luar function.

```javascript
let globalVar = "Saya global";

function test() {
    console.log(globalVar); // Bisa diakses
}
```

---

# 2. Function Scope

Variabel yang didefinisikan di dalam function.

```javascript
function test() {
    let localVar = "Saya lokal";
    console.log(localVar); // Bisa diakses
}

// console.log(localVar); // ERROR! Tidak bisa diakses
```

---

# 3. Block Scope

Variabel yang didefinisikan di dalam blok (let/const).

```javascript
function test() {
    if (true) {
        let blockVar = "Saya block scope";
        console.log(blockVar); // Bisa diakses
    }
    // console.log(blockVar); // ERROR! Tidak bisa diakses
}
```

---

# 4. Closure

Function yang dapat mengakses variabel dari scope luar.

```javascript
function luarFunction(x) {
    // Variabel di scope luar
    
    function dalamFunction(y) {
        // Dapat mengakses x dan y
        return x + y;
    }
    
    return dalamFunction;
}

let tambah5 = luarFunction(5);
console.log(tambah5(3)); // 8

let tambah10 = luarFunction(10);
console.log(tambah10(3)); // 13
```

Contoh praktis closure:

```javascript
function buatCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

let counter1 = buatCounter();
let counter2 = buatCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (terpisah)
```

---

# K. Function Sebagai Nilai

Dalam JavaScript, function adalah **first-class citizen**, artinya function bisa:

1. Disimpan dalam variabel
2. Dikirim sebagai argument
3. Dikembalikan dari function lain
4. Disimpan dalam array/object

---

# 1. Function dalam Variabel

```javascript
const operasi = function(a, b) {
    return a + b;
};

let hasil = operasi(5, 3);
```

---

# 2. Function sebagai Argument

```javascript
function hitungDanTampilkan(a, b, operasi) {
    let hasil = operasi(a, b);
    console.log(`Hasil: ${hasil}`);
}

function tambah(x, y) {
    return x + y;
}

function kali(x, y) {
    return x * y;
}

hitungDanTampilkan(5, 3, tambah); // Hasil: 8
hitungDanTampilkan(5, 3, kali);   // Hasil: 15
```

---

# 3. Function yang Mengembalikan Function

```javascript
function buatPengali(faktor) {
    return function(angka) {
        return angka * faktor;
    };
}

let kaliDua = buatPengali(2);
let kaliTiga = buatPengali(3);

console.log(kaliDua(5));  // 10
console.log(kaliTiga(5)); // 15
```

---

# 4. Function dalam Array/Object

```javascript
// Function dalam array
let operasiMatematika = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; },
    function(a, b) { return a * b; },
    function(a, b) { return a / b; }
];

console.log(operasiMatematika[0](5, 3)); // 8

// Function dalam object
let kalkulator = {
    tambah: function(a, b) { return a + b; },
    kurang: function(a, b) { return a - b; },
    kali: function(a, b) { return a * b; },
    bagi: function(a, b) { return a / b; }
};

console.log(kalkulator.tambah(5, 3)); // 8
```

---

# L. Method Function Penting

JavaScript menyediakan beberapa method untuk memanipulasi function.

---

# 1. call()

Memanggil function dengan `this` tertentu.

```javascript
function perkenalan() {
    return `Halo, saya ${this.nama}`;
}

let orang = {nama: "Andi"};
console.log(perkenalan.call(orang)); // "Halo, saya Andi"
```

---

# 2. apply()

Seperti call() tapi argument dalam bentuk array.

```javascript
function tambah(a, b, c) {
    return a + b + c;
}

let angka = [1, 2, 3];
console.log(tambah.apply(null, angka)); // 6
```

---

# 3. bind()

Membuat function baru dengan `this` yang tetap.

```javascript
let orang = {
    nama: "Andi",
    sapa: function() {
        return `Halo, ${this.nama}`;
    }
};

let sapaAndi = orang.sapa.bind(orang);
console.log(sapaAndi()); // "Halo, Andi"
```

---

# M. Immediately Invoked Function Expression (IIFE)

Function yang langsung dipanggil setelah didefinisikan.

```javascript
// IIFE dengan function expression
(function() {
    console.log("Saya langsung dipanggil!");
})();

// IIFE dengan arrow function
(() => {
    console.log("Saya juga langsung dipanggil!");
})();

// IIFE dengan return value
let hasil = (function(a, b) {
    return a + b;
})(5, 3);

console.log(hasil); // 8
```

Kegunaan IIFE:
1. Menghindari polusi global scope
2. Membuat private scope
3. Inisialisasi yang hanya dijalankan sekali

---

# N. Function Recursion

Function yang memanggil dirinya sendiri.

```javascript
function faktorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case
    return n * faktorial(n - 1);
}

console.log(faktorial(5)); // 120
```

Contoh lain: Menghitung deret Fibonacci

```javascript
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
```

**Peringatan**: Hati-hati dengan infinite recursion!

---

# O. Higher-Order Function

Function yang mengambil function lain sebagai parameter atau mengembalikan function.

```javascript
// Function yang mengambil function sebagai parameter
function prosesArray(arr, callback) {
    let hasil = [];
    for (let item of arr) {
        hasil.push(callback(item));
    }
    return hasil;
}

let angka = [1, 2, 3, 4, 5];
let kuadrat = prosesArray(angka, x => x * x);
console.log(kuadrat); // [1, 4, 9, 16, 25]
```

Contoh dengan Array methods:

```javascript
let angka = [1, 2, 3, 4, 5];

// map: transform setiap elemen
let dikaliDua = angka.map(x => x * 2);
console.log(dikaliDua); // [2, 4, 6, 8, 10]

// filter: saring elemen
let genap = angka.filter(x => x % 2 === 0);
console.log(genap); // [2, 4]

// reduce: gabungkan menjadi satu nilai
let jumlah = angka.reduce((total, x) => total + x, 0);
console.log(jumlah); // 15
```

---

# P. Best Practices Function

Beberapa praktik terbaik dalam menulis function:

---

# 1. Nama Function yang Jelas

```javascript
// Buruk
function calc(x, y) {
    return x * y;
}

// Baik
function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
```

---

# 2. Function Harus Fokus pada Satu Tugas

```javascript
// Buruk - function melakukan banyak hal
function prosesUser(user) {
    // validasi data
    // simpan ke database  
    // kirim email
    // update UI
}

// Baik - pisah menjadi function terpisah
function validasiUser(user) { /* ... */ }
function simpanUser(user) { /* ... */ }
function kirimEmailSelamatDatang(user) { /* ... */ }
function updateUI() { /* ... */ }
```

---

# 3. Hindari Function Terlalu Panjang

```javascript
// Buruk - function terlalu panjang (lebih dari 20 baris)
function prosesData() {
    // 50 baris kode...
}

// Baik - pecah menjadi function kecil
function ambilData() { /* ... */ }
function validasiData() { /* ... */ }
function transformData() { /* ... */ }
function simpanData() { /* ... */ }
```

---

# 4. Gunakan Default Parameter

```javascript
// Buruk
function buatUser(nama, umur) {
    if (!nama) nama = "Anonim";
    if (!umur) umur = 0;
    return {nama, umur};
}

// Baik
function buatUser(nama = "Anonim", umur = 0) {
    return {nama, umur};
}
```

---

# 5. Return Secara Konsisten

```javascript
// Buruk - kadang return, kadang tidak
function cekGanjil(angka) {
    if (angka % 2 === 1) {
        return true;
    }
    // tidak ada return untuk kasus lain
}

// Baik - selalu ada return
function cekGanjil(angka) {
    if (angka % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

// Lebih baik lagi
function cekGanjil(angka) {
    return angka % 2 === 1;
}
```

---

# Q. Latihan dan Contoh Kasus

---

# 1. Kalkulator Sederhana

```javascript
function kalkulator(operasi, a, b) {
    switch(operasi) {
        case 'tambah':
            return a + b;
        case 'kurang':
            return a - b;
        case 'kali':
            return a * b;
        case 'bagi':
            return b !== 0 ? a / b : 'Error: Pembagian dengan nol';
        default:
            return 'Operasi tidak valid';
    }
}

console.log(kalkulator('tambah', 5, 3)); // 8
console.log(kalkulator('bagi', 10, 0));  // Error: Pembagian dengan nol
```

---

# 2. Validasi Email

```javascript
function validasiEmail(email) {
    // Cek apakah ada @ dan .
    const mengandungAt = email.includes('@');
    const mengandungTitik = email.includes('.');
    const tidakKosong = email.length > 0;
    
    return mengandungAt && mengandungTitik && tidakKosong;
}

console.log(validasiEmail('user@email.com')); // true
console.log(validasiEmail('invalid-email')); // false
```

---

# 3. Konverter Suhu

```javascript
function celsiusKeFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitKeCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function konversiSuhu(nilai, dari, ke) {
    if (dari === 'celsius' && ke === 'fahrenheit') {
        return celsiusKeFahrenheit(nilai);
    } else if (dari === 'fahrenheit' && ke === 'celsius') {
        return fahrenheitKeCelsius(nilai);
    } else {
        return nilai; // sama
    }
}

console.log(konversiSuhu(25, 'celsius', 'fahrenheit')); // 77
```

---

# 4. Generator Password

```javascript
function generatePassword(panjang = 8) {
    const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    for (let i = 0; i < panjang; i++) {
        const randomIndex = Math.floor(Math.random() * karakter.length);
        password += karakter[randomIndex];
    }
    
    return password;
}

console.log(generatePassword());    // 8 karakter
console.log(generatePassword(12)); // 12 karakter
```

---

# 5. Sistem Grading

```javascript
function hitungGrade(nilai) {
    if (nilai >= 90) return 'A';
    else if (nilai >= 80) return 'B';  
    else if (nilai >= 70) return 'C';
    else if (nilai >= 60) return 'D';
    else return 'E';
}

function prosesNilaiMahasiswa(daftarNilai) {
    return daftarNilai.map(nilai => ({
        nilai: nilai,
        grade: hitungGrade(nilai),
        status: nilai >= 60 ? 'Lulus' : 'Tidak Lulus'
    }));
}

let nilai = [85, 72, 93, 58, 67];
console.log(prosesNilaiMahasiswa(nilai));
```

---

# R. Kesimpulan

Function adalah salah satu konsep paling penting dalam JavaScript yang memungkinkan:

1. **Kode yang dapat digunakan ulang** - Menghindari duplikasi kode
2. **Modularitas** - Memecah program menjadi bagian-bagian kecil
3. **Abstraksi** - Menyembunyikan detail implementasi
4. **Organisasi kode** - Membuat kode lebih terstruktur dan mudah dibaca

**Ingat**:
- Gunakan nama function yang deskriptif
- Satu function untuk satu tugas
- Manfaatkan parameter dan return value
- Pahami scope dan closure
- Gunakan arrow function untuk function sederhana

Dengan memahami function dengan baik, Anda dapat menulis kode JavaScript yang lebih efisien, mudah dipahami, dan mudah dipelihara.

---

# S. Referensi Tambahan

Untuk memperdalam pemahaman tentang function, disarankan untuk:

1. Berlatih membuat berbagai jenis function
2. Eksplorasi Array methods (map, filter, reduce)
3. Pelajari tentang asynchronous function (async/await)
4. Praktik dengan real-world projects

**Selamat belajar dan terus berlatih!**