# MODUL PERTEMUAN 11

# JavaScript Standard Library

---

# A. Identitas Mata Kuliah

Nama Mata Kuliah: Pemrograman Terstruktur
Program Studi: Sistem Informasi
Pertemuan: Minggu ke-11

---

# B. Deskripsi Singkat Pertemuan

Pada pertemuan ini mahasiswa akan mempelajari **JavaScript Standard Library**.

JavaScript Standard Library adalah **kumpulan object dan function bawaan** yang **tersedia secara otomatis** dalam JavaScript tanpa perlu menginstall library tambahan.

Sebagai contoh, menghitung akar kuadrat menggunakan Math:

```javascript
let hasil = Math.sqrt(16); // 4
```

Mengubah data menjadi format JSON:

```javascript
let data = {nama: "Andi", umur: 20};
let jsonString = JSON.stringify(data);
```

Mahasiswa akan mempelajari:

* konsep standard library
* Object JSON untuk serialisasi data
* Object Math untuk operasi matematika
* Object Date untuk manipulasi tanggal dan waktu
* Regular Expression untuk pattern matching
* Object methods tingkat lanjut
* Map dan Set sebagai struktur data
* BigInt dan Symbol sebagai tipe data khusus
* Proxy dan Reflect untuk metaprogramming
* Function encoding dan decoding

---

# C. Capaian Pembelajaran

Setelah mengikuti perkuliahan ini mahasiswa diharapkan mampu:

1. Menjelaskan konsep JavaScript Standard Library
2. Menggunakan JSON untuk serialisasi dan deserialisasi data
3. Menggunakan Math object untuk operasi matematika
4. Memanipulasi tanggal dan waktu dengan Date object
5. Menggunakan Regular Expression untuk pattern matching
6. Menggunakan method-method tingkat lanjut pada Object
7. Menggunakan Map dan Set sebagai struktur data
8. Memahami BigInt dan Symbol
9. Memahami konsep dasar Proxy dan Reflect
10. Melakukan encoding dan decoding string

**Peta Pembelajaran:**

```
[Week 11: JavaScript Standard Library]
│
├─ Dasar (Wajib dipahami)
│  ├─ JSON → Serialisasi data
│  ├─ Math → Operasi matematika
│  ├─ Date → Tanggal & waktu
│  └─ String/Number Methods → Review & pendalaman
│
├─ Menengah (Penting untuk aplikasi)
│  ├─ RegExp → Validasi & pattern matching
│  ├─ Object Advanced → Manipulasi object
│  ├─ Map & Set → Struktur data modern
│  └─ Encoding → URL & Base64
│
└─ Advanced (Opsional untuk pemula)
   ├─ BigInt & Symbol → Tipe data khusus
   └─ Proxy & Reflect → Metaprogramming
```

**Estimasi Waktu Belajar:**
- Materi Dasar: 3-4 jam
- Materi Menengah: 3-4 jam
- Materi Advanced: 2-3 jam
- Latihan & Praktikum: 4-5 jam
- **Total**: 12-16 jam

---

# D. Apa Itu JavaScript Standard Library

JavaScript Standard Library adalah **kumpulan object, function, dan class bawaan** yang **sudah tersedia** di JavaScript tanpa perlu menginstall package tambahan.

Karakteristik Standard Library:

1. **Built-in** - Sudah tersedia secara otomatis
2. **Cross-platform** - Berjalan di semua environment JavaScript
3. **Standar** - Mengikuti spesifikasi ECMAScript
4. **Global** - Dapat diakses dari mana saja dalam kode

Perbedaan dengan External Library:

| Aspek | Standard Library | External Library |
| ----- | ---------------- | ---------------- |
| Instalasi | Tidak perlu | Perlu install (npm, cdn) |
| Ukuran | Sudah built-in | Menambah ukuran project |
| Standar | ECMAScript standard | Dikembangkan pihak ketiga |
| Contoh | Math, Date, JSON | jQuery, Lodash, Moment |

---

# E. Komponen-komponen Standard Library

JavaScript Standard Library mencakup berbagai komponen:

**1. Object untuk Tipe Data Primitif:**
- String - Manipulasi string
- Number - Operasi angka
- Boolean - Operasi boolean
- Symbol - Identifier unik
- BigInt - Integer sangat besar

**2. Object untuk Struktur Data:**
- Array - List berurutan (sudah dipelajari Week 9)
- Object - Key-value pairs (sudah dipelajari Week 7)
- Map - Key-value dengan key fleksibel
- Set - Koleksi nilai unik
- WeakMap, WeakSet - Versi weak reference

**3. Object Utility:**
- Math - Operasi matematika
- Date - Tanggal dan waktu
- JSON - Serialisasi data
- RegExp - Pattern matching

**4. Object Lanjutan:**
- Proxy - Intercept operasi object
- Reflect - Manipulasi object reflektif
- Promise - Asynchronous operations (Week 12)

**5. Function Global:**
- parseInt(), parseFloat() - Parsing angka
- encodeURI(), decodeURI() - Encoding URL
- btoa(), atob() - Base64 encoding

---

# F. Object JSON

JSON (JavaScript Object Notation) adalah **format pertukaran data** yang ringan dan mudah dibaca.

## 1. Apa Itu JSON

JSON menggunakan sintaks yang mirip dengan object literal JavaScript:

```json
{
  "nama": "Andi",
  "umur": 20,
  "aktif": true,
  "nilai": [85, 90, 88]
}
```

Perbedaan JSON dengan JavaScript Object:

| Aspek | JavaScript Object | JSON |
| ----- | ----------------- | ---- |
| Key | Bisa tanpa quotes | Harus pakai quotes ganda |
| Value | Semua tipe JS | String, Number, Boolean, Array, Object, null |
| Function | Bisa ada | Tidak bisa |
| Undefined | Ada | Tidak ada |
| Komentar | Bisa | Tidak bisa |

---

## 2. JSON.stringify()

Mengubah JavaScript object menjadi JSON string.

**Sintaks:**

```javascript
JSON.stringify(value, replacer, space)
```

**Contoh dasar:**

```javascript
let mahasiswa = {
    nama: "Andi",
    umur: 20,
    aktif: true
};

let jsonString = JSON.stringify(mahasiswa);
console.log(jsonString); 
// Output: {"nama":"Andi","umur":20,"aktif":true}
```

**Dengan formatting (pretty print):**

```javascript
let jsonPretty = JSON.stringify(mahasiswa, null, 2);
console.log(jsonPretty);
/* Output:
{
  "nama": "Andi",
  "umur": 20,
  "aktif": true
}
*/
```

**Menggunakan replacer function:**

```javascript
let data = {
    nama: "Andi",
    password: "secret123",
    umur: 20
};

// Hilangkan password saat stringify
let json = JSON.stringify(data, (key, value) => {
    if (key === "password") return undefined;
    return value;
});
console.log(json); // {"nama":"Andi","umur":20}
```

**Menggunakan replacer array:**

