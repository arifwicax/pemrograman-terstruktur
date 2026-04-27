// ==========================================
// ITERASI ARRAY DALAM JAVASCRIPT
// ==========================================

console.log("=== ITERASI ARRAY DALAM JAVASCRIPT ===\n");
console.log("Ada banyak cara untuk melakukan perulangan (iterasi) pada array.");
console.log("Mari kita pelajari berbagai metode iterasi dari yang sederhana hingga modern!");
console.log("");

// ==========================================
// 1. FOR LOOP TRADISIONAL
// ==========================================

console.log("=== 1. FOR LOOP TRADISIONAL ===");
console.log("Metode paling dasar dan memberikan kontrol penuh");
console.log("");

let buah = ["apel", "jeruk", "pisang", "mangga", "melon"];
console.log("Array buah:", buah);

console.log("\nIterasi dengan for loop:");
for (let i = 0; i < buah.length; i++) {
    console.log(`Index ${i}: ${buah[i]}`);
}

// For loop dengan optimasi (menyimpan length)
console.log("\nFor loop dengan optimasi:");
for (let i = 0, len = buah.length; i < len; i++) {
    console.log(`${i + 1}. ${buah[i]}`);
}

// For loop mundur
console.log("\nFor loop mundur (dari akhir ke awal):");
for (let i = buah.length - 1; i >= 0; i--) {
    console.log(`${buah.length - i}. ${buah[i]}`);
}

// ==========================================
// 2. FOR...IN LOOP
// ==========================================

console.log("\n=== 2. FOR...IN LOOP ===");
console.log("Iterasi berdasarkan properti/index object (termasuk array)");
console.log("");

let angka = [10, 20, 30, 40, 50];
console.log("Array angka:", angka);

console.log("\nIterasi dengan for...in:");
for (let index in angka) {
    console.log(`Index ${index}: ${angka[index]} (typeof index: ${typeof index})`);
}

// Hati-hati: index adalah string, bukan number!
console.log("\nPerhatian: index adalah string!");
for (let index in angka) {
    console.log(`Index: ${index} (${typeof index}), Value: ${angka[index]}`);
}

// For...in dengan sparse array
let sparse = [1, , , 4, 5];
console.log("\nSparse array:", sparse);
console.log("For...in dengan sparse array (skip yang kosong):");
for (let index in sparse) {
    console.log(`Index ${index}: ${sparse[index]}`);
}

// ==========================================
// 3. FOR...OF LOOP (ES6)
// ==========================================

console.log("\n=== 3. FOR...OF LOOP (ES6) - RECOMMENDED ===");
console.log("Cara modern dan paling mudah untuk iterasi nilai array");
console.log("");

let warna = ["merah", "hijau", "biru", "kuning"];
console.log("Array warna:", warna);

console.log("\nIterasi dengan for...of:");
for (let item of warna) {
    console.log(`Warna: ${item}`);
}

// For...of dengan index menggunakan entries()
console.log("\nFor...of dengan index (menggunakan entries()):");
for (let [index, item] of warna.entries()) {
    console.log(`${index}: ${item}`);
}

// For...of dengan destructuring
console.log("\nDestructuring dalam for...of:");
let mahasiswa = [
    ["Andi", 85],
    ["Budi", 90], 
    ["Cici", 78]
];

for (let [nama, nilai] of mahasiswa) {
    console.log(`${nama}: ${nilai}`);
}

// ==========================================
// 4. WHILE DAN DO-WHILE
// ==========================================

console.log("\n=== 4. WHILE DAN DO-WHILE ===");

let data = ["a", "b", "c", "d"];
console.log("Array data:", data);

// While loop
console.log("\nWhile loop:");
let i = 0;
while (i < data.length) {
    console.log(`${i}: ${data[i]}`);
    i++;
}

// Do-while loop
console.log("\nDo-while loop:");
let j = 0;
do {
    console.log(`${j}: ${data[j]}`);
    j++;
} while (j < data.length);

// ==========================================
// 5. FOREACH METHOD
// ==========================================

console.log("\n=== 5. FOREACH METHOD ===");
console.log("Method array khusus untuk iterasi - sangat populer!");
console.log("");

let hewan = ["kucing", "anjing", "burung", "ikan"];
console.log("Array hewan:", hewan);

// forEach dasar
console.log("\nforEach dasar:");
hewan.forEach(function(item) {
    console.log(`Hewan: ${item}`);
});

