// ==========================================
// MULTIDIMENSIONAL ARRAYS DALAM JAVASCRIPT
// ==========================================

console.log("=== MULTIDIMENSIONAL ARRAYS DALAM JAVASCRIPT ===\n");
console.log("JavaScript tidak memiliki array multidimensi asli,");
console.log("tetapi kita bisa membuat 'array of arrays' untuk simulasinya.");
console.log("Mari belajar cara membuat dan menggunakan array 2D, 3D, dan lebih!");
console.log("");

// ==========================================
// 1. KONSEP ARRAY 2D
// ==========================================

console.log("=== 1. KONSEP ARRAY 2D ===");
console.log("Array 2D adalah array yang berisi array lain (seperti tabel/matrix)");
console.log("");

// Membuat array 2D sederhana
let matrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
];

console.log("Matrix 3x3:");
console.log(matrix);

// Mengakses elemen array 2D
console.log("\nMengakses elemen:");
console.log("matrix[0][0] =", matrix[0][0]); // 1 (baris 0, kolom 0)
console.log("matrix[1][2] =", matrix[1][2]); // 6 (baris 1, kolom 2)
console.log("matrix[2][1] =", matrix[2][1]); // 8 (baris 2, kolom 1)

// Visualisasi tabel
console.log("\nVisualisasi sebagai tabel:");
console.log("   0  1  2");
for (let i = 0; i < matrix.length; i++) {
    let row = `${i} `;
    for (let j = 0; j < matrix[i].length; j++) {
        row += ` ${matrix[i][j]} `;
    }
    console.log(row);
}

// ==========================================
// 2. MEMBUAT ARRAY 2D
// ==========================================

console.log("\n=== 2. CARA MEMBUAT ARRAY 2D ===");

// Cara 1: Literal (manual)
let jadwalKuliah = [
    ["Senin", "Matematika", "Fisika", "Istirahat", "Kimia"],
    ["Selasa", "Bahasa", "Sejarah", "Istirahat", "Olahraga"],
    ["Rabu", "Biologi", "Matematika", "Istirahat", "Seni"],
    ["Kamis", "Fisika", "Kimia", "Istirahat", "Bahasa"],
    ["Jumat", "Sejarah", "Biologi", "Istirahat", "Matematika"]
];

console.log("Jadwal Kuliah (5x5):");
jadwalKuliah.forEach((hari, index) => {
    console.log(`${index}: ${hari.join(' | ')}`);
});

// Cara 2: Menggunakan loop (dynamic)
function createMatrix(rows, cols, defaultValue = 0) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = defaultValue;
        }
    }
    return matrix;
}

let matrixKosong = createMatrix(4, 3, 0);
console.log("\nMatrix 4x3 dengan nilai 0:");
console.log(matrixKosong);

// Cara 3: Menggunakan Array.from
function createMatrix2(rows, cols, valueFunc) {
    return Array.from({length: rows}, (_, i) => 
        Array.from({length: cols}, (_, j) => 
            valueFunc ? valueFunc(i, j) : 0
        )
    );
}

let matrixPattern = createMatrix2(5, 5, (i, j) => i * j);
console.log("\nMatrix dengan pattern i*j:");
console.log(matrixPattern);

// Cara 4: Mengisi dengan data spesifik
let nilaiMahasiswa = createMatrix(3, 4); // 3 mahasiswa, 4 mata kuliah
nilaiMahasiswa[0] = [85, 90, 78, 92]; // Andi
nilaiMahasiswa[1] = [88, 76, 94, 87]; // Budi  
nilaiMahasiswa[2] = [92, 89, 91, 95]; // Cici

console.log("\nNilai Mahasiswa:");
let namaMahasiswa = ["Andi", "Budi", "Cici"];
let mataKuliah = ["Math", "Physics", "Chemistry", "Biology"];

// Header
let header = "Nama".padEnd(8);
mataKuliah.forEach(mk => header += mk.padEnd(10));
console.log(header);

// Data
nilaiMahasiswa.forEach((nilai, i) => {
    let row = namaMahasiswa[i].padEnd(8);
    nilai.forEach(n => row += n.toString().padEnd(10));
    console.log(row);
});

// ==========================================
// 3. OPERASI PADA ARRAY 2D
// ==========================================

console.log("\n=== 3. OPERASI PADA ARRAY 2D ===");

let data2D = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log("Data 2D original:");
console.log(data2D);

// Mengubah elemen
data2D[1][2] = 99;
console.log("\nSetelah mengubah data2D[1][2] = 99:");
console.log(data2D);

