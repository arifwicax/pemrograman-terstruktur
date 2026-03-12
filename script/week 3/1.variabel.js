// Walaupun terlihat mirip, JavaScript menganggap:
// data ≠ Data

// ========================================
// CONTOH CASE SENSITIVITY DALAM JAVASCRIPT
// ========================================

// Contoh 1 - Variabel dengan Case Berbeda
console.log("=== Contoh 1: Variabel dengan Case Berbeda ===");
let data = 10;
let Data = 20;

console.log("data:", data);  // Output: 10
console.log("Data:", Data);  // Output: 20
console.log("Kedua variabel berbeda karena JavaScript case sensitive\n");

// Contoh 2 - Error karena Perbedaan Huruf
console.log("=== Contoh 2: Error karena Perbedaan Huruf ===");
let umur = 20;
console.log("umur:", umur);  // Output: 20

try {
    console.log(Umur);  // Error: ReferenceError
} catch (error) {
    console.log("Error:", error.message);
    console.log("Variabel 'umur' ≠ 'Umur'\n");
}

// Contoh 3 - Case Sensitivity pada Function
console.log("=== Contoh 3: Case Sensitivity pada Function ===");
function halo() {
    console.log("Halo Dunia");
}

halo();  // Output: Halo Dunia

try {
    Halo();  // Error: ReferenceError
} catch (error) {
    console.log("Error:", error.message);
    console.log("Function 'halo()' ≠ 'Halo()'\n");
}

// Contoh 4 - Keyword JavaScript Case Sensitive
console.log("=== Contoh 4: Keyword JavaScript ===");
let angka = 10;  // Benar: menggunakan 'let'
console.log("angka:", angka);

// Contoh salah (akan menyebabkan SyntaxError):
// Let angka2 = 20;  // Salah: 'Let' bukan 'let'
// LET angka3 = 30;  // Salah: 'LET' bukan 'let'
console.log("Keyword 'let' harus ditulis dengan huruf kecil\n");

// Contoh 5 - Object dan Property Case Sensitive
console.log("=== Contoh 5: Object dan Property ===");
let mahasiswa = {
    nama: "Andi",
    umur: 21
};

console.log("mahasiswa.nama:", mahasiswa.nama);  // Output: Andi
console.log("mahasiswa.Nama:", mahasiswa.Nama);  // Output: undefined
console.log("Property 'nama' ≠ 'Nama'\n");

// Contoh 6 - Praktik yang Disarankan (camelCase)
console.log("=== Contoh 6: Praktik Penamaan yang Disarankan ===");
let namaLengkap = "Andi Saputra";
let jumlahMahasiswa = 30;
let nilaiRataRata = 85.5;

console.log("namaLengkap:", namaLengkap);
console.log("jumlahMahasiswa:", jumlahMahasiswa);
console.log("nilaiRataRata:", nilaiRataRata);
console.log("\nCamelCase adalah standar penamaan yang disarankan dalam JavaScript");

// ========================================
// KESIMPULAN
// ========================================
console.log("\n=== KESIMPULAN ===");
console.log("1. JavaScript adalah bahasa yang case sensitive");
console.log("2. 'data' dan 'Data' adalah variabel yang berbeda");
console.log("3. Keyword harus ditulis dengan case yang tepat");
console.log("4. Function name juga case sensitive");
console.log("5. Property object juga case sensitive");
console.log("6. Gunakan camelCase untuk penamaan yang konsisten");


// Variabel tidak boleh diawali dengan angka
// let 1data = 10; // SyntaxError: Invalid or unexpected token

// Variabel tidak boleh mengandung spasi
// let my data = 10; // SyntaxError: Unexpected identifier

// Variabel tidak boleh menggunakan karakter khusus kecuali _ dan $
// let my-data = 10; // SyntaxError: Unexpected token '-'

// Variabel tidak boleh menggunakan kata kunci yang sudah ada
// let let = 10; // SyntaxError: Unexpected token 'let'

// Variabel harus diawali dengan huruf, _ atau $
let _data = 10;
let $data = 20;

console.log(_data);
console.log($data);

// Variabel bersifat case-sensitive
let Data1 = 30;
let data1 = 40;

console.log(Data1);
console.log(data1); 