// forEach dengan arrow function (lebih modern)
console.log("\nforEach dengan arrow function:");
hewan.forEach(item => {
    console.log(`🐾 ${item}`);
});

// forEach dengan index
console.log("\nforEach dengan index:");
hewan.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// forEach dengan semua parameter
console.log("\nforEach dengan semua parameter:");
hewan.forEach((item, index, array) => {
    console.log(`Item: ${item}, Index: ${index}, Array length: ${array.length}`);
});

// forEach tidak bisa di-break atau continue
console.log("\nforEach tidak bisa di-break (akan error jika dicoba):");
hewan.forEach(item => {
    if (item === "anjing") {
        console.log("Menemukan anjing, tapi tidak bisa break");
        return; // hanya skip iterasi ini, bukan break
    }
    console.log(`Processing: ${item}`);
});

// ==========================================
// 6. MAP METHOD (TRANSFORMATION)
// ==========================================

console.log("\n=== 6. MAP METHOD (TRANSFORMATION) ===");
console.log("Mengubah setiap elemen array menjadi array baru");
console.log("");

let numbers = [1, 2, 3, 4, 5];
console.log("Array numbers:", numbers);

// Map ke kuadrat
let kuadrat = numbers.map(n => n * n);
console.log("Kuadrat:", kuadrat);

// Map ke string
let strings = numbers.map(n => `Number: ${n}`);
console.log("Strings:", strings);

// Map dengan index
let withIndex = numbers.map((n, i) => `${i}: ${n}`);
console.log("With index:", withIndex);

// Map array object
let users = [
    {nama: "Andi", umur: 25},
    {nama: "Budi", umur: 30},
    {nama: "Cici", umur: 28}
];

let namaUsers = users.map(user => user.nama);
console.log("\nNama users:", namaUsers);

let umurNextYear = users.map(user => ({
    nama: user.nama,
    umur: user.umur + 1
}));
console.log("Umur next year:", umurNextYear);

// ==========================================
// 7. FILTER METHOD
// ==========================================

console.log("\n=== 7. FILTER METHOD ===");
console.log("Menyaring elemen array berdasarkan kondisi");
console.log("");

let nilai = [85, 92, 78, 96, 88, 75, 90];
console.log("Array nilai:", nilai);

// Filter nilai >= 80
let lulus = nilai.filter(n => n >= 80);
console.log("Yang lulus (>= 80):", lulus);

// Filter nilai < 80
let tidakLulus = nilai.filter(n => n < 80);
console.log("Yang tidak lulus (< 80):", tidakLulus);

// Filter dengan kondisi kompleks
let produk = [
    {nama: "Laptop", harga: 15000000, stok: 5},
    {nama: "Mouse", harga: 150000, stok: 0},
    {nama: "Keyboard", harga: 500000, stok: 10},
    {nama: "Monitor", harga: 2000000, stok: 3}
];

let tersedia = produk.filter(p => p.stok > 0);
console.log("\nProduk tersedia:", tersedia);

let murah = produk.filter(p => p.harga < 1000000);
console.log("Produk murah (< 1jt):", murah);

// ==========================================
// 8. REDUCE METHOD
// ==========================================

console.log("\n=== 8. REDUCE METHOD ===");
console.log("Menggabungkan semua elemen array menjadi satu nilai");
console.log("");

let nums = [1, 2, 3, 4, 5];
console.log("Array nums:", nums);

// Jumlah semua elemen
let sum = nums.reduce((total, current) => total + current, 0);
console.log("Sum:", sum);

// Perkalian semua elemen
let product = nums.reduce((total, current) => total * current, 1);
console.log("Product:", product);

// Mencari nilai maksimum
let max = nums.reduce((max, current) => current > max ? current : max);
console.log("Maximum:", max);

// Reduce tanpa initial value
let sum2 = nums.reduce((total, current) => {
    console.log(`total: ${total}, current: ${current}`);
    return total + current;
});
console.log("Sum2:", sum2);

// Reduce untuk menghitung kemunculan
let fruits = ["apel", "jeruk", "apel", "pisang", "jeruk", "apel"];
let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log("\nCount fruits:", count);

// ==========================================
// 9. FIND DAN FINDINDEX
// ==========================================

console.log("\n=== 9. FIND DAN FINDINDEX ===");