```javascript
let data = {nama: "Andi", umur: 20, kota: "Jakarta"};

// Hanya ambil nama dan umur
let json = JSON.stringify(data, ["nama", "umur"]);
console.log(json); // {"nama":"Andi","umur":20}
```

---

## 3. JSON.parse()

Mengubah JSON string menjadi JavaScript object.

**Sintaks:**

```javascript
JSON.parse(text, reviver)
```

**Contoh dasar:**

```javascript
let jsonString = '{"nama":"Andi","umur":20,"aktif":true}';
let obj = JSON.parse(jsonString);

console.log(obj.nama); // "Andi"
console.log(obj.umur); // 20
console.log(obj.aktif); // true
```

**Menggunakan reviver function:**

```javascript
let jsonString = '{"nama":"Andi","tanggalLahir":"2000-01-15"}';

let obj = JSON.parse(jsonString, (key, value) => {
    // Ubah string tanggal menjadi Date object
    if (key === "tanggalLahir") {
        return new Date(value);
    }
    return value;
});

console.log(obj.tanggalLahir instanceof Date); // true
```

---

## 4. Handling Error JSON

Parsing JSON bisa menghasilkan error jika format tidak valid.

```javascript
try {
    let invalid = '{"nama": "Andi", "umur": }'; // syntax error
    let obj = JSON.parse(invalid);
} catch (error) {
    console.log("JSON tidak valid:", error.message);
}
```

**Best practice:**

```javascript
function parseJSONSafe(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}

let result = parseJSONSafe('{"nama":"Andi"}');
```

**Tips untuk Mahasiswa:**

- Selalu gunakan `try-catch` ketika parsing JSON dari sumber eksternal (API, user input)
- JSON tidak mendukung function, undefined, atau NaN - akan diubah menjadi null atau dihilangkan
- Gunakan JSON untuk menyimpan data sederhana, bukan untuk object kompleks dengan method
- JSON sangat berguna untuk komunikasi dengan server (API)

---

# G. Object Math

Object Math menyediakan **property dan method untuk operasi matematika**.

## 1. Property Math

Math memiliki beberapa konstanta matematika:

```javascript
Math.PI        // 3.141592653589793
Math.E         // 2.718281828459045
Math.LN2       // 0.6931471805599453 (natural log of 2)
Math.LN10      // 2.302585092994046 (natural log of 10)
Math.SQRT2     // 1.4142135623730951 (square root of 2)
Math.SQRT1_2   // 0.7071067811865476 (square root of 1/2)
```

**Contoh penggunaan:**

```javascript
function luasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
}

console.log(luasLingkaran(5)); // 78.53981633974483
```

---

## 2. Method Pembulatan

**Math.round()** - Pembulatan ke integer terdekat:

```javascript
Math.round(4.7);  // 5
Math.round(4.4);  // 4
Math.round(4.5);  // 5
Math.round(-4.5); // -4
```

**Math.ceil()** - Pembulatan ke atas:

```javascript
Math.ceil(4.1);   // 5
Math.ceil(4.9);   // 5
Math.ceil(-4.9);  // -4
```

**Math.floor()** - Pembulatan ke bawah:

```javascript
Math.floor(4.9);  // 4
Math.floor(4.1);  // 4
Math.floor(-4.1); // -5
```

**Math.trunc()** - Buang bagian desimal:

```javascript
Math.trunc(4.9);  // 4
Math.trunc(4.1);  // 4
Math.trunc(-4.9); // -4
Math.trunc(-4.1); // -4
```

---

## 3. Method Min dan Max

**Math.min()** - Nilai terkecil:

```javascript
Math.min(5, 10, 2, 8);     // 2
Math.min(-5, -10, -2);     // -10
Math.min(10);              // 10
Math.min();                // Infinity

// Dengan array menggunakan spread
let angka = [5, 10, 2, 8, 15];
Math.min(...angka);        // 2
```

**Math.max()** - Nilai terbesar:

```javascript
Math.max(5, 10, 2, 8);     // 10
Math.max(-5, -10, -2);     // -2
Math.max(10);              // 10
Math.max();                // -Infinity

// Dengan array
let angka = [5, 10, 2, 8, 15];
Math.max(...angka);        // 15
```

---

## 4. Method Pangkat dan Akar

**Math.pow()** - Pangkat:

```javascript
Math.pow(2, 3);   // 8 (2^3)
Math.pow(5, 2);   // 25 (5^2)
Math.pow(4, 0.5); // 2 (akar kuadrat)

// Alternatif dengan operator **
2 ** 3;           // 8
```

**Math.sqrt()** - Akar kuadrat:

```javascript
Math.sqrt(9);     // 3
Math.sqrt(16);    // 4
Math.sqrt(2);     // 1.4142135623730951
Math.sqrt(-1);    // NaN
```

**Math.cbrt()** - Akar kubik:

```javascript
Math.cbrt(8);     // 2
Math.cbrt(27);    // 3
Math.cbrt(-8);    // -2
```

---

## 5. Method Trigonometri

Semua method trigonometri menggunakan **radian** bukan derajat.

```javascript
// Konversi derajat ke radian
function toRadian(derajat) {
    return derajat * (Math.PI / 180);
}

// Konversi radian ke derajat
function toDegree(radian) {
    return radian * (180 / Math.PI);
}

// Trigonometri dasar
Math.sin(Math.PI / 2);     // 1 (sin 90°)
Math.cos(0);               // 1 (cos 0°)
Math.tan(Math.PI / 4);     // 1 (tan 45°)

// Inverse trigonometri
Math.asin(1);              // 1.5707... (arcsin 1)
Math.acos(1);              // 0 (arccos 1)
Math.atan(1);              // 0.7853... (arctan 1)
```

---

## 6. Method Lainnya

**Math.abs()** - Nilai absolut:

```javascript
Math.abs(-5);     // 5
Math.abs(3);      // 3
Math.abs(-3.14);  // 3.14
```

**Math.random()** - Angka random 0-1:

```javascript
Math.random();    // 0.0 sampai 0.999...

// Random integer antara min dan max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomInt(1, 6);  // Random 1-6 (seperti dadu)
randomInt(1, 100); // Random 1-100
```

**Math.sign()** - Tanda angka:

```javascript
Math.sign(5);     // 1
Math.sign(-5);    // -1
Math.sign(0);     // 0
Math.sign(-0);    // -0
```

**Tips untuk Mahasiswa:**

- Math.random() menghasilkan angka desimal 0.0 hingga 0.999..., tidak pernah mencapai 1.0
- Math.floor() sering digunakan bersama Math.random() untuk mendapatkan integer random
- Untuk pembulatan uang, lebih baik gunakan toFixed() daripada Math.round() untuk konsistensi desimal
- Math object tidak bisa di-instantiate (tidak bisa `new Math()`), semua property dan method adalah static

---

# H. Object Date

Object Date digunakan untuk **bekerja dengan tanggal dan waktu**.

