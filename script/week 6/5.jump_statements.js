// JUMP STATEMENTS DALAM JAVASCRIPT

console.log("JUMP STATEMENTS DALAM JAVASCRIPT");
console.log("Jump statements digunakan untuk mengubah alur program.");
console.log("Jenis: break, continue, return, dan label\n");

// 1. BREAK STATEMENT

console.log("1. BREAK STATEMENT");
console.log("Break digunakan untuk menghentikan loop atau switch\n");

// Break dalam for loop
console.log("Break dalam for loop (berhenti di 5):");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Ditemukan angka 5, loop dihentikan!");
        break;
    }
    console.log("Iterasi:", i);
}
console.log("Loop selesai\n");

// Break dalam while loop
console.log("Break dalam while loop (mencari angka genap pertama > 10):");
let number = 11;
while (true) {
    console.log("Memeriksa angka:", number);
    if (number % 2 === 0) {
        console.log("Ditemukan angka genap:", number);
        break;
    }
    number++;
    
    // Safety net untuk menghindari infinite loop
    if (number > 20) {
        console.log("Tidak ditemukan dalam range 11-20");
        break;
    }
}
console.log("While loop selesai\n");

// Break dalam switch (sudah dicontohkan di file lain)
console.log("Break dalam switch:");
let day = 3;
switch (day) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break; // Tanpa break, akan lanjut ke case berikutnya
    case 4:
        console.log("Kamis");
        break;
    default:
        console.log("Hari tidak dikenal");
}

// 2. CONTINUE STATEMENT

console.log("\n2. CONTINUE STATEMENT");
console.log("Continue digunakan untuk melewati satu iterasi\n");

// Continue dalam for loop
console.log("Continue dalam for loop (lewati angka genap):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Lewati angka genap
    }
    console.log("Angka ganjil:", i);
}

// Continue dalam while loop
console.log("\nContinue dalam while loop (lewati kelipatan 3):");
let count = 1;
while (count <= 15) {
    if (count % 3 === 0) {
        console.log(`Melewati ${count} (kelipatan 3)`);
        count++;
        continue;
    }
    console.log("Angka:", count);
    count++;
}

// Continue dengan kondisi kompleks
console.log("\nContinue dengan kondisi kompleks (lewati vokal):");
let text = "JavaScript";
for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        continue; // Lewati vokal
    }
    console.log(`Konsonan: ${char}`);
}

// 3. RETURN STATEMENT

console.log("\n3. RETURN STATEMENT");
console.log("Return digunakan untuk mengembalikan nilai dari fungsi\n");

// Function dengan return sederhana
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 3);
console.log("Function tambah(5, 3):", hasil);

// Function dengan multiple return
function cekGrade(nilai) {
    if (nilai >= 90) {
        return "A";
    }
    if (nilai >= 80) {
        return "B";
    }
    if (nilai >= 70) {
        return "C";
    }
    if (nilai >= 60) {
        return "D";
    }
    return "F";
}

console.log("\nFunction cekGrade dengan multiple return:");
let scores = [95, 85, 75, 65, 55];
for (let score of scores) {
    console.log(`Nilai ${score}: Grade ${cekGrade(score)}`);
}

// Function dengan early return
function validateUser(user) {
    if (!user) {
        return "User tidak boleh kosong";
    }
    
    if (!user.name) {
        return "Nama harus diisi";
    }
    
    if (!user.email) {
        return "Email harus diisi";
    }
    
    if (user.age < 18) {
        return "Umur minimal 18 tahun";
    }
    
    return "User valid";
}

console.log("\nFunction validateUser dengan early return:");
let users = [
    null,
    { name: "John" },
    { name: "Jane", email: "jane@email.com" },
    { name: "Bob", email: "bob@email.com", age: 16 },
    { name: "Alice", email: "alice@email.com", age: 25 }
];

users.forEach((user, index) => {
    console.log(`User ${index + 1}: ${validateUser(user)}`);
});

// Function dengan return object
function createProduct(name, price, category) {
    if (!name || !price) {
        return null;
    }
    
    return {
        id: Math.floor(Math.random() * 1000),
        name: name,
        price: price,
        category: category || "General",
        createdAt: new Date().toISOString()
    };
}

console.log("\nFunction createProduct:");
let product = createProduct("Laptop", 15000000, "Electronics");
console.log("Product created:", product);

// 4. LABELED STATEMENTS

