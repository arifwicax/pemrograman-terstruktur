// ==========================================
// MENGAKSES DAN MEMANIPULASI ARRAY
// ==========================================

console.log("=== MENGAKSES DAN MEMANIPULASI ARRAY ===\n");
console.log("Mari belajar cara mengakses, mengubah, menambah, dan menghapus elemen array!");
console.log("");

// ==========================================
// 1. MENGAKSES ELEMEN ARRAY
// ==========================================

console.log("=== 1. MENGAKSES ELEMEN ARRAY ===");
console.log("Gunakan index dalam kurung siku [index]");
console.log("");

let buah = ["apel", "jeruk", "pisang", "mangga", "melon"];
console.log("Array buah:", buah);
console.log("Length:", buah.length);
console.log("");

// Mengakses elemen satu per satu
console.log("buah[0] (pertama):", buah[0]);   // "apel"
console.log("buah[1] (kedua):", buah[1]);     // "jeruk"  
console.log("buah[2] (ketiga):", buah[2]);    // "pisang"
console.log("buah[3] (keempat):", buah[3]);   // "mangga"
console.log("buah[4] (kelima):", buah[4]);    // "melon"

// Index negatif (tidak didukung langsung)
console.log("buah[-1] (negatif):", buah[-1]); // undefined

// Mengakses elemen terakhir
console.log("Elemen terakhir:", buah[buah.length - 1]);

// Mengakses index yang tidak ada
console.log("buah[10] (tidak ada):", buah[10]); // undefined
console.log("buah[100] (tidak ada):", buah[100]); // undefined

// ==========================================
// 2. MENGGUNAKAN VARIABEL SEBAGAI INDEX
// ==========================================

console.log("\n=== 2. MENGGUNAKAN VARIABEL SEBAGAI INDEX ===");

let angka = [10, 20, 30, 40, 50];
console.log("Array angka:", angka);

let index = 2;
console.log(`angka[${index}]:`, angka[index]);

// Loop untuk mengakses semua elemen
console.log("\nMengakses semua elemen dengan loop:");
for (let i = 0; i < angka.length; i++) {
    console.log(`angka[${i}]: ${angka[i]}`);
}

// ==========================================
// 3. MENGUBAH ELEMEN ARRAY
// ==========================================

console.log("\n=== 3. MENGUBAH ELEMEN ARRAY ===");

let warna = ["merah", "hijau", "biru"];
console.log("Array warna awal:", warna);

// Mengubah elemen yang ada
warna[1] = "kuning";
console.log("Setelah mengubah warna[1]:", warna);

warna[0] = "ungu";
console.log("Setelah mengubah warna[0]:", warna);

// Mengubah beberapa elemen
warna[1] = "orange";
warna[2] = "pink";
console.log("Setelah mengubah beberapa elemen:", warna);

// ==========================================
// 4. MENAMBAH ELEMEN ARRAY
// ==========================================

console.log("\n=== 4. MENAMBAH ELEMEN ARRAY ===");

let hewan = ["kucing", "anjing"];
console.log("Array hewan awal:", hewan);

// Menambah di index yang ada
hewan[2] = "burung";
console.log("Menambah di index 2:", hewan);

// Menambah di index yang jauh (membuat sparse array)
hewan[5] = "ikan";
console.log("Menambah di index 5:", hewan);
console.log("Length:", hewan.length);

// Mengecek elemen yang kosong
console.log("hewan[3]:", hewan[3]); // undefined
console.log("hewan[4]:", hewan[4]); // undefined

// Mengisi elemen yang kosong
hewan[3] = "kelinci";
hewan[4] = "hamster";
console.log("Setelah mengisi yang kosong:", hewan);

// ==========================================
// 5. METHOD MENAMBAH ELEMEN
// ==========================================

console.log("\n=== 5. METHOD MENAMBAH ELEMEN ===");

let makanan = ["nasi", "mie"];
console.log("Array makanan awal:", makanan);

// push() - menambah di akhir
makanan.push("roti");
console.log("Setelah push('roti'):", makanan);

makanan.push("pasta", "pizza");
console.log("Setelah push beberapa item:", makanan);

// unshift() - menambah di awal
makanan.unshift("bubur");
console.log("Setelah unshift('bubur'):", makanan);

makanan.unshift("sereal", "oatmeal");
console.log("Setelah unshift beberapa item:", makanan);

// ==========================================
// 6. METHOD MENGHAPUS ELEMEN
// ==========================================

console.log("\n=== 6. METHOD MENGHAPUS ELEMEN ===");

let kota = ["Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta"];
console.log("Array kota awal:", kota);

// pop() - menghapus dari akhir
let kotaTerakhir = kota.pop();
console.log("Setelah pop():", kota);
console.log("Kota yang dihapus:", kotaTerakhir);

// shift() - menghapus dari awal  
let kotaPertama = kota.shift();
console.log("Setelah shift():", kota);
console.log("Kota yang dihapus:", kotaPertama);

// ==========================================
// 7. DELETE OPERATOR
// ==========================================