## 1. Membuat Date Object

**Tanggal sekarang:**

```javascript
let sekarang = new Date();
console.log(sekarang); // Output: tanggal dan waktu saat ini
```

**Dari string:**

```javascript
let tanggal1 = new Date("2024-01-15");
let tanggal2 = new Date("January 15, 2024");
let tanggal3 = new Date("2024-01-15T10:30:00");
```

**Dari komponen (year, month, day, hour, minute, second, ms):**

```javascript
// Bulan dimulai dari 0 (Januari = 0, Desember = 11)
let tanggal = new Date(2024, 0, 15);  // 15 Januari 2024
let waktu = new Date(2024, 0, 15, 10, 30, 0);  // 15 Jan 2024, 10:30:00
```

**Dari timestamp (millisecond sejak 1 Jan 1970):**

```javascript
let tanggal = new Date(1000000000000); // Timestamp
```

---

## 2. Method Get

Mendapatkan komponen tanggal:

```javascript
let tanggal = new Date("2024-01-15T10:30:45");

tanggal.getFullYear();   // 2024
tanggal.getMonth();      // 0 (Januari, dimulai dari 0)
tanggal.getDate();       // 15 (tanggal 1-31)
tanggal.getDay();        // 1 (Senin, 0=Minggu, 6=Sabtu)
tanggal.getHours();      // 10
tanggal.getMinutes();    // 30
tanggal.getSeconds();    // 45
tanggal.getMilliseconds(); // 0
tanggal.getTime();       // Timestamp dalam millisecond
```

**Contoh praktis:**

```javascript
let sekarang = new Date();
let namaBulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
                 "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", 
                "Kamis", "Jumat", "Sabtu"];

console.log(`Hari ini: ${namaHari[sekarang.getDay()]}`);
console.log(`Tanggal: ${sekarang.getDate()} ${namaBulan[sekarang.getMonth()]} ${sekarang.getFullYear()}`);
```

---

## 3. Method Set

Mengubah komponen tanggal:

```javascript
let tanggal = new Date();

tanggal.setFullYear(2025);
tanggal.setMonth(11);        // Desember (0-11)
tanggal.setDate(25);         // Tanggal 25
tanggal.setHours(12);
tanggal.setMinutes(30);
tanggal.setSeconds(0);
```

---

## 4. Operasi Date

**Menghitung selisih waktu:**

```javascript
let tanggal1 = new Date("2024-01-01");
let tanggal2 = new Date("2024-01-15");

// Selisih dalam millisecond
let selisihMs = tanggal2 - tanggal1;

// Konversi ke hari
let selisihHari = selisihMs / (1000 * 60 * 60 * 24);
console.log(selisihHari); // 14
```

**Menambah/mengurangi tanggal:**

```javascript
let sekarang = new Date();

// Tambah 7 hari
sekarang.setDate(sekarang.getDate() + 7);

// Kurangi 1 bulan
sekarang.setMonth(sekarang.getMonth() - 1);

// Tambah 1 tahun
sekarang.setFullYear(sekarang.getFullYear() + 1);
```

---

## 5. Format Tanggal

**Method toString:**

```javascript
let tanggal = new Date();

tanggal.toString();        // "Mon Jan 15 2024 10:30:45 GMT+0700"
tanggal.toDateString();    // "Mon Jan 15 2024"
tanggal.toTimeString();    // "10:30:45 GMT+0700"
tanggal.toISOString();     // "2024-01-15T03:30:45.000Z" (format UTC)
tanggal.toLocaleDateString(); // "1/15/2024" (tergantung locale)
tanggal.toLocaleTimeString(); // "10:30:45 AM" (tergantung locale)

// Format locale Indonesia
tanggal.toLocaleDateString('id-ID'); // "15/1/2024"
tanggal.toLocaleString('id-ID');     // "15/1/2024 10.30.45"
```

**Custom format:**

```javascript
// Format DD/MM/YYYY
function formatTanggal(date) {
    let hari = String(date.getDate()).padStart(2, '0');
    let bulan = String(date.getMonth() + 1).padStart(2, '0');
    let tahun = date.getFullYear();
    return `${hari}/${bulan}/${tahun}`;
}

let tanggal = new Date();
console.log(formatTanggal(tanggal)); // "15/01/2024"

// Format dengan nama bulan
function formatTanggalLengkap(date) {
    const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                       "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let hari = date.getDate();
    let bulan = namaBulan[date.getMonth()];
    let tahun = date.getFullYear();
    return `${hari} ${bulan} ${tahun}`;
}

console.log(formatTanggalLengkap(tanggal)); // "15 Januari 2024"
```

---

## 6. Static Method Date

**Date.now()** - Timestamp sekarang:

```javascript
let timestamp = Date.now();
console.log(timestamp); // Millisecond sejak 1 Jan 1970
```

**Date.parse()** - Parse string menjadi timestamp:

```javascript
let timestamp = Date.parse("2024-01-15");
console.log(timestamp); // Timestamp
```

**Tips untuk Mahasiswa:**

- Bulan di JavaScript dimulai dari 0 (Januari = 0, Desember = 11), ini sering menjadi sumber bug!
- Gunakan getTime() untuk mendapatkan timestamp, berguna untuk perbandingan tanggal
- Date arithmetic (tambah/kurang) lebih mudah dengan setDate(), setMonth(), setFullYear()
- Untuk format tanggal yang konsisten, buat function sendiri atau gunakan library seperti date-fns
- Timestamp adalah millisecond sejak 1 Januari 1970 00:00:00 UTC (Unix Epoch)

---

# I. Regular Expression (RegExp)

Regular Expression (RegExp) adalah **pola pencarian** untuk **matching, searching, dan replacing** teks.

## 1. Membuat RegExp

**Cara 1: Literal notation:**

```javascript
let pattern = /abc/;
let pattern2 = /[0-9]+/;
```

**Cara 2: Constructor:**

```javascript
let pattern = new RegExp("abc");
let pattern2 = new RegExp("[0-9]+");
```

---

## 2. Flags (Modifier)

Flags mengubah perilaku pencarian:

```javascript
let pattern1 = /abc/i;     // i = case insensitive
let pattern2 = /abc/g;     // g = global (semua match)
let pattern3 = /abc/m;     // m = multiline
let pattern4 = /abc/gi;    // Kombinasi flags
```

| Flag | Keterangan |
| ---- | ---------- |
| i | Case insensitive |
| g | Global (cari semua match) |
| m | Multiline |
| s | Dot matches newline |
| u | Unicode |
| y | Sticky |

---

## 3. Method test()

Mengecek apakah pattern ada dalam string (return boolean).

```javascript
let pattern = /hello/;
console.log(pattern.test("hello world")); // true
console.log(pattern.test("goodbye"));     // false

// Case insensitive
let pattern2 = /hello/i;
console.log(pattern2.test("HELLO world")); // true
```

**Contoh validasi:**

