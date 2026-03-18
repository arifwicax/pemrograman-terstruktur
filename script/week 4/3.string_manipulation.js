// ==========================================
// STRING TYPE DAN MANIPULASI STRING
// ==========================================

console.log("=== STRING TYPE DAN MANIPULASI STRING ===\n");

// ==========================================
// MEMBUAT STRING
// ==========================================

console.log("=== CARA MEMBUAT STRING ===");
let string1 = "Hello World";           // Double quotes
let string2 = 'JavaScript';            // Single quotes
let string3 = `Template Literal`;      // Backticks
let string4 = "";                      // String kosong

console.log("string1:", string1);
console.log("string2:", string2);
console.log("string3:", string3);
console.log("string4 (kosong):", string4);
console.log("");

// ==========================================
// TEMPLATE LITERALS
// ==========================================

console.log("=== TEMPLATE LITERALS ===");
let nama = "Andi";
let umur = 20;

// Template literal dengan interpolasi
let pesan = `Halo, nama saya ${nama} dan umur saya ${umur} tahun`;
console.log("Template literal:", pesan);

// Multi-line string dengan template literal
let multiLine = `Ini adalah string
yang terdiri dari
beberapa baris`;
console.log("Multi-line string:");
console.log(multiLine);
console.log("");

// ==========================================
// STRING CONCATENATION
// ==========================================

console.log("=== STRING CONCATENATION ===");
let firstName = "John";
let lastName = "Doe";

// Menggunakan operator +
let fullName1 = firstName + " " + lastName;
console.log("Dengan operator +:", fullName1);

// Menggunakan template literal
let fullName2 = `${firstName} ${lastName}`;
console.log("Dengan template literal:", fullName2);

// Concatenation dengan angka
let greeting = "Umur saya " + 25 + " tahun";
console.log("String + number:", greeting);
console.log("");

// ==========================================
// ESCAPE CHARACTERS
// ==========================================

console.log("=== ESCAPE CHARACTERS ===");
console.log("Newline: Baris satu\\nBaris dua");
console.log("Tab: Sebelum\\tSesudah");
console.log("Quote dalam string: \"Hello World\"");
console.log("Apostrophe: Don\\'t worry");
console.log("Backslash: Path C:\\\\folder\\\\file");
console.log("");

// ==========================================
// STRING PROPERTIES DAN METHODS
// ==========================================

console.log("=== STRING PROPERTIES DAN METHODS ===");
let text = "JavaScript Programming";

console.log("Original text:", text);
console.log("Length:", text.length);
console.log("toLowerCase():", text.toLowerCase());
console.log("toUpperCase():", text.toUpperCase());
console.log("charAt(0):", text.charAt(0));
console.log("charAt(4):", text.charAt(4));
console.log("indexOf('Script'):", text.indexOf('Script'));
console.log("lastIndexOf('a'):", text.lastIndexOf('a'));
console.log("includes('Java'):", text.includes('Java'));
console.log("startsWith('Java'):", text.startsWith('Java'));
console.log("endsWith('ming'):", text.endsWith('ming'));
console.log("");

// ==========================================
// STRING EXTRACTION
// ==========================================

console.log("=== STRING EXTRACTION ===");
let str = "Hello World JavaScript";

console.log("Original:", str);
console.log("substring(0, 5):", str.substring(0, 5));       // "Hello"
console.log("substring(6, 11):", str.substring(6, 11));     // "World"
console.log("substr(0, 5):", str.substr(0, 5));             // "Hello"
console.log("slice(0, 5):", str.slice(0, 5));               // "Hello"
console.log("slice(-10):", str.slice(-10));                 // "JavaScript"
console.log("slice(-10, -6):", str.slice(-10, -6));         // "Java"
console.log("");

// ==========================================
// STRING REPLACEMENT DAN SPLITTING
// ==========================================

console.log("=== STRING REPLACEMENT DAN SPLITTING ===");
let sentence = "I love Python. Python is great!";

console.log("Original:", sentence);
console.log("replace('Python', 'JavaScript'):", sentence.replace('Python', 'JavaScript'));
console.log("replaceAll('Python', 'JavaScript'):", sentence.replaceAll('Python', 'JavaScript'));

let words = "apple,banana,orange,grape";
console.log("Original:", words);
console.log("split(','):", words.split(','));

let paragraph = "Ini adalah kalimat pertama. Ini kalimat kedua.";
console.log("split('. '):", paragraph.split('. '));
console.log("");

// ==========================================
// STRING TRIMMING
// ==========================================

console.log("=== STRING TRIMMING ===");
let spacedText = "   Hello World   ";

console.log("Original: '" + spacedText + "'");
console.log("trim(): '" + spacedText.trim() + "'");
console.log("trimStart(): '" + spacedText.trimStart() + "'");
console.log("trimEnd(): '" + spacedText.trimEnd() + "'");
console.log("");

// ==========================================
// STRING PADDING
// ==========================================

console.log("=== STRING PADDING ===");
let num = "5";

console.log("Original:", num);
console.log("padStart(3, '0'):", num.padStart(3, '0'));     // "005"
console.log("padEnd(3, '0'):", num.padEnd(3, '0'));         // "500"

let time = "9";
console.log("Time formatting:", time.padStart(2, '0') + ":00");  // "09:00"
console.log("");

// ==========================================
// STRING COMPARISON
// ==========================================

console.log("=== STRING COMPARISON ===");
let str1 = "apple";
let str2 = "banana";
let str3 = "Apple";

console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3:", str3);

console.log("str1 == str2:", str1 == str2);                 // false
console.log("str1 < str2:", str1 < str2);                   // true (alphabetical)
console.log("str1 == str3:", str1 == str3);                 // false (case sensitive)
console.log("str1.toLowerCase() == str3.toLowerCase():", str1.toLowerCase() == str3.toLowerCase()); // true
console.log("");

// ==========================================
// CONTOH PROGRAM: VALIDASI EMAIL SEDERHANA
// ==========================================

console.log("=== CONTOH PROGRAM: VALIDASI EMAIL SEDERHANA ===");
function validasiEmail(email) {
    // Cek apakah mengandung @ dan .
    if (email.includes('@') && email.includes('.')) {
        // Cek posisi @ dan .
        let atPos = email.indexOf('@');
        let dotPos = email.lastIndexOf('.');
        
        // @ harus sebelum . dan ada karakter sebelum @ dan setelah .
        if (atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1) {
            return true;
        }
    }
    return false;
}

let emails = ["user@example.com", "invalid.email", "user@", "@domain.com", "user@domain."];

emails.forEach(email => {
    console.log(`${email}: ${validasiEmail(email) ? 'Valid' : 'Invalid'}`);
});

console.log("");

// ==========================================
// CONTOH PROGRAM: FORMAT NAMA
// ==========================================

console.log("=== CONTOH PROGRAM: FORMAT NAMA ===");
function formatNama(namaLengkap) {
    return namaLengkap
        .trim()                           // Hapus spasi di awal/akhir
        .split(' ')                       // Pisah berdasarkan spasi
        .map(kata => 
            kata.charAt(0).toUpperCase() + 
            kata.slice(1).toLowerCase()   // Huruf pertama besar, sisanya kecil
        )
        .join(' ');                       // Gabung kembali dengan spasi
}

let namaKotor = "  jOHN   dOE  ";
console.log("Nama kotor: '" + namaKotor + "'");
console.log("Nama bersih:", formatNama(namaKotor));