// Menambah baris baru
data2D.push([13, 14, 15, 16]);
console.log("\nSetelah menambah baris:");
console.log(data2D);

// Menambah kolom ke semua baris
data2D.forEach(row => row.push(0));
console.log("\nSetelah menambah kolom:");
console.log(data2D);

// Menghapus baris
data2D.splice(1, 1); // hapus baris index 1
console.log("\nSetelah menghapus baris index 1:");
console.log(data2D);

// ==========================================
// 4. ITERASI ARRAY 2D
// ==========================================

console.log("\n=== 4. ITERASI ARRAY 2D ===");

let scoreBoard = [
    [95, 87, 92],
    [78, 91, 85], 
    [89, 94, 88],
    [92, 86, 90]
];

console.log("Score Board:");
console.log(scoreBoard);

// Nested for loop
console.log("\n1. Nested for loop:");
for (let i = 0; i < scoreBoard.length; i++) {
    for (let j = 0; j < scoreBoard[i].length; j++) {
        console.log(`scoreBoard[${i}][${j}] = ${scoreBoard[i][j]}`);
    }
}

// for...of dengan entries
console.log("\n2. for...of dengan entries:");
for (let [rowIndex, row] of scoreBoard.entries()) {
    for (let [colIndex, value] of row.entries()) {
        console.log(`[${rowIndex}][${colIndex}] = ${value}`);
    }
}

// forEach nested
console.log("\n3. forEach nested:");
scoreBoard.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
        console.log(`Row ${rowIndex}, Col ${colIndex}: ${value}`);
    });
});

// flatMap untuk semua elemen
console.log("\n4. Semua elemen dengan flatMap:");
let allValues = scoreBoard.flatMap(row => row);
console.log("All values:", allValues);

// ==========================================
// 5. OPERASI MATEMATIKA PADA MATRIX
// ==========================================

console.log("\n=== 5. OPERASI MATEMATIKA PADA MATRIX ===");

// Menghitung jumlah setiap baris
console.log("Jumlah setiap baris:");
scoreBoard.forEach((row, index) => {
    let sum = row.reduce((total, score) => total + score, 0);
    console.log(`Baris ${index}: ${sum}`);
});

// Menghitung rata-rata setiap kolom
console.log("\nRata-rata setiap kolom:");
let numCols = scoreBoard[0].length;
let numRows = scoreBoard.length;

for (let col = 0; col < numCols; col++) {
    let sum = 0;
    for (let row = 0; row < numRows; row++) {
        sum += scoreBoard[row][col];
    }
    let average = sum / numRows;
    console.log(`Kolom ${col}: ${average.toFixed(2)}`);
}

// Transpose matrix (tukar baris-kolom)
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = createMatrix(cols, rows);
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
}

let originalMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log("\nMatrix original (2x3):");
console.log(originalMatrix);

let transposed = transposeMatrix(originalMatrix);
console.log("Matrix setelah transpose (3x2):");
console.log(transposed);

// ==========================================
// 6. ARRAY 3D
// ==========================================

console.log("\n=== 6. ARRAY 3D ===");
console.log("Array 3D seperti kotak 3D dengan dimensi: depth x height x width");
console.log("");

// Membuat array 3D (3D cube)
let cube = [
    [  // Layer 0
        [1, 2, 3],
        [4, 5, 6]
    ],
    [  // Layer 1  
        [7, 8, 9],
        [10, 11, 12]
    ],
    [  // Layer 2
        [13, 14, 15],
        [16, 17, 18]
    ]
];

console.log("Cube 3D:");
console.log(cube);

// Mengakses elemen 3D
console.log("\nMengakses elemen 3D:");
console.log("cube[0][1][2] =", cube[0][1][2]); // Layer 0, Row 1, Col 2 = 6
console.log("cube[2][0][1] =", cube[2][0][1]); // Layer 2, Row 0, Col 1 = 14

// Iterasi array 3D
console.log("\nIterasi array 3D:");
cube.forEach((layer, layerIndex) => {
    console.log(`Layer ${layerIndex}:`);
    layer.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            console.log(`  [${layerIndex}][${rowIndex}][${colIndex}] = ${value}`);
        });
    });
});

// Fungsi untuk membuat array 3D
function create3DArray(layers, rows, cols, defaultValue = 0) {
    return Array.from({length: layers}, () =>
        Array.from({length: rows}, () =>
            Array.from({length: cols}, () => defaultValue)
        )
    );
}

let cube3D = create3DArray(2, 3, 4, 1);
console.log("\nCube 2x3x4 dengan nilai 1:");
console.log(cube3D);