```javascript
// Validasi email sederhana
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("user@example.com")); // true
console.log(emailPattern.test("invalid.email"));    // false

// Validasi nomor telepon (format: 08XX-XXXX-XXXX)
let phonePattern = /^08\d{2}-\d{4}-\d{4}$/;
console.log(phonePattern.test("0812-3456-7890")); // true
console.log(phonePattern.test("08123456789"));    // false
```

---

## 4. Method exec()

Mencari match dan mengembalikan informasi detail (array atau null).

```javascript
let pattern = /hello/;
let result = pattern.exec("hello world");
console.log(result);
/* Output:
[
  "hello",
  index: 0,
  input: "hello world",
  groups: undefined
]
*/

let noMatch = pattern.exec("goodbye");
console.log(noMatch); // null
```

**Dengan capturing group:**

```javascript
let pattern = /(\d{4})-(\d{2})-(\d{2})/;
let result = pattern.exec("Tanggal: 2024-01-15");

console.log(result[0]); // "2024-01-15" (full match)
console.log(result[1]); // "2024" (group 1)
console.log(result[2]); // "01" (group 2)
console.log(result[3]); // "15" (group 3)
```

---

## 5. String Method dengan RegExp

**match()** - Mencari match dalam string:

```javascript
let teks = "Harga: Rp 100.000 dan Rp 50.000";
let angka = teks.match(/\d+/g);
console.log(angka); // ["100", "000", "50", "000"]
```

**replace()** - Mengganti teks dengan pattern:

```javascript
let teks = "hello world";
let hasil = teks.replace(/hello/, "goodbye");
console.log(hasil); // "goodbye world"

// Replace dengan function
let teks2 = "halo dunia";
let hasil2 = teks2.replace(/\b\w/g, (match) => match.toUpperCase());
console.log(hasil2); // "Halo Dunia"
```

**search()** - Mencari posisi match:

```javascript
let teks = "hello world";
console.log(teks.search(/world/)); // 6
console.log(teks.search(/xyz/));   // -1
```

**split()** - Memecah string dengan pattern:

```javascript
let teks = "satu,dua;tiga:empat";
let array = teks.split(/[,:;]/);
console.log(array); // ["satu", "dua", "tiga", "empat"]
```

---

## 6. Pattern Umum

**Karakter khusus:**

```javascript
\d  // Digit [0-9]
\D  // Non-digit
\w  // Word character [a-zA-Z0-9_]
\W  // Non-word character
\s  // Whitespace
\S  // Non-whitespace
.   // Any character (except newline)
```

**Quantifier:**

```javascript
*   // 0 atau lebih
+   // 1 atau lebih
?   // 0 atau 1
{n}    // Tepat n kali
{n,}   // Minimal n kali
{n,m}  // Antara n sampai m kali
```

**Contoh pattern:**

```javascript
// Username (alphanumeric, 3-16 karakter)
/^[a-zA-Z0-9]{3,16}$/

// Password (minimal 8 karakter, ada huruf dan angka)
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

// URL
/^https?:\/\/.+/

// Nomor telepon Indonesia
/^(\+62|62|0)[0-9]{9,12}$/
```

**Tips untuk Mahasiswa:**

- RegExp terlihat rumit di awal, tapi sangat powerful untuk validasi data
- Gunakan online tool seperti regex101.com untuk test dan debug pattern
- Untuk email, gunakan library validasi atau pattern sederhana - validasi email sempurna sangat kompleks
- Flag `g` (global) penting untuk `replace()` agar mengganti semua match, bukan hanya yang pertama
- Karakter khusus (. * + ? ^ $ { } [ ] \ | ( )) harus di-escape dengan backslash \

---

# J. Object Advanced Methods

Object memiliki method-method tingkat lanjut untuk manipulasi yang lebih kompleks.

## 1. Object.keys()

Mendapatkan array berisi semua key dari object.

```javascript
let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Informatika"
};

let keys = Object.keys(mahasiswa);
console.log(keys); // ["nama", "umur", "jurusan"]

// Iterasi dengan keys
keys.forEach(key => {
    console.log(`${key}: ${mahasiswa[key]}`);
});
```

---

## 2. Object.values()

Mendapatkan array berisi semua value dari object.

```javascript
let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Informatika"
};

let values = Object.values(mahasiswa);
console.log(values); // ["Andi", 20, "Informatika"]

// Contoh: hitung total nilai
let nilai = {mtk: 85, fisika: 90, kimia: 88};
let total = Object.values(nilai).reduce((sum, n) => sum + n, 0);
console.log(total); // 263
```

---

## 3. Object.entries()

Mendapatkan array berisi pasangan [key, value].

```javascript
let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Informatika"
};

let entries = Object.entries(mahasiswa);
console.log(entries);
// [["nama", "Andi"], ["umur", 20], ["jurusan", "Informatika"]]

// Iterasi dengan destructuring
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

// Konversi ke Map
let map = new Map(entries);
```

---

## 4. Object.assign()

Menyalin property dari satu atau lebih object ke target object.

```javascript
let target = {a: 1};
let source1 = {b: 2};
let source2 = {c: 3};

Object.assign(target, source1, source2);
console.log(target); // {a: 1, b: 2, c: 3}

// Membuat shallow copy
let original = {x: 1, y: 2};
let copy = Object.assign({}, original);

// Menggabungkan object dengan default values
let defaults = {host: "localhost", port: 3000};
let config = {port: 8080};
let finalConfig = Object.assign({}, defaults, config);
console.log(finalConfig); // {host: "localhost", port: 8080}
```

---

## 5. Object.freeze()

Membuat object menjadi immutable (tidak bisa diubah).

```javascript
let obj = {
    nama: "Andi",
    umur: 20
};

Object.freeze(obj);

// Tidak akan berubah
obj.nama = "Budi";
obj.umur = 25;
delete obj.nama;

console.log(obj); // {nama: "Andi", umur: 20} (tidak berubah)

// Cek apakah frozen
console.log(Object.isFrozen(obj)); // true
```

**Catatan:** Freeze hanya shallow (tidak freeze nested object).

```javascript
let obj = {
    nama: "Andi",
    alamat: {kota: "Jakarta"}
};

Object.freeze(obj);

obj.nama = "Budi";              // Tidak berubah
obj.alamat.kota = "Bandung";    // BERUBAH (nested object tidak frozen)
```

---

## 6. Object.seal()

Mencegah penambahan/penghapusan property, tapi property masih bisa diubah.

```javascript
let obj = {
    nama: "Andi",
    umur: 20
};

Object.seal(obj);

// Bisa diubah
obj.nama = "Budi";
obj.umur = 25;
console.log(obj); // {nama: "Budi", umur: 25}

// Tidak bisa tambah/hapus
obj.jurusan = "Informatika"; // Tidak ditambahkan
delete obj.umur;              // Tidak dihapus

// Cek apakah sealed
console.log(Object.isSealed(obj)); // true
```

**Perbedaan freeze vs seal:**