console.log("\n4. LABELED STATEMENTS");
console.log("Label digunakan dengan break/continue untuk nested loops\n");

// Label dengan nested loop
console.log("Mencari angka dalam matrix 2D:");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let targetNumber = 5;
let found = false;

outerLoop: for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Memeriksa posisi [${i}][${j}]: ${matrix[i][j]}`);
        
        if (matrix[i][j] === targetNumber) {
            console.log(`Angka ${targetNumber} ditemukan di posisi [${i}][${j}]!`);
            found = true;
            break outerLoop; // Keluar dari semua nested loop
        }
    }
}

if (!found) {
    console.log(`Angka ${targetNumber} tidak ditemukan`);
}

// Label dengan continue
console.log("\nLabel dengan continue (lewati baris yang mengandung 0):");
let matrix2 = [
    [1, 2, 3],
    [0, 5, 6], // Baris ini akan dilewati
    [7, 8, 9],
    [10, 0, 12] // Baris ini juga akan dilewati
];

outerLoop2: for (let i = 0; i < matrix2.length; i++) {
    // Cek apakah baris mengandung 0
    for (let j = 0; j < matrix2[i].length; j++) {
        if (matrix2[i][j] === 0) {
            console.log(`Melewati baris ${i} (mengandung 0)`);
            continue outerLoop2;
        }
    }
    
    // Jika tidak ada 0, proses baris ini
    console.log(`Baris ${i}:`, matrix2[i]);
}

// 5. PRACTICAL EXAMPLES

console.log("\n5. PRACTICAL EXAMPLES");

// Example 1: Search dengan break
function findUser(users, targetId) {
    console.log(`Mencari user dengan ID: ${targetId}`);
    
    for (let i = 0; i < users.length; i++) {
        console.log(`Checking user ${i + 1}: ${users[i].name}`);
        
        if (users[i].id === targetId) {
            console.log(`User ditemukan: ${users[i].name}`);
            return users[i];
        }
    }
    
    console.log("User tidak ditemukan");
    return null;
}

let userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" }
];

findUser(userList, 3);

// Example 2: Data processing dengan continue
function processScores(scores) {
    console.log("\nMemproses data nilai:");
    let validScores = [];
    let processedCount = 0;
    
    for (let i = 0; i < scores.length; i++) {
        console.log(`Processing score ${i + 1}: ${scores[i]}`);
        
        // Skip invalid scores
        if (scores[i] < 0 || scores[i] > 100) {
            console.log(`  Skipping invalid score: ${scores[i]}`);
            continue;
        }
        
        // Process valid score
        validScores.push(scores[i]);
        processedCount++;
        console.log(`  Valid score added: ${scores[i]}`);
    }
    
    return {
        validScores: validScores,
        processedCount: processedCount,
        totalCount: scores.length
    };
}

let scoreData = [85, 92, -5, 78, 150, 88, 95];
let result = processScores(scoreData);
console.log("Result:", result);

// Example 3: Menu system dengan return
function processMenuChoice(choice) {
    switch (choice) {
        case 1:
            console.log("Membuka profil...");
            return "profile_opened";
        
        case 2:
            console.log("Membuka pengaturan...");
            return "settings_opened";
        
        case 3:
            console.log("Logout...");
            return "logged_out";
        
        case 0:
            console.log("Keluar dari aplikasi...");
            return "app_exit";
        
        default:
            console.log("Pilihan tidak valid!");
            return "invalid_choice";
    }
}

console.log("\nSimulasi menu sistem:");
let menuChoices = [1, 5, 2, 0];
for (let choice of menuChoices) {
    console.log(`\nUser memilih: ${choice}`);
    let status = processMenuChoice(choice);
    console.log(`Status: ${status}`);
    
    if (status === "app_exit") {
        console.log("Aplikasi ditutup.");
        break;
    }
}

console.log("\nTIPS JUMP STATEMENTS");
console.log("1. Gunakan break untuk menghentikan loop saat kondisi terpenuhi");
console.log("2. Gunakan continue untuk melewati iterasi yang tidak diinginkan");
console.log("3. Gunakan return untuk early exit dari function");
console.log("4. Label berguna untuk nested loop yang kompleks");
console.log("5. Hati-hati dengan overuse - bisa membuat kode sulit dibaca");
console.log("6. Return null/undefined untuk menandakan error atau data tidak ditemukan");

console.log("\nSELESAI - JUMP STATEMENTS");