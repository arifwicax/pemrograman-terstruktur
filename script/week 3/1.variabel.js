// Walaupun terlihat mirip, JavaScript menganggap:
// data ≠ Data

// Contoh 1 - Variabel dengan Case Berbeda
let data = 10;
let Data = 20;

console.log("data:", data);
console.log("Data:", Data);
console.log("Kedua variabel berbeda karena JavaScript case sensitive");

// Contoh 2 - Error karena Perbedaan Huruf
let umur = 20;
console.log("umur:", umur);

try {
    console.log(Umur);
} catch (error) {
    console.log("Error:", error.message);
    console.log("Variabel 'umur' ≠ 'Umur'");
}

// Contoh 3 - Case Sensitivity pada Function
function halo() {
    console.log("Halo Dunia");
}

halo();

try {
    Halo();
} catch (error) {
    console.log("Error:", error.message);
    console.log("Function 'halo()' ≠ 'Halo()'");
}

// Contoh 4 - Keyword JavaScript Case Sensitive
let angka = 10;
console.log("angka:", angka);

// Contoh salah (akan menyebabkan SyntaxError):
// Let angka2 = 20;
// LET angka3 = 30;
console.log("Keyword 'let' harus ditulis dengan huruf kecil");

// Contoh 5 - Object dan Property Case Sensitive
let mahasiswa = {
    nama: "Andi",
    umur: 21
};

console.log("mahasiswa.nama:", mahasiswa.nama);
console.log("mahasiswa.Nama:", mahasiswa.Nama);
console.log("Property 'nama' ≠ 'Nama'");

// Contoh 6 - Praktik yang Disarankan (camelCase)
let namaLengkap = "Andi Saputra";
let jumlahMahasiswa = 30;
let nilaiRataRata = 85.5;

console.log("namaLengkap:", namaLengkap);
console.log("jumlahMahasiswa:", jumlahMahasiswa);
console.log("nilaiRataRata:", nilaiRataRata);
console.log("CamelCase adalah standar penamaan yang disarankan dalam JavaScript");

// Kesimpulan
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