| Method | Ubah nilai | Tambah property | Hapus property |
| ------ | ---------- | --------------- | -------------- |
| freeze | Tidak bisa | Tidak bisa | Tidak bisa |
| seal | Bisa | Tidak bisa | Tidak bisa |

---

## 7. Object.create()

Membuat object baru dengan prototype tertentu.

```javascript
let personPrototype = {
    sapa: function() {
        return `Halo, nama saya ${this.nama}`;
    }
};

let andi = Object.create(personPrototype);
andi.nama = "Andi";
console.log(andi.sapa()); // "Halo, nama saya Andi"

// Membuat object tanpa prototype
let obj = Object.create(null);
console.log(obj.toString); // undefined (tidak punya prototype)
```

---

## 8. Object.hasOwnProperty()

Mengecek apakah object memiliki property sendiri (bukan dari prototype).

```javascript
let obj = {nama: "Andi"};

console.log(obj.hasOwnProperty("nama"));     // true
console.log(obj.hasOwnProperty("toString")); // false (dari prototype)

// Cara modern (Object.hasOwn)
console.log(Object.hasOwn(obj, "nama"));     // true
```

**Tips untuk Mahasiswa:**

- Object.keys/values/entries sangat berguna untuk loop dan transformasi data
- Object.assign() hanya shallow copy - nested object masih reference
- Object.freeze() membuat object immutable, bagus untuk konstanta dan config
- Object.seal() vs freeze: seal masih bisa ubah nilai, freeze tidak bisa sama sekali
- Gunakan Object.entries() dengan Map constructor: `new Map(Object.entries(obj))`

---

# K. Map dan Set

Map dan Set adalah **struktur data** yang diperkenalkan di ES6.

## 1. Map

Map adalah **koleksi key-value** di mana key bisa berupa **tipe data apapun**.

**Perbedaan Map vs Object:**

| Aspek | Object | Map |
| ----- | ------ | --- |
| Key | Hanya string/Symbol | Tipe apapun |
| Urutan | Tidak teratur (sebelum ES6) | Urutan sesuai insertion |
| Size | Manual count | Property .size |
| Iterasi | for...in atau Object.keys | for...of, forEach |

**Membuat Map:**

```javascript
let map = new Map();

// Atau dengan array [key, value]
let map2 = new Map([
    ["nama", "Andi"],
    ["umur", 20],
    ["aktif", true]
]);
```

**Method Map:**

```javascript
let map = new Map();

// Menambah/mengubah
map.set("nama", "Andi");
map.set("umur", 20);
map.set(1, "satu"); // Key bisa number
map.set(true, "benar"); // Key bisa boolean

// Mendapatkan value
console.log(map.get("nama")); // "Andi"
console.log(map.get(1));      // "satu"

// Mengecek keberadaan key
console.log(map.has("nama")); // true
console.log(map.has("kota")); // false

// Menghapus
map.delete("umur");

// Ukuran
console.log(map.size); // 3

// Menghapus semua
map.clear();
```

**Iterasi Map:**

```javascript
let map = new Map([
    ["nama", "Andi"],
    ["umur", 20],
    ["kota", "Jakarta"]
]);

// forEach
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// for...of dengan destructuring
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Iterasi keys saja
for (let key of map.keys()) {
    console.log(key);
}

// Iterasi values saja
for (let value of map.values()) {
    console.log(value);
}
```

**Contoh praktis:**

```javascript
// Menghitung frekuensi kata
function hitungKata(teks) {
    let map = new Map();
    let kata = teks.toLowerCase().split(/\s+/);
    
    for (let k of kata) {
        map.set(k, (map.get(k) || 0) + 1);
    }
    
    return map;
}

let teks = "hello world hello";
let frekuensi = hitungKata(teks);
console.log(frekuensi);
// Map(2) { "hello" => 2, "world" => 1 }
```

---

## 2. Set

Set adalah **koleksi nilai unik** (tidak ada duplikat).

**Membuat Set:**

```javascript
let set = new Set();

// Atau dengan array
let set2 = new Set([1, 2, 3, 4, 5]);

// Duplikat otomatis dihilangkan
let set3 = new Set([1, 1, 2, 2, 3, 3]);
console.log(set3); // Set(3) {1, 2, 3}
```

**Method Set:**

```javascript
let set = new Set();

// Menambah nilai
set.add(1);
set.add(2);
set.add(3);
set.add(1); // Tidak ditambahkan (duplikat)

// Mengecek keberadaan
console.log(set.has(1)); // true
console.log(set.has(5)); // false

// Ukuran
console.log(set.size); // 3

// Menghapus
set.delete(2);

// Menghapus semua
set.clear();
```

**Iterasi Set:**

```javascript
let set = new Set([1, 2, 3, 4, 5]);

// forEach
set.forEach(value => {
    console.log(value);
});

// for...of
for (let value of set) {
    console.log(value);
}

// Konversi ke array
let array = [...set];
// atau
let array2 = Array.from(set);
```

**Contoh praktis:**

```javascript
// Menghilangkan duplikat dari array
function removeDuplicates(array) {
    return [...new Set(array)];
}

let angka = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log(removeDuplicates(angka)); // [1, 2, 3, 4, 5]

// Operasi himpunan
function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);

console.log(union(a, b));        // Set(5) {1, 2, 3, 4, 5}
console.log(intersection(a, b)); // Set(1) {3}
console.log(difference(a, b));   // Set(2) {1, 2}
```

**Tips untuk Mahasiswa:**

- **Map vs Object**: Gunakan Map ketika key-nya bisa tipe apapun atau perlu urutan insertion
- **Set vs Array**: Gunakan Set ketika butuh koleksi unik tanpa duplikat
- Map dan Set memiliki property `.size` (bukan `.length` seperti array)
- Map dan Set iterable, bisa digunakan dengan `for...of` dan spread operator
- Untuk cek keberadaan elemen, Set.has() lebih cepat daripada Array.includes() untuk data besar

---

# L. BigInt dan Symbol

## 1. BigInt

BigInt adalah **tipe data untuk integer yang sangat besar** (lebih besar dari Number.MAX_SAFE_INTEGER).

**Membuat BigInt:**

```javascript
// Dengan suffix n
let big1 = 12345678901234567890n;

// Dengan constructor
let big2 = BigInt("12345678901234567890");
let big3 = BigInt(123);

console.log(typeof big1); // "bigint"
```

**Batasan Number biasa:**

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
let num = 9007199254740991;
console.log(num + 1); // 9007199254740992
console.log(num + 2); // 9007199254740992 (salah!)
```

**Operasi BigInt:**

```javascript
let a = 100n;
let b = 50n;

console.log(a + b);  // 150n
console.log(a - b);  // 50n
console.log(a * b);  // 5000n
console.log(a / b);  // 2n (pembagian integer)
console.log(a % b);  // 0n
console.log(2n ** 10n); // 1024n (pangkat)

