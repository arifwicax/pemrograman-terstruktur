// ADVANCED LOOPS DALAM JAVASCRIPT

console.log("ADVANCED LOOPS DALAM JAVASCRIPT");
console.log("Advanced loops: for-of, for-in, dan variasi loop lainnya");
console.log("Digunakan untuk iterasi array, object, dan iterable lainnya\n");

// 1. FOR-OF LOOP

console.log("1. FOR-OF LOOP");
console.log("For-of digunakan untuk membaca isi array dan iterable\n");

// For-of dengan array
let numbers = [10, 20, 30, 40, 50];
console.log("Array numbers:", numbers);
console.log("Iterasi dengan for-of:");

for (let number of numbers) {
    console.log("Nilai:", number);
}

// For-of dengan string array
let fruits = ["apel", "jeruk", "mangga", "pisang"];
console.log("\nArray fruits:", fruits);
console.log("Iterasi dengan for-of:");

for (let fruit of fruits) {
    console.log("Buah:", fruit.toUpperCase());
}

// For-of dengan string
let kata = "JavaScript";
console.log("\nString:", kata);
console.log("Iterasi karakter dengan for-of:");

for (let char of kata) {
    console.log("Karakter:", char);
}

// For-of dengan Set
let uniqueColors = new Set(["merah", "biru", "hijau", "merah", "kuning"]);
console.log("\nSet uniqueColors:", uniqueColors);
console.log("Iterasi dengan for-of:");

for (let color of uniqueColors) {
    console.log("Warna:", color);
}

// For-of dengan Map
let userRoles = new Map();
userRoles.set("admin", "Administrator");
userRoles.set("user", "Regular User");
userRoles.set("guest", "Guest User");

console.log("\nMap userRoles:", userRoles);
console.log("Iterasi dengan for-of:");

for (let [key, value] of userRoles) {
    console.log(`Role: ${key} -> ${value}`);
}

// 2. FOR-IN LOOP

console.log("\n2. FOR-IN LOOP");
console.log("For-in digunakan untuk membaca property object\n");

// For-in dengan object
let mahasiswa = {
    nama: "Andi Wijaya",
    nim: "12345678",
    jurusan: "Sistem Informasi",
    semester: 3,
    ipk: 3.75
};

console.log("Object mahasiswa:", mahasiswa);
console.log("Iterasi property dengan for-in:");

for (let property in mahasiswa) {
    console.log(`${property}: ${mahasiswa[property]}`);
}

// For-in dengan array (menampilkan index)
let colors = ["red", "green", "blue"];
console.log("\nArray colors:", colors);
console.log("Iterasi index dengan for-in:");

for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}

// For-in dengan object methods
let calculator = {
    model: "Scientific Calculator",
    brand: "Casio",
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; },
    multiply: function(a, b) { return a * b; }
};

console.log("\nObject calculator dengan methods:");
console.log("Iterasi property dengan for-in:");

for (let prop in calculator) {
    if (typeof calculator[prop] === 'function') {
        console.log(`${prop}: [Function]`);
    } else {
        console.log(`${prop}: ${calculator[prop]}`);
    }
}

// 3. PERBEDAAN FOR-OF VS FOR-IN

console.log("\n3. PERBEDAAN FOR-OF VS FOR-IN");

let testArray = ["a", "b", "c"];
testArray.customProperty = "custom";

console.log("Array dengan custom property:", testArray);
console.log("testArray.customProperty:", testArray.customProperty);

console.log("\nDengan for-of (values):");
for (let value of testArray) {
    console.log("Value:", value);
}

console.log("\nDengan for-in (keys/indexes):");
for (let key in testArray) {
    console.log(`Key: ${key}, Value: ${testArray[key]}`);
}

// 4. ITERASI DENGAN ARRAY METHODS

console.log("\n4. ITERASI DENGAN ARRAY METHODS");

// forEach method
let scores = [85, 92, 78, 96, 88];
console.log("Array scores:", scores);
console.log("\nIterasi dengan forEach:");

scores.forEach(function(score, index) {
    console.log(`Student ${index + 1}: ${score}`);
});