// ==========================================
// 7. CONTOH APLIKASI PRAKTIS
// ==========================================

console.log("\n=== 7. CONTOH APLIKASI PRAKTIS ===");

// 1. Sistem Kursi Bioskop
console.log("1. Sistem Kursi Bioskop:");
let bioskop = createMatrix(8, 10, 0); // 8 baris, 10 kolom, 0 = kosong

// Fungsi untuk booking kursi
function bookSeat(cinema, row, col) {
    if (cinema[row][col] === 0) {
        cinema[row][col] = 1; // 1 = terisi
        return true;
    }
    return false;
}

// Fungsi untuk menampilkan kursi
function displayCinema(cinema) {
    console.log("  " + Array.from({length: cinema[0].length}, (_, i) => i).join(" "));
    cinema.forEach((row, i) => {
        let rowDisplay = i + " ";
        rowDisplay += row.map(seat => seat === 0 ? "○" : "●").join(" ");
        console.log(rowDisplay);
    });
}

// Booking beberapa kursi
bookSeat(bioskop, 3, 4);
bookSeat(bioskop, 3, 5);
bookSeat(bioskop, 4, 4);
bookSeat(bioskop, 4, 5);

console.log("Bioskop (○ = kosong, ● = terisi):");
displayCinema(bioskop);

// 2. Game Board (Tic-tac-toe)
console.log("\n2. Game Board (Tic-tac-toe):");
let gameBoard = createMatrix(3, 3, " ");

function makeMove(board, row, col, player) {
    if (board[row][col] === " ") {
        board[row][col] = player;
        return true;
    }
    return false;
}

function displayBoard(board) {
    console.log("  0 1 2");
    board.forEach((row, i) => {
        console.log(`${i} ${row.join("|")}`);
        if (i < board.length - 1) console.log("  -----");
    });
}

// Beberapa langkah permainan
makeMove(gameBoard, 1, 1, "X");
makeMove(gameBoard, 0, 0, "O");
makeMove(gameBoard, 2, 2, "X");
makeMove(gameBoard, 0, 2, "O");
makeMove(gameBoard, 0, 1, "X");

displayBoard(gameBoard);

// 3. Tabel Penjualan (Multi-dimensi)
console.log("\n3. Tabel Penjualan per Bulan per Produk:");
let salesData = [
    [150, 200, 180], // Januari: [Produk A, Produk B, Produk C]
    [175, 220, 195], // Februari
    [200, 180, 210], // Maret
    [165, 240, 185]  // April
];

let months = ["Jan", "Feb", "Mar", "Apr"];
let products = ["Produk A", "Produk B", "Produk C"];

console.log("Bulan".padEnd(8) + products.map(p => p.padEnd(10)).join(""));
salesData.forEach((monthData, i) => {
    let row = months[i].padEnd(8);
    monthData.forEach(sales => {
        row += sales.toString().padEnd(10);
    });
    console.log(row);
});

// Total penjualan per produk
console.log("\nTotal penjualan per produk:");
for (let productIndex = 0; productIndex < products.length; productIndex++) {
    let total = 0;
    for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
        total += salesData[monthIndex][productIndex];
    }
    console.log(`${products[productIndex]}: ${total}`);
}

// ==========================================
// 8. TIPS DAN BEST PRACTICES
// ==========================================

console.log("\n=== 8. TIPS DAN BEST PRACTICES ===");
console.log("");
console.log("✅ DO:");
console.log("- Gunakan fungsi helper untuk membuat array multidimensi");
console.log("- Selalu cek bounds sebelum mengakses elemen");
console.log("- Gunakan nama variabel yang deskriptif (row, col, layer)");
console.log("- Dokumentasikan dimensi array dalam komentar");
console.log("");
console.log("❌ DON'T:");
console.log("- Jangan asumsikan semua baris memiliki panjang yang sama");
console.log("- Hindari nested loop yang terlalu dalam jika tidak perlu");
console.log("- Jangan lupa handle array kosong");
console.log("");

// Contoh function yang aman
function safeAccess2D(array, row, col) {
    if (row >= 0 && row < array.length && 
        col >= 0 && col < array[row].length) {
        return array[row][col];
    }
    return undefined;
}

console.log("Safe access test:");
console.log("safeAccess2D(matrix, 1, 1):", safeAccess2D(matrix, 1, 1));
console.log("safeAccess2D(matrix, 10, 10):", safeAccess2D(matrix, 10, 10));

console.log("\n=== MULTIDIMENSIONAL ARRAYS SELESAI ===");
console.log("Lanjut ke file berikutnya untuk contoh comprehensive!");