// Perbandingan
console.log(10n > 5n);   // true
console.log(10n < 20n);  // true
console.log(10n === 10); // false (tipe berbeda)
console.log(10n == 10);  // true (coercion)
```

**Catatan penting:**

```javascript
// TIDAK BISA mixing BigInt dan Number
let big = 10n;
let num = 5;
// console.log(big + num); // Error!

// Harus konversi dulu
console.log(big + BigInt(num)); // 15n
console.log(Number(big) + num); // 15
```

**Kapan menggunakan BigInt:**

- Ketika bekerja dengan integer sangat besar (lebih dari 2^53 - 1)
- Perhitungan kriptografi
- ID unik yang sangat panjang
- Perhitungan matematika presisi tinggi

**Contoh praktis:**

```javascript
// Faktorial angka besar
function factorial(n) {
    if (n === 0n || n === 1n) return 1n;
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(20n)); // 2432902008176640000n
console.log(factorial(50n)); // Angka sangat besar
```

---

## 2. Symbol

Symbol adalah **tipe data primitif untuk identifier unik**.

**Membuat Symbol:**

```javascript
let sym1 = Symbol();
let sym2 = Symbol("deskripsi");
let sym3 = Symbol("deskripsi");

console.log(sym2 === sym3); // false (setiap Symbol unik)
console.log(typeof sym1);   // "symbol"
```

**Kegunaan 1: Property key unik:**

```javascript
let id = Symbol("id");

let user = {
    nama: "Andi",
    [id]: 123 // Property dengan Symbol key
};

console.log(user.nama);     // "Andi"
console.log(user[id]);      // 123
console.log(user["id"]);    // undefined

// Symbol tidak muncul di iterasi biasa
console.log(Object.keys(user));    // ["nama"]
console.log(JSON.stringify(user)); // {"nama":"Andi"}

// Tapi bisa diakses dengan getOwnPropertySymbols
let symbols = Object.getOwnPropertySymbols(user);
console.log(symbols); // [Symbol(id)]
```

**Kegunaan 2: Well-known Symbols:**

```javascript
// Symbol.iterator untuk custom iteration
let range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}
```

**Symbol.for() dan Symbol.keyFor():**

```javascript
// Global symbol registry
let sym1 = Symbol.for("user.id");
let sym2 = Symbol.for("user.id");

console.log(sym1 === sym2); // true (sama karena dari registry)

// Mendapatkan key dari global symbol
console.log(Symbol.keyFor(sym1)); // "user.id"
```

**Tips untuk Mahasiswa:**

- BigInt untuk perhitungan yang membutuhkan presisi tinggi (> 2^53 - 1)
- BigInt tidak bisa dicampur dengan Number dalam operasi, harus konversi dulu
- Symbol cocok untuk membuat property yang "tersembunyi" dari iterasi biasa
- Symbol.iterator memungkinkan object kita bisa di-loop dengan `for...of`
- Dalam praktik, BigInt dan Symbol jarang digunakan untuk project sederhana

---

# M. Proxy dan Reflect

Proxy dan Reflect adalah fitur **metaprogramming** untuk intercept dan customize operasi pada object.

## 1. Proxy

Proxy adalah **wrapper** yang bisa intercept operasi pada object.

**Sintaks:**

```javascript
let proxy = new Proxy(target, handler);
```

**Contoh dasar:**

```javascript
let target = {
    nama: "Andi",
    umur: 20
};

let handler = {
    get: function(obj, prop) {
        console.log(`Mengakses property: ${prop}`);
        return obj[prop];
    },
    
    set: function(obj, prop, value) {
        console.log(`Mengubah ${prop} menjadi ${value}`);
        obj[prop] = value;
        return true;
    }
};

let proxy = new Proxy(target, handler);

console.log(proxy.nama);  // Log: "Mengakses property: nama", Output: "Andi"
proxy.umur = 21;          // Log: "Mengubah umur menjadi 21"
```

**Contoh: Validasi:**

```javascript
let validator = {
    set: function(obj, prop, value) {
        if (prop === "umur") {
            if (typeof value !== "number" || value < 0) {
                throw new TypeError("Umur harus angka positif");
            }
        }
        obj[prop] = value;
        return true;
    }
};

let person = new Proxy({}, validator);

person.umur = 20;  // OK
// person.umur = -5;  // Error: Umur harus angka positif
// person.umur = "dua puluh"; // Error: Umur harus angka positif
```

**Contoh: Default values:**

```javascript
let handler = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : "Property tidak ada";
    }
};

let obj = new Proxy({nama: "Andi"}, handler);

console.log(obj.nama);    // "Andi"
console.log(obj.umur);    // "Property tidak ada"
console.log(obj.apapun);  // "Property tidak ada"
```

**Trap yang tersedia:**

- get, set, has, deleteProperty
- apply, construct
- getPrototypeOf, setPrototypeOf
- isExtensible, preventExtensions
- getOwnPropertyDescriptor, defineProperty
- ownKeys

---

## 2. Reflect

Reflect menyediakan method untuk operasi object yang dapat di-intercept.

**Method Reflect:**

```javascript
let obj = {nama: "Andi", umur: 20};

// Get property
Reflect.get(obj, "nama"); // "Andi"

// Set property
Reflect.set(obj, "umur", 21); // true

// Has property
Reflect.has(obj, "nama"); // true

// Delete property
Reflect.deleteProperty(obj, "umur"); // true

// Get keys
Reflect.ownKeys(obj); // ["nama"]
```

**Menggunakan Reflect dalam Proxy:**

```javascript
let handler = {
    get: function(obj, prop) {
        console.log(`Get: ${prop}`);
        return Reflect.get(obj, prop); // Gunakan Reflect
    },
    
    set: function(obj, prop, value) {
        console.log(`Set: ${prop} = ${value}`);
        return Reflect.set(obj, prop, value); // Gunakan Reflect
    }
};

let target = {nama: "Andi"};
let proxy = new Proxy(target, handler);

proxy.nama;      // Log: "Get: nama"
proxy.umur = 20; // Log: "Set: umur = 20"
```

**Keuntungan Reflect:**

1. Method return boolean untuk success/failure
2. Lebih konsisten dengan Proxy traps
3. Menghindari error, return boolean instead

**Tips untuk Mahasiswa:**

- Proxy dan Reflect adalah topik advanced - normal jika belum langsung paham
- Proxy berguna untuk: logging, validasi, observasi perubahan data, virtual property
- Reflect sering dipakai dalam Proxy handler untuk operasi default
- Dalam development sehari-hari, jarang menggunakan Proxy/Reflect kecuali untuk library/framework
- Framework seperti Vue.js menggunakan Proxy untuk reactive data

---

# N. Encoding dan Decoding

JavaScript menyediakan function untuk encoding dan decoding string.

## 1. Base64 Encoding

**btoa()** - Encode string ke Base64:

```javascript
let teks = "Hello World";
let encoded = btoa(teks);
console.log(encoded); // "SGVsbG8gV29ybGQ="
```

**atob()** - Decode dari Base64:

```javascript
let encoded = "SGVsbG8gV29ybGQ=";
let decoded = atob(encoded);
console.log(decoded); // "Hello World"
```

**Catatan:** btoa/atob hanya untuk ASCII characters.

```javascript
// Error untuk non-ASCII
// btoa("Halo 你好"); // Error!

