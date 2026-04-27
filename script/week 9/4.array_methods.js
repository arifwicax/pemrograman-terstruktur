// ==========================================
// ARRAY METHODS DASAR DALAM JAVASCRIPT
// ==========================================

console.log("=== ARRAY METHODS DASAR DALAM JAVASCRIPT ===\n");
console.log("Array memiliki banyak method berguna untuk memanipulasi data.");
console.log("Mari kita pelajari method-method dasar yang sering digunakan!");
console.log("");

// ==========================================
// 1. STACK METHODS (push, pop)
// ==========================================

console.log("=== 1. STACK METHODS (LIFO - Last In First Out) ===");
console.log("Stack bekerja seperti tumpukan piring - yang terakhir masuk, pertama keluar");
console.log("");

let stack = [];
console.log("Stack awal:", stack);

// push() - menambah di akhir (top of stack)
console.log("\nMenambah elemen dengan push():");
let newLength1 = stack.push(1);
console.log("push(1):", stack, "- Length:", newLength1);

let newLength2 = stack.push(2);
console.log("push(2):", stack, "- Length:", newLength2);

stack.push(3, 4, 5); // push multiple elements
console.log("push(3,4,5):", stack);

// pop() - menghapus dari akhir (top of stack)
console.log("\nMenghapus elemen dengan pop():");
let popped1 = stack.pop();
console.log("pop():", stack, "- Element yang dihapus:", popped1);

let popped2 = stack.pop();
console.log("pop():", stack, "- Element yang dihapus:", popped2);

// pop() pada array kosong
let kosong = [];
let popKosong = kosong.pop();
console.log("pop() array kosong:", popKosong); // undefined

// ==========================================
// 2. QUEUE METHODS (unshift, shift)
// ==========================================

console.log("\n=== 2. QUEUE METHODS (FIFO - First In First Out) ===");
console.log("Queue bekerja seperti antrian - yang pertama masuk, pertama keluar");
console.log("");

let queue = [];
console.log("Queue awal:", queue);

// unshift() - menambah di awal (back of queue)
console.log("\nMenambah elemen dengan unshift():");
let newLength3 = queue.unshift("A");
console.log("unshift('A'):", queue, "- Length:", newLength3);

queue.unshift("B");
console.log("unshift('B'):", queue);

queue.unshift("C", "D"); // unshift multiple elements
console.log("unshift('C','D'):", queue);

// shift() - menghapus dari awal (front of queue)
console.log("\nMenghapus elemen dengan shift():");
let shifted1 = queue.shift();
console.log("shift():", queue, "- Element yang dihapus:", shifted1);

let shifted2 = queue.shift();
console.log("shift():", queue, "- Element yang dihapus:", shifted2);

// ==========================================
// 3. IMPLEMENTASI STACK DAN QUEUE
// ==========================================

console.log("\n=== 3. IMPLEMENTASI STACK DAN QUEUE ===");

// Implementasi Stack untuk Undo functionality
console.log("\nContoh: Sistem Undo");
let undoStack = [];
let currentState = "Document kosong";

function saveState(state) {
    undoStack.push(currentState);
    currentState = state;
    console.log("State baru:", currentState);
    console.log("Undo stack:", undoStack);
}

function undo() {
    if (undoStack.length > 0) {
        currentState = undoStack.pop();
        console.log("Undo ke:", currentState);
        console.log("Undo stack:", undoStack);
    } else {
        console.log("Tidak ada yang bisa di-undo");
    }
}

saveState("Menambah judul");
saveState("Menambah paragraf");
saveState("Menambah gambar");

undo(); // Kembali ke "Menambah paragraf"
undo(); // Kembali ke "Menambah judul"

// Implementasi Queue untuk sistem antrian
console.log("\nContoh: Sistem Antrian Printer");
let printerQueue = [];

function addPrintJob(document) {
    printerQueue.push(document);
    console.log(`Menambah ke antrian: ${document}`);
    console.log("Antrian printer:", printerQueue);
}