console.log("\n=== 7. DELETE OPERATOR ===");
console.log("Operator delete membuat lubang dalam array (sparse)");

let bilangan = [1, 2, 3, 4, 5];
console.log("Array bilangan awal:", bilangan);

delete bilangan[2];
console.log("Setelah delete bilangan[2]:", bilangan);
console.log("Length masih:", bilangan.length);
console.log("bilangan[2] sekarang:", bilangan[2]); // undefined

// Mengecek lubang dengan in operator
console.log("2 in bilangan:", 2 in bilangan); // false (sudah dihapus)
console.log("1 in bilangan:", 1 in bilangan); // true (masih ada)

// ==========================================
// 8. PROPERTY LENGTH MANIPULATION
// ==========================================

console.log("\n=== 8. PROPERTY LENGTH MANIPULATION ===");

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array data awal:", data);
console.log("Length:", data.length);

// Mengurangi length (memotong array)
data.length = 5;
console.log("Setelah length = 5:", data);

// Menambah length (membuat sparse array)
data.length = 8;
console.log("Setelah length = 8:", data);
console.log("data[6]:", data[6]); // undefined
console.log("data[7]:", data[7]); // undefined

// Mengosongkan array dengan length
let temp = [1, 2, 3, 4, 5];
console.log("Temp sebelum dikosongkan:", temp);
temp.length = 0;
console.log("Temp setelah length = 0:", temp);

// ==========================================
// 9. MENGECEK KEBERADAAN ELEMEN
// ==========================================

console.log("\n=== 9. MENGECEK KEBERADAAN ELEMEN ===");

let hobi = ["membaca", "menulis", "bernyanyi"];
console.log("Array hobi:", hobi);

// Mengecek dengan in operator
console.log("1 in hobi:", 1 in hobi);     // true (index 1 ada)
console.log("5 in hobi:", 5 in hobi);     // false (index 5 tidak ada)

// Mengecek nilai dengan includes()
console.log("hobi.includes('membaca'):", hobi.includes("membaca"));   // true
console.log("hobi.includes('memasak'):", hobi.includes("memasak"));   // false

// Mengecek index dengan indexOf()
console.log("hobi.indexOf('menulis'):", hobi.indexOf("menulis"));     // 1
console.log("hobi.indexOf('olahraga'):", hobi.indexOf("olahraga"));   // -1

// ==========================================
// 10. CONTOH PRAKTIS
// ==========================================

console.log("\n=== 10. CONTOH PRAKTIS ===");

// Sistem inventory sederhana
let inventory = [];
console.log("Inventory awal:", inventory);

// Menambah item
inventory.push("Laptop", "Mouse", "Keyboard");
console.log("Setelah menambah item:", inventory);

// Mengubah item
inventory[1] = "Mouse Gaming";
console.log("Setelah upgrade mouse:", inventory);

// Cek apakah item ada
if (inventory.includes("Laptop")) {
    console.log("Laptop tersedia di inventory");
}

// Hapus item terakhir
let itemTerakhir = inventory.pop();
console.log("Item yang diambil:", itemTerakhir);
console.log("Inventory sekarang:", inventory);

// Sistem daftar tugas
let tugasHarian = ["Bangun tidur", "Sarapan", "Kerja"];
console.log("\nTugas harian:", tugasHarian);

// Menambah tugas di tengah hari
tugasHarian.push("Makan siang", "Istirahat");
console.log("Setelah menambah tugas:", tugasHarian);

// Menandai tugas selesai (mengubah jadi "✓ Selesai")
tugasHarian[0] = "✓ " + tugasHarian[0];
console.log("Setelah menyelesaikan tugas pertama:", tugasHarian);

// Menghapus tugas yang sudah selesai
tugasHarian.shift(); // Hapus yang pertama (sudah selesai)
console.log("Tugas yang tersisa:", tugasHarian);

// ==========================================
// 11. TIPS DAN BEST PRACTICES
// ==========================================

console.log("\n=== 11. TIPS DAN BEST PRACTICES ===");
console.log("");
console.log("✓ Selalu cek length sebelum mengakses elemen");
console.log("✓ Gunakan push/pop untuk operasi stack (LIFO)");
console.log("✓ Gunakan unshift/shift untuk operasi queue (FIFO)");
console.log("✓ Hindari delete jika memungkinkan (membuat sparse array)");
console.log("✓ Gunakan includes() untuk mengecek keberadaan nilai");
console.log("✓ Gunakan indexOf() untuk mencari posisi elemen");

// Contoh best practice
function ambilElemenAman(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        console.log("Index tidak valid!");
        return undefined;
    }
}

let contohArray = ["a", "b", "c"];
console.log("\nTest fungsi aman:");
console.log("ambilElemenAman(contohArray, 1):", ambilElemenAman(contohArray, 1));
console.log("ambilElemenAman(contohArray, 10):", ambilElemenAman(contohArray, 10));

console.log("\n=== MENGAKSES DAN MEMANIPULASI ARRAY SELESAI ===");
console.log("Lanjut ke file berikutnya untuk belajar method-method array!");