// Solusi: encode dulu ke URI
function base64Encode(str) {
    return btoa(encodeURIComponent(str));
}

function base64Decode(str) {
    return decodeURIComponent(atob(str));
}
```

---

## 2. URI Encoding

**encodeURI()** - Encode URL lengkap:

```javascript
let url = "https://example.com/search?query=hello world&page=1";
let encoded = encodeURI(url);
console.log(encoded);
// "https://example.com/search?query=hello%20world&page=1"
```

Karakter yang tidak di-encode: A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #

**decodeURI()** - Decode URL:

```javascript
let encoded = "https://example.com/search?query=hello%20world";
let decoded = decodeURI(encoded);
console.log(decoded);
// "https://example.com/search?query=hello world"
```

---

## 3. URI Component Encoding

**encodeURIComponent()** - Encode component URL (query parameters, dll):

```javascript
let param = "hello world & goodbye";
let encoded = encodeURIComponent(param);
console.log(encoded); 
// "hello%20world%20%26%20goodbye"

// Membuat URL dengan query params
let base = "https://example.com/search";
let query = "hello & goodbye";
let page = 1;
let url = `${base}?query=${encodeURIComponent(query)}&page=${page}`;
console.log(url);
// "https://example.com/search?query=hello%20%26%20goodbye&page=1"
```

Karakter yang tidak di-encode: A-Z a-z 0-9 - _ . ! ~ * ' ( )

**decodeURIComponent()** - Decode component:

```javascript
let encoded = "hello%20world%20%26%20goodbye";
let decoded = decodeURIComponent(encoded);
console.log(decoded); // "hello world & goodbye"
```

**Perbedaan encodeURI vs encodeURIComponent:**

| Karakter | encodeURI | encodeURIComponent |
| -------- | --------- | ------------------ |
| ; / ? : @ & = + $ , # | Tidak di-encode | Di-encode |
| Kegunaan | URL lengkap | Query parameter, path segment |

**Contoh praktis:**

```javascript
// Membuat URL search dengan multiple params
function buildSearchURL(base, params) {
    let query = Object.keys(params)
        .map(key => `${key}=${encodeURIComponent(params[key])}`)
        .join("&");
    return `${base}?${query}`;
}

let url = buildSearchURL("https://example.com/search", {
    query: "javascript tutorial",
    category: "programming & web",
    page: 1
});
console.log(url);
// "https://example.com/search?query=javascript%20tutorial&category=programming%20%26%20web&page=1"

// Parse URL query string
function parseQueryString(url) {
    const params = {};
    const urlObj = new URL(url);
    
    for (let [key, value] of urlObj.searchParams) {
        params[key] = value;
    }
    
    return params;
}

let parsed = parseQueryString("https://example.com/search?query=javascript&page=1");
console.log(parsed); // {query: "javascript", page: "1"}
```

---

# N.1. Kesalahan Umum dan Cara Menghindarinya

Berikut adalah kesalahan umum yang sering dilakukan mahasiswa ketika menggunakan JavaScript Standard Library:

**1. Kesalahan dengan JSON:**

```javascript
// SALAH: Mencoba stringify function
let obj = {
    nama: "Andi",
    sapa: function() { return "Hello"; }
};
console.log(JSON.stringify(obj)); // {"nama":"Andi"} - function hilang!

// BENAR: Hanya simpan data, bukan function
let obj = {
    nama: "Andi",
    pesan: "Hello"
};
```

**2. Kesalahan dengan Date:**

```javascript
// SALAH: Lupa bahwa bulan mulai dari 0
let tanggal = new Date(2024, 1, 15);  // Februari, bukan Januari!
let tanggal = new Date(2024, 12, 15); // Invalid Date!

// BENAR: Ingat bulan 0-11
let tanggal = new Date(2024, 0, 15);  // Januari
let tanggal = new Date(2024, 11, 15); // Desember
```

**3. Kesalahan dengan Math.random():**

```javascript
// SALAH: Random integer tidak tepat
let random = Math.random() * 10;  // 0.0 - 9.999... (ada desimal!)

// BENAR: Gunakan Math.floor
let random = Math.floor(Math.random() * 10);  // 0 - 9 (integer)

// SALAH: Range tidak tepat
let random = Math.floor(Math.random() * 6);    // 0 - 5 (bukan 1-6!)

// BENAR: Random 1-6 (seperti dadu)
let random = Math.floor(Math.random() * 6) + 1; // 1 - 6
```

**4. Kesalahan dengan RegExp:**

```javascript
// SALAH: Lupa escape karakter khusus
let pattern = /gmail.com/;  // '.' berarti any character!
console.log(pattern.test("gmail_com")); // true (salah!)

// BENAR: Escape titik
let pattern = /gmail\\.com/;
console.log(pattern.test("gmail.com")); // true
console.log(pattern.test("gmail_com")); // false

// SALAH: Lupa flag 'g' untuk replace all
let text = "hello hello hello";
console.log(text.replace(/hello/, "hi")); // "hi hello hello"

// BENAR: Gunakan flag 'g'
console.log(text.replace(/hello/g, "hi")); // "hi hi hi"
```

**5. Kesalahan dengan Object methods:**

```javascript
// SALAH: Mengira Object.freeze() deep freeze
let obj = {
    nama: "Andi",
    alamat: { kota: "Jakarta" }
};
Object.freeze(obj);
obj.alamat.kota = "Bandung";  // BERUBAH! (nested object tidak frozen)

// BENAR: Buat deep freeze function sendiri
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    });
    return obj;
}
```

**6. Kesalahan dengan Map dan Set:**

```javascript
// SALAH: Gunakan .length untuk Map/Set
let map = new Map([["a", 1], ["b", 2]]);
console.log(map.length);  // undefined!

// BENAR: Gunakan .size
console.log(map.size);  // 2

// SALAH: Cek keberadaan dengan has() di Array
let arr = [1, 2, 3];
console.log(arr.has(2));  // Error! Array tidak punya has()

// BENAR: Gunakan includes() untuk Array
console.log(arr.includes(2));  // true

// Atau gunakan Set
let set = new Set(arr);
console.log(set.has(2));  // true
```

**7. Kesalahan dengan BigInt:**

```javascript
// SALAH: Campur BigInt dengan Number
let big = 10n;
let num = 5;
console.log(big + num);  // Error!

// BENAR: Konversi dulu
console.log(big + BigInt(num));  // 15n
console.log(Number(big) + num);  // 15

// SALAH: Gunakan Math.max dengan BigInt
Math.max(10n, 20n);  // Error!

