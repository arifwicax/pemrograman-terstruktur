// LOOP STATEMENTS DALAM JAVASCRIPT

console.log("LOOP STATEMENTS DALAM JAVASCRIPT");
console.log("Loop (perulangan) digunakan untuk menjalankan kode secara berulang.");
console.log("Jenis loop: while, do-while, for\n");

// 1. WHILE LOOP

console.log("1. WHILE LOOP");
console.log("While loop: perulangan selama kondisi bernilai true\n");

// Contoh dasar while loop
let i = 0;
console.log("Contoh while loop dari 0 sampai 4:");
while (i < 5) {
    console.log("Iterasi ke:", i);
    i++;
}

// While loop dengan kondisi yang lebih kompleks
let angka = 1;
console.log("\nMenampilkan pangkat 2 (sampai < 100):");
while (angka < 100) {
    console.log("2 pangkat", Math.log2(angka) + ":", angka);
    angka *= 2;
}

// While loop dengan input validation simulation
let password = "";
let attempts = 0;
let correctPassword = "javascript123";
let maxAttempts = 3;

console.log("\nSimulasi login dengan while loop:");
// Simulasi input password yang salah 2 kali lalu benar
let inputPasswords = ["password", "123456", "javascript123"];
let inputIndex = 0;

while (password !== correctPassword && attempts < maxAttempts) {
    password = inputPasswords[inputIndex];
    attempts++;
    
    console.log(`Attempt ${attempts}: Password = "${password}"`); 
    
    if (password === correctPassword) {
        console.log("Login berhasil!");
    } else {
        console.log("Password salah!");
    }
    
    inputIndex++;
}

if (password !== correctPassword) {
    console.log("Akun terkunci setelah", maxAttempts, "percobaan");
}

// 2. DO-WHILE LOOP

console.log("\n2. DO-WHILE LOOP");
console.log("Do-while loop: minimal dijalankan satu kali\n");

// Contoh dasar do-while
let j = 0;
console.log("Contoh do-while dari 0 sampai 4:");
do {
    console.log("Do-while iterasi:", j);
    j++;
} while (j < 5);

// Do-while bahkan ketika kondisi awal false
let k = 10;
console.log("\nDo-while dengan kondisi awal false (k = 10):");
do {
    console.log("Ini tetap dijalankan sekali, k:", k);
    k++;
} while (k < 5);

// Praktis: Menu selection dengan do-while
let pilihan = 0;
let iterasi = 0;
let menuChoices = [1, 2, 3, 0]; // simulasi input user

console.log("\nSimulasi menu dengan do-while:");
do {
    console.log("\n--- MENU UTAMA ---");
    console.log("1. Lihat Profile");
    console.log("2. Edit Data");
    console.log("3. Pengaturan");
    console.log("0. Keluar");
    
    // Simulasi input user
    pilihan = menuChoices[iterasi];
    console.log("User memilih:", pilihan);
    
    switch (pilihan) {
        case 1:
            console.log("Menampilkan profile...");
            break;
        case 2:
            console.log("Membuka editor data...");
            break;
        case 3:
            console.log("Membuka pengaturan...");
            break;
        case 0:
            console.log("Keluar dari aplikasi. Goodbye!");
            break;
        default:
            console.log("Pilihan tidak valid!");
    }
    
    iterasi++;
} while (pilihan !== 0 && iterasi < menuChoices.length);

// 3. FOR LOOP

console.log("\n3. FOR LOOP");
console.log("For loop: loop yang paling sering digunakan\n");

// Contoh dasar for loop
console.log("Contoh for loop dari 0 sampai 4:");
for (let m = 0; m < 5; m++) {
    console.log("For loop iterasi:", m);
}

// For loop dengan increment berbeda
console.log("\nFor loop dengan increment 2:");
for (let n = 0; n <= 10; n += 2) {
    console.log("Angka genap:", n);
}

// For loop countdown
console.log("\nFor loop countdown:");
for (let countdown = 5; countdown > 0; countdown--) {
    console.log("Countdown:", countdown);
}
console.log("🚀 BLAST OFF!");