function processPrintJob() {
    if (printerQueue.length > 0) {
        let job = printerQueue.shift();
        console.log(`Mencetak: ${job}`);
        console.log("Antrian tersisa:", printerQueue);
        return job;
    } else {
        console.log("Antrian kosong");
        return null;
    }
}

addPrintJob("Resume.pdf");
addPrintJob("Proposal.docx");
addPrintJob("Presentation.pptx");

processPrintJob(); // Cetak Resume.pdf
processPrintJob(); // Cetak Proposal.docx

// ==========================================
// 4. SEARCH METHODS
// ==========================================

console.log("\n=== 4. SEARCH METHODS ===");

let buah = ["apel", "jeruk", "pisang", "jeruk", "mangga"];
console.log("Array buah:", buah);

// indexOf() - mencari index pertama
console.log("\nindexOf() - mencari index pertama:");
console.log("buah.indexOf('jeruk'):", buah.indexOf("jeruk"));     // 1
console.log("buah.indexOf('mangga'):", buah.indexOf("mangga"));   // 4
console.log("buah.indexOf('durian'):", buah.indexOf("durian"));   // -1 (tidak ada)

// indexOf() dengan starting position
console.log("buah.indexOf('jeruk', 2):", buah.indexOf("jeruk", 2)); // 3 (mulai dari index 2)

// lastIndexOf() - mencari index terakhir
console.log("\nlastIndexOf() - mencari index terakhir:");
console.log("buah.lastIndexOf('jeruk'):", buah.lastIndexOf("jeruk")); // 3

// includes() - mengecek keberadaan (ES2016)
console.log("\nincludes() - mengecek keberadaan:");
console.log("buah.includes('apel'):", buah.includes("apel"));       // true
console.log("buah.includes('durian'):", buah.includes("durian"));   // false

// includes() vs indexOf()
console.log("\nPerbedaan includes() dan indexOf() dengan NaN:");
let denganNaN = [1, 2, NaN, 4];
console.log("Array dengan NaN:", denganNaN);
console.log("indexOf(NaN):", denganNaN.indexOf(NaN));       // -1 (tidak bisa mencari NaN)
console.log("includes(NaN):", denganNaN.includes(NaN));     // true (bisa mencari NaN)

// ==========================================
// 5. JOIN DAN SPLIT
// ==========================================

console.log("\n=== 5. JOIN DAN SPLIT ===");

// join() - menggabungkan array menjadi string
let kata = ["Hello", "World", "from", "JavaScript"];
console.log("Array kata:", kata);

console.log("join() tanpa parameter:", kata.join());           // "Hello,World,from,JavaScript"
console.log("join(' '):", kata.join(" "));                    // "Hello World from JavaScript"
console.log("join(' - '):", kata.join(" - "));               // "Hello - World - from - JavaScript"
console.log("join(''):", kata.join(""));                      // "HelloWorldfromJavaScript"

// join() dengan array angka
let angka = [1, 2, 3, 4, 5];
console.log("\nArray angka:", angka);
console.log("join('-'):", angka.join("-"));                   // "1-2-3-4-5"

// split() adalah kebalikan dari join() (method string)
let kalimat = "Ini adalah kalimat panjang";
let arrayKata = kalimat.split(" ");
console.log("\nString:", kalimat);
console.log("split(' '):", arrayKata);

// Gabungkan kembali
let kalimatBaru = arrayKata.join(" ");
console.log("join(' '):", kalimatBaru);

// ==========================================
// 6. REVERSE METHOD
// ==========================================

console.log("\n=== 6. REVERSE METHOD ===");

let huruf = ["A", "B", "C", "D", "E"];
console.log("Array huruf awal:", huruf);

let reversed = huruf.reverse();
console.log("Setelah reverse():", huruf);
console.log("Return value reverse():", reversed);
console.log("huruf === reversed:", huruf === reversed); // true (modifies original)