// forEach dengan arrow function
console.log("\ndengan arrow function:");
scores.forEach((score, index) => {
    let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
    console.log(`Student ${index + 1}: ${score} (Grade: ${grade})`);
});

// map method
console.log("\ndengan map (menghasilkan array baru):");
let grades = scores.map(score => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "D";
});
console.log("Grades:", grades);

// filter method
console.log("\ndengan filter (nilai >= 85):");
let highScores = scores.filter(score => score >= 85);
console.log("High scores:", highScores);

// reduce method
console.log("\ndengan reduce (rata-rata):");
let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Rata-rata:", average.toFixed(2));

// 5. NESTED LOOPS DENGAN ARRAYS

console.log("\n5. NESTED LOOPS DENGAN ARRAYS");

// Matrix dengan nested for-of
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix 3x3:");
for (let row of matrix) {
    let rowString = "";
    for (let cell of row) {
        rowString += cell + "\t";
    }
    console.log(rowString);
}

// Objects dalam array
let students = [
    { name: "Alice", score: 95, grade: "A" },
    { name: "Bob", score: 87, grade: "B" },
    { name: "Charlie", score: 92, grade: "A" }
];

console.log("\nData students:");
for (let student of students) {
    console.log(`\nStudent: ${student.name}`);
    for (let property in student) {
        console.log(`  ${property}: ${student[property]}`);
    }
}

// 6. PERFORMANCE COMPARISON

console.log("\n6. PERFORMANCE COMPARISON");

let largeArray = new Array(10000).fill(0).map((_, i) => i);
let sum = 0;

// Test for loop
let start = performance.now();
for (let i = 0; i < largeArray.length; i++) {
    sum += largeArray[i];
}
let end = performance.now();
console.log(`For loop: ${(end - start).toFixed(2)} ms`);

// Test for-of
sum = 0;
start = performance.now();
for (let num of largeArray) {
    sum += num;
}
end = performance.now();
console.log(`For-of: ${(end - start).toFixed(2)} ms`);

// Test forEach
sum = 0;
start = performance.now();
largeArray.forEach(num => sum += num);
end = performance.now();
console.log(`forEach: ${(end - start).toFixed(2)} ms`);

// Test reduce
start = performance.now();
sum = largeArray.reduce((acc, num) => acc + num, 0);
end = performance.now();
console.log(`reduce: ${(end - start).toFixed(2)} ms`);

// 7. PRACTICAL EXAMPLES

console.log("\n7. PRACTICAL EXAMPLES");

// Mencari dalam object array
let products = [
    { id: 1, name: "Laptop", price: 15000000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 150000, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 500000, category: "Electronics" },
    { id: 4, name: "Chair", price: 2000000, category: "Furniture" }
];

console.log("\nMencari produk Electronics:");
for (let product of products) {
    if (product.category === "Electronics") {
        console.log(`${product.name}: Rp ${product.price.toLocaleString()}`);
    }
}

// Grouping data
let inventory = {};
console.log("\nGrouping by category:");
for (let product of products) {
    if (!inventory[product.category]) {
        inventory[product.category] = [];
    }
    inventory[product.category].push(product);
}

for (let category in inventory) {
    console.log(`\n${category}:`);
    for (let item of inventory[category]) {
        console.log(`  - ${item.name}`);
    }
}

// Transformasi data
console.log("\nTransformasi harga ke USD (kurs 15000):");
let productsUSD = products.map(product => ({
    ...product,
    priceUSD: (product.price / 15000).toFixed(2)
}));

for (let product of productsUSD) {
    console.log(`${product.name}: $${product.priceUSD}`);
}

console.log("\nTIPS ADVANCED LOOPS");
console.log("1. Gunakan for-of untuk iterasi values (array, string, Set, Map)");
console.log("2. Gunakan for-in untuk iterasi keys/properties (object)");
console.log("3. forEach untuk functional programming style");
console.log("4. map untuk transformasi data");
console.log("5. filter untuk seleksi data");
console.log("6. reduce untuk aggregasi data");
console.log("7. For loop tradisional masih tercepat untuk operasi sederhana");

console.log("\nSELESAI - ADVANCED LOOPS");