// For loop dengan array
console.log("\nFor loop dengan array:");
let fruits = ["apel", "jeruk", "mangga", "pisang"];
for (let index = 0; index < fruits.length; index++) {
    console.log(`Buah ke-${index + 1}:`, fruits[index]);
}

// For loop bersarang (nested)
console.log("\nFor loop bersarang - tabel perkalian 3x3:");
for (let baris = 1; baris <= 3; baris++) {
    let hasil_baris = "";
    for (let kolom = 1; kolom <= 3; kolom++) {
        hasil_baris += (baris * kolom) + "\t";
    }
    console.log(`Baris ${baris}: ${hasil_baris}`);
}

// 4. FOR LOOP VARIATIONS

console.log("\n4. FOR LOOP VARIATIONS");

// For loop dengan multiple variables
console.log("For loop dengan multiple variables:");
for (let x = 0, y = 10; x < 5; x++, y--) {
    console.log(`x: ${x}, y: ${y}, sum: ${x + y}`);
}

// For loop dengan kondisi kompleks
console.log("\nFor loop dengan kondisi kompleks:");
for (let num = 1; num <= 20 && num % 7 !== 0; num++) {
    if (num % 2 === 0) {
        console.log(num, "adalah bilangan genap");
    }
}

// 5. PRAKTIK LOOP DENGAN KASUS NYATA

console.log("\n5. PRAKTIK LOOP DENGAN KASUS NYATA");

// Menghitung faktorial dengan while
let faktorial_num = 5;
let faktorial = 1;
let temp = faktorial_num;

console.log(`Menghitung faktorial ${faktorial_num} dengan while:`);
while (temp > 0) {
    faktorial *= temp;
    console.log(`${faktorial_num}! step: ${faktorial} (temp: ${temp})`);
    temp--;
}
console.log(`Hasil: ${faktorial_num}! = ${faktorial}`);

// Mencari bilangan prima dengan for
console.log("\nMencari bilangan prima 1-20 dengan for:");
for (let kandidat = 2; kandidat <= 20; kandidat++) {
    let isPrima = true;
    
    for (let pembagi = 2; pembagi < kandidat; pembagi++) {
        if (kandidat % pembagi === 0) {
            isPrima = false;
            break;
        }
    }
    
    if (isPrima) {
        console.log(kandidat, "adalah bilangan prima");
    }
}

// Simulasi loading dengan do-while
console.log("\nSimulasi proses loading:");
let progress = 0;
let loadingStep = 0;

do {
    progress += Math.floor(Math.random() * 25) + 10; // Random 10-34
    if (progress > 100) progress = 100;
    
    console.log(`Loading... ${progress}%`);
    loadingStep++;
    
    // Simulasi delay
    if (loadingStep % 2 === 0) {
        console.log("Processing data...");
    }
    
} while (progress < 100);

console.log("✅ Loading complete!");

// 6. LOOP PERFORMANCE DAN BEST PRACTICES

console.log("\n6. LOOP PERFORMANCE DAN BEST PRACTICES");

// Mengukur performa loop
let start = performance.now();
let sum = 0;

for (let p = 0; p < 100000; p++) {
    sum += p;
}

let end = performance.now();
console.log(`For loop 100,000 iterasi: ${(end - start).toFixed(2)} ms`);
console.log(`Sum: ${sum}`);

// Best practice: cache array length
let bigArray = new Array(1000).fill(0).map((_, i) => i);

start = performance.now();
for (let q = 0, len = bigArray.length; q < len; q++) {
    // Cached length version
}
end = performance.now();
console.log(`For loop dengan cached length: ${(end - start).toFixed(2)} ms`);

console.log("\nTIPS LOOP STATEMENTS");
console.log("1. Gunakan for loop untuk iterasi dengan counter yang jelas");
console.log("2. Gunakan while loop untuk kondisi yang tidak pasti kapan berakhir");
console.log("3. Gunakan do-while untuk yang minimal dijalankan sekali");
console.log("4. Hati-hati dengan infinite loop");
console.log("5. Cache array length untuk performa yang lebih baik");
console.log("6. Gunakan break dan continue untuk kontrol flow yang lebih baik");

console.log("\nSELESAI - LOOP STATEMENTS");