// Cara membalik tanpa mengubah array asli
let asli = [1, 2, 3, 4, 5];
let terbalik = [...asli].reverse(); // copy dulu, baru reverse
console.log("\nArray asli:", asli);
console.log("Array terbalik (copy):", terbalik);

// ==========================================
// 7. CONCAT METHOD
// ==========================================

console.log("\n=== 7. CONCAT METHOD ===");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Array 3:", arr3);

// concat() menggabungkan array
let gabungan1 = arr1.concat(arr2);
console.log("arr1.concat(arr2):", gabungan1);

let gabungan2 = arr1.concat(arr2, arr3);
console.log("arr1.concat(arr2, arr3):", gabungan2);

// concat() dengan elemen tunggal
let gabungan3 = arr1.concat(10, 11, 12);
console.log("arr1.concat(10, 11, 12):", gabungan3);

// concat() vs spread operator
let spreadGabungan = [...arr1, ...arr2, ...arr3];
console.log("Dengan spread operator:", spreadGabungan);

// concat() tidak mengubah array asli
console.log("Array 1 masih:", arr1);

// ==========================================
// 8. SLICE METHOD
// ==========================================

console.log("\n=== 8. SLICE METHOD ===");

let data = ["a", "b", "c", "d", "e", "f", "g"];
console.log("Array data:", data);

// slice(start, end) - end tidak inclusive
console.log("slice(1, 4):", data.slice(1, 4));       // ["b", "c", "d"]
console.log("slice(2, 5):", data.slice(2, 5));       // ["c", "d", "e"]

// slice() dengan satu parameter
console.log("slice(3):", data.slice(3));              // ["d", "e", "f", "g"]

// slice() dengan index negatif
console.log("slice(-3):", data.slice(-3));            // ["e", "f", "g"] (3 elemen terakhir)
console.log("slice(-4, -1):", data.slice(-4, -1));   // ["d", "e", "f"]

// slice() untuk copy array
let copy = data.slice();
console.log("slice() untuk copy:", copy);
console.log("data === copy:", data === copy); // false (beda object)

// slice() tidak mengubah array asli
console.log("Array data masih:", data);

// ==========================================
// 9. CONTOH PRAKTIS KOMBINASI
// ==========================================

console.log("\n=== 9. CONTOH PRAKTIS KOMBINASI ===");

// Sistem playlist musik
console.log("Contoh: Sistem Playlist Musik");
let playlist = [];

// Menambah lagu
playlist.push("Song 1", "Song 2", "Song 3");
console.log("Playlist:", playlist);

// Menambah lagu di awal (priority song)
playlist.unshift("Priority Song");
console.log("Setelah menambah priority song:", playlist);

// Mencari lagu
let cariLagu = "Song 2";
if (playlist.includes(cariLagu)) {
    let index = playlist.indexOf(cariLagu);
    console.log(`${cariLagu} ditemukan di index ${index}`);
}

// Membuat playlist string untuk display
let playlistString = playlist.join(" | ");
console.log("Playlist display:", playlistString);

// Shuffle playlist (reverse sederhana)
playlist.reverse();
console.log("Setelah shuffle:", playlist);

// ==========================================
// 10. PERFORMANCE TIPS
// ==========================================

console.log("\n=== 10. PERFORMANCE TIPS ===");
console.log("");
console.log("✓ push() lebih cepat daripada unshift()");
console.log("✓ pop() lebih cepat daripada shift()");
console.log("✓ includes() lebih mudah dibaca daripada indexOf() !== -1");
console.log("✓ join() efisien untuk menggabungkan banyak string");
console.log("✓ slice() bagus untuk shallow copy array pendek");
console.log("✓ concat() vs spread operator - spread lebih modern");

console.log("\n=== ARRAY METHODS DASAR SELESAI ===");
console.log("Lanjut ke file berikutnya untuk belajar cara iterasi array!");