// BENAR: Gunakan operator perbandingan
let max = 10n > 20n ? 10n : 20n;
```

**8. Kesalahan dengan encodeURI:**

```javascript
// SALAH: Gunakan encodeURI untuk query parameter
let param = "hello world";
let url = "https://example.com?q=" + encodeURI(param);
// Spasi tidak di-encode dengan benar!

// BENAR: Gunakan encodeURIComponent
let url = "https://example.com?q=" + encodeURIComponent(param);
// "https://example.com?q=hello%20world"
```

**Tips Debugging:**

1. Gunakan `console.log()` untuk cek tipe data: `console.log(typeof value)`
2. Gunakan `console.table()` untuk object dan array
3. Cek dokumentasi MDN jika ragu
4. Test di browser console dulu sebelum masukkan ke kode
5. Gunakan try-catch untuk operasi yang rawan error (JSON.parse, Date parsing)

---

# O. Rangkuman

JavaScript Standard Library menyediakan banyak object dan function bawaan yang sangat berguna:

**Data Serialization:**
- JSON.stringify() dan JSON.parse() untuk mengubah data ke/dari format JSON
- Use case: Menyimpan data ke localStorage, komunikasi dengan API

**Matematika:**
- Math object dengan method seperti round, floor, ceil, max, min, sqrt, pow, random
- Use case: Perhitungan harga, random number generator, geometri

**Tanggal dan Waktu:**
- Date object untuk manipulasi tanggal, mendapatkan komponen tanggal, dan operasi waktu
- Use case: Menampilkan tanggal, countdown timer, hitung umur, filter by date

**Pattern Matching:**
- RegExp untuk validasi, pencarian, dan penggantian teks dengan pattern
- Use case: Validasi form (email, phone), search & replace, parsing text

**Object Advanced:**
- Object.keys(), values(), entries() untuk iterasi
- Object.assign() untuk merging
- Object.freeze() dan seal() untuk immutability
- Use case: Data transformation, config management, deep copy

**Struktur Data:**
- Map untuk key-value dengan key fleksibel
- Set untuk koleksi nilai unik
- Use case: Caching, remove duplicates, data grouping, frequency counting

**Tipe Data Khusus:**
- BigInt untuk integer sangat besar
- Symbol untuk identifier unik
- Use case: ID generation, kriptografi, private properties

**Metaprogramming:**
- Proxy untuk intercept operasi object
- Reflect untuk operasi reflektif
- Use case: Data validation, logging, reactive programming, observables

**Encoding:**
- btoa/atob untuk Base64
- encodeURI/decodeURI untuk URL
- encodeURIComponent/decodeURIComponent untuk URL component
- Use case: Encode image data, build URLs, API requests

**Kesimpulan untuk Mahasiswa:**

Standard Library JavaScript sangat lengkap dan powerful. Mahasiswa tidak perlu menghafal semua method, tapi harus:

1. **Tahu apa yang tersedia** - Ketika ada masalah, ingat bahwa JavaScript mungkin sudah punya solusinya
2. **Praktek rutin** - Gunakan dalam project untuk benar-benar paham
3. **Baca dokumentasi** - MDN adalah teman terbaik programmer JavaScript
4. **Mulai dari dasar** - JSON, Math, Date, dan String methods adalah yang paling sering digunakan
5. **Bertahap ke advanced** - Proxy, Reflect, Symbol bisa dipelajari setelah mahir yang dasar

**Urutan Prioritas Belajar:**

- **Level 1 (Wajib)**: JSON, Math dasar, Date dasar, String/Number methods
- **Level 2 (Penting)**: RegExp, Object methods (keys/values/entries), Array methods
- **Level 3 (Berguna)**: Map, Set, Math advanced, Date formatting
- **Level 4 (Advanced)**: BigInt, Symbol, Proxy, Reflect

---

# P. Latihan

**Latihan Dasar:**

1. **JSON & Object**: Buat function untuk meng-encode dan decode data mahasiswa ke JSON
   - Hint: Gunakan JSON.stringify() dan JSON.parse()

2. **Math**: Buat function untuk menghitung luas dan keliling lingkaran
   - Hint: Gunakan Math.PI, rumus luas = π × r², keliling = 2 × π × r

3. **Date**: Buat function untuk menghitung umur dari tanggal lahir
   - Hint: Gunakan getFullYear(), getMonth(), getDate()

4. **String Methods**: Buat function untuk format nama (Title Case)
   - Hint: Split, map, toUpperCase(), toLowerCase()

**Latihan Menengah:**

5. **RegExp**: Buat function untuk validasi email menggunakan RegExp
   - Hint: Pattern /^[^\s@]+@[^\s@]+\.[^\s@]+$/

6. **RegExp**: Buat function untuk validasi password (minimal 8 karakter, ada huruf dan angka)
   - Hint: Gunakan test() dengan pattern yang sesuai

7. **Set**: Buat function untuk menghilangkan duplikat dari array
   - Hint: new Set(array) dan spread operator

8. **Map**: Buat Map untuk menghitung frekuensi kata dalam string
   - Hint: Split string, loop, dan gunakan map.get() dan map.set()

**Latihan Lanjutan:**

9. **Math.random()**: Buat function untuk generate random password (huruf besar, kecil, angka)
   - Hint: Buat string karakter, loop, Math.floor(Math.random() * length)

10. **Number Format**: Buat function untuk format angka menjadi format mata uang (Rp 100.000)
    - Hint: toLocaleString('id-ID') atau manual dengan replace

11. **Proxy**: Buat object dengan Proxy yang log setiap akses property
    - Hint: Handler dengan get dan set trap

12. **Encoding**: Buat function untuk build URL search dengan query parameters
    - Hint: encodeURIComponent() untuk setiap parameter

13. **BigInt**: Buat function untuk menghitung faktorial angka besar (> 20)
    - Hint: Gunakan BigInt, loop dari 1n sampai n

14. **Symbol**: Buat class dengan private property menggunakan Symbol
    - Hint: Buat Symbol di luar class, gunakan sebagai key

15. **Comprehensive**: Buat sistem manajemen data sederhana yang menggunakan Map, Set, dan Proxy
    - Hint: Gabungkan berbagai fitur Standard Library

---

# Q. Referensi

**Dokumentasi Online:**

1. MDN Web Docs - JavaScript Standard Built-in Objects
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

2. JavaScript.info - Modern JavaScript Tutorial
   - https://javascript.info/

3. ECMAScript Specification
   - https://tc39.es/ecma262/

**Buku Rekomendasi:**

4. JavaScript: The Definitive Guide by David Flanagan
   - Referensi lengkap JavaScript

5. You Don't Know JS (YDKJS) by Kyle Simpson
   - Penjelasan mendalam tentang JavaScript

6. Eloquent JavaScript by Marijn Haverbeke
   - Buku interaktif untuk belajar JavaScript

**Video Tutorial:**

7. JavaScript Tutorial - W3Schools
8. JavaScript Full Course - freeCodeCamp
9. The Complete JavaScript Course - Udemy

---

**Selamat Belajar!**