let people = [
    {id: 1, nama: "Andi", umur: 25},
    {id: 2, nama: "Budi", umur: 30},
    {id: 3, nama: "Cici", umur: 28},
    {id: 4, nama: "Dedi", umur: 35}
];

console.log("Array people:", people);

// find() - mencari elemen pertama yang memenuhi kondisi
let found = people.find(person => person.umur > 30);
console.log("Orang pertama umur > 30:", found);

// findIndex() - mencari index elemen pertama yang memenuhi kondisi
let foundIndex = people.findIndex(person => person.nama === "Cici");
console.log("Index Cici:", foundIndex);

// Jika tidak ditemukan
let notFound = people.find(person => person.umur > 40);
console.log("Umur > 40:", notFound); // undefined

let notFoundIndex = people.findIndex(person => person.umur > 40);
console.log("Index umur > 40:", notFoundIndex); // -1

// ==========================================
// 10. EVERY DAN SOME
// ==========================================

console.log("\n=== 10. EVERY DAN SOME ===");

let grades = [85, 90, 78, 92, 88];
console.log("Array grades:", grades);

// every() - semua elemen harus memenuhi kondisi
let allPassed = grades.every(grade => grade >= 70);
console.log("Semua lulus (>= 70):", allPassed);

let allExcellent = grades.every(grade => grade >= 90);
console.log("Semua excellent (>= 90):", allExcellent);

// some() - minimal satu elemen memenuhi kondisi
let somePassed = grades.some(grade => grade >= 70);
console.log("Ada yang lulus (>= 70):", somePassed);

let someExcellent = grades.some(grade => grade >= 90);
console.log("Ada yang excellent (>= 90):", someExcellent);

// ==========================================
// 11. PERBANDINGAN METODE ITERASI
// ==========================================

console.log("\n=== 11. PERBANDINGAN METODE ITERASI ===");
console.log("");

console.log("🚀 for...of - TERBAIK untuk iterasi sederhana");
console.log("   + Syntax bersih, mudah dibaca");
console.log("   + Bisa break dan continue");
console.log("   + Modern (ES6+)");
console.log("");

console.log("⚡ forEach - Bagus untuk side effects");
console.log("   + Method array built-in");
console.log("   + Akses ke index mudah");
console.log("   - Tidak bisa break/continue");
console.log("");

console.log("🔧 for loop - Kontrol penuh");
console.log("   + Performa terbaik");
console.log("   + Kontrol penuh over iterasi");
console.log("   - Syntax lebih verbose");
console.log("");

console.log("🎯 map/filter/reduce - Functional programming");
console.log("   + Immutable, return array/value baru");
console.log("   + Chainable");
console.log("   + Expresif dan deklaratif");

// ==========================================
// 12. CONTOH PRAKTIS KOMBINASI
// ==========================================

console.log("\n=== 12. CONTOH PRAKTIS KOMBINASI ===");

// Data siswa
let students = [
    {nama: "Andi", mata_kuliah: ["Math", "Physics"], nilai: [85, 90]},
    {nama: "Budi", mata_kuliah: ["Math", "Chemistry"], nilai: [78, 85]},
    {nama: "Cici", mata_kuliah: ["Physics", "Biology"], nilai: [92, 88]}
];

console.log("Data siswa:", students);

// Menghitung rata-rata setiap siswa
console.log("\nRata-rata setiap siswa:");
students.forEach(student => {
    let average = student.nilai.reduce((sum, nilai) => sum + nilai, 0) / student.nilai.length;
    console.log(`${student.nama}: ${average.toFixed(2)}`);
});

// Mencari siswa dengan rata-rata tertinggi
let topStudent = students.reduce((top, current) => {
    let currentAvg = current.nilai.reduce((sum, n) => sum + n, 0) / current.nilai.length;
    let topAvg = top.nilai.reduce((sum, n) => sum + n, 0) / top.nilai.length;
    return currentAvg > topAvg ? current : top;
});

console.log("\nSiswa terbaik:", topStudent.nama);

// Semua mata kuliah unik
let allSubjects = students
    .map(student => student.mata_kuliah)
    .flat()
    .filter((subject, index, array) => array.indexOf(subject) === index);

console.log("Semua mata kuliah:", allSubjects);

console.log("\n=== ITERASI ARRAY SELESAI ===");
console.log("Lanjut ke file berikutnya untuk belajar array methods advanced!");