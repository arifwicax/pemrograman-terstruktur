// ==========================================
// ARRAY METHODS ADVANCED DALAM JAVASCRIPT
// ==========================================

console.log("=== ARRAY METHODS ADVANCED DALAM JAVASCRIPT ===\n");
console.log("Mari kita pelajari method-method array yang lebih powerful!");
console.log("Method-method ini akan membuat kode Anda lebih elegan dan efisien.");
console.log("");

// ==========================================
// 1. SORT METHOD
// ==========================================

console.log("=== 1. SORT METHOD ===");
console.log("Mengurutkan elemen array");
console.log("");

// Sort string (alphabetical)
let buah = ["pisang", "apel", "jeruk", "mangga"];
console.log("Array buah awal:", buah);

let sortedBuah = [...buah].sort(); // copy dulu agar tidak mengubah asli
console.log("Setelah sort():", sortedBuah);
console.log("Array asli tetap:", buah);

// Sort angka - HATI-HATI!
let angka = [10, 5, 40, 25, 1000, 1];
console.log("\nArray angka:", angka);

// Sort default (convert ke string dulu)
let sortedDefault = [...angka].sort();
console.log("Sort default (salah!):", sortedDefault); // [1, 10, 1000, 25, 40, 5]

// Sort angka yang benar
let sortedNumbers = [...angka].sort((a, b) => a - b);
console.log("Sort angka ascending:", sortedNumbers);

let sortedDesc = [...angka].sort((a, b) => b - a);
console.log("Sort angka descending:", sortedDesc);

// Sort object array
let mahasiswa = [
    {nama: "Dedi", nilai: 85},
    {nama: "Andi", nilai: 92},
    {nama: "Cici", nilai: 78},
    {nama: "Budi", nilai: 90}
];

console.log("\nArray mahasiswa:", mahasiswa);

// Sort by nama
let sortedByName = [...mahasiswa].sort((a, b) => a.nama.localeCompare(b.nama));
console.log("Sort by nama:", sortedByName);

// Sort by nilai
let sortedByGrade = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("Sort by nilai (desc):", sortedByGrade);

// ==========================================
// 2. FLAT DAN FLATMAP
// ==========================================

console.log("\n=== 2. FLAT DAN FLATMAP ===");
console.log("Meratakan array yang nested (array dalam array)");
console.log("");

// Array nested
let nested = [1, [2, 3], [4, [5, 6]], 7];
console.log("Array nested:", nested);

// Flat level 1
let flat1 = nested.flat();
console.log("Flat level 1:", flat1);

// Flat level 2
let flat2 = nested.flat(2);
console.log("Flat level 2:", flat2);

// Flat semua level
let deepNested = [1, [2, [3, [4, [5]]]]];
console.log("\nDeep nested:", deepNested);
let flatAll = deepNested.flat(Infinity);
console.log("Flat all levels:", flatAll);

// flatMap() - kombinasi map() dan flat()
let sentences = ["Hello world", "How are you"];
console.log("\nSentences:", sentences);

// Dengan map() + flat()
let words1 = sentences.map(sentence => sentence.split(" ")).flat();
console.log("map() + flat():", words1);

// Dengan flatMap() (lebih efisien)
let words2 = sentences.flatMap(sentence => sentence.split(" "));
console.log("flatMap():", words2);

// flatMap untuk filter dan map sekaligus
let numbers = [1, 2, 3, 4, 5];
let evenDoubles = numbers.flatMap(n => n % 2 === 0 ? [n * 2] : []);
console.log("Even numbers doubled:", evenDoubles);

// ==========================================
// 3. SPLICE METHOD (ADVANCED)
// ==========================================

console.log("\n=== 3. SPLICE METHOD (ADVANCED) ===");
console.log("Swiss army knife untuk memodifikasi array");
console.log("");

let data = ["a", "b", "c", "d", "e"];
console.log("Array data awal:", data);

// Splice untuk delete
let deleted = data.splice(1, 2); // hapus 2 elemen mulai index 1
console.log("Deleted:", deleted);
console.log("Data after delete:", data);

// Splice untuk insert
data.splice(1, 0, "x", "y"); // insert di index 1, hapus 0, tambah "x", "y"
console.log("Data after insert:", data);

// Splice untuk replace
data.splice(2, 1, "z"); // ganti 1 elemen di index 2 dengan "z"
console.log("Data after replace:", data);

// Contoh praktis: menghapus elemen berdasarkan nilai
let items = ["apple", "banana", "cherry", "date"];
console.log("\nItems awal:", items);

function removeItem(array, item) {
    let index = array.indexOf(item);
    if (index > -1) {
        return array.splice(index, 1);
    }
    return null;
}

removeItem(items, "banana");
console.log("After removing banana:", items);

// ==========================================
// 4. FILL DAN COPYWITHIN
// ==========================================

console.log("\n=== 4. FILL DAN COPYWITHIN ===");

// fill() - mengisi array dengan nilai tertentu
let arr1 = new Array(5);
console.log("Array kosong:", arr1);

arr1.fill(0);
console.log("Fill dengan 0:", arr1);

let arr2 = [1, 2, 3, 4, 5];
console.log("\nArray original:", arr2);

// Fill sebagian
arr2.fill(9, 1, 4); // fill nilai 9 dari index 1 sampai 4 (exclusive)
console.log("Fill index 1-3 dengan 9:", arr2);

// copyWithin() - copy bagian array ke posisi lain
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("\nArray original:", arr3);

arr3.copyWithin(0, 3, 6); // copy index 3-5 ke index 0
console.log("Copy index 3-5 ke index 0:", arr3);

// ==========================================
// 5. ARRAY.FROM ADVANCED
// ==========================================

console.log("\n=== 5. ARRAY.FROM ADVANCED ===");

// Generate array dengan pattern
let squares = Array.from({length: 10}, (v, i) => i * i);
console.log("Array kuadrat 0-9:", squares);

let fibonacci = Array.from({length: 10}, (v, i) => {
    if (i < 2) return i;
    // Ini tidak efisien untuk fibonacci, hanya contoh
    let a = 0, b = 1;
    for (let j = 2; j <= i; j++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
});
console.log("Fibonacci 10 pertama:", fibonacci);

// Array dari NodeList (simulasi)
let fakeNodeList = {
    0: "div",
    1: "span", 
    2: "p",
    length: 3
};

let elements = Array.from(fakeNodeList);
console.log("From fake NodeList:", elements);

// Array dari Set
let uniqueNumbers = Array.from(new Set([1, 2, 2, 3, 3, 4]));
console.log("Unique numbers from Set:", uniqueNumbers);

// ==========================================
// 6. CHAINING METHODS
// ==========================================

console.log("\n=== 6. CHAINING METHODS ===");
console.log("Menggabungkan beberapa method array");
console.log("");

let products = [
    {name: "Laptop", price: 15000000, category: "Electronics", rating: 4.5},
    {name: "Mouse", price: 150000, category: "Electronics", rating: 4.2},
    {name: "Book", price: 50000, category: "Education", rating: 4.8},
    {name: "Keyboard", price: 500000, category: "Electronics", rating: 4.3},
    {name: "Notebook", price: 25000, category: "Education", rating: 4.1}
];

console.log("Products:", products);

// Chain: filter -> map -> sort
let expensiveElectronics = products
    .filter(p => p.category === "Electronics")  // hanya electronics
    .filter(p => p.price > 200000)             // harga > 200k
    .map(p => ({                               // transform data
        name: p.name,
        priceFormatted: `Rp ${p.price.toLocaleString()}`,
        rating: p.rating
    }))
    .sort((a, b) => b.rating - a.rating);      // sort by rating desc

console.log("\nExpensive Electronics (sorted by rating):");
expensiveElectronics.forEach(p => console.log(p));

// Chain untuk analisis data
let analysis = products
    .reduce((acc, product) => {
        // Group by category
        if (!acc.categories[product.category]) {
            acc.categories[product.category] = {
                count: 0,
                totalPrice: 0,
                avgRating: 0,
                products: []
            };
        }
        
        let cat = acc.categories[product.category];
        cat.count++;
        cat.totalPrice += product.price;
        cat.products.push(product.rating);
        cat.avgRating = cat.products.reduce((sum, r) => sum + r, 0) / cat.products.length;
        
        return acc;
    }, {categories: {}});

console.log("\nAnalysis by category:");
Object.entries(analysis.categories).forEach(([category, data]) => {
    console.log(`${category}: ${data.count} items, Avg price: Rp ${(data.totalPrice/data.count).toLocaleString()}, Avg rating: ${data.avgRating.toFixed(2)}`);
});

// ==========================================
// 7. ARRAY DESTRUCTURING ADVANCED
// ==========================================

console.log("\n=== 7. ARRAY DESTRUCTURING ADVANCED ===");

// Basic destructuring
let colors = ["red", "green", "blue", "yellow", "purple"];
let [first, second, ...rest] = colors;
console.log("First:", first);
console.log("Second:", second);  
console.log("Rest:", rest);

// Swapping variables
let a = 1, b = 2;
console.log(`Before swap: a=${a}, b=${b}`);
[a, b] = [b, a];
console.log(`After swap: a=${a}, b=${b}`);

// Destructuring dalam function parameters
function processCoordinates([x, y, z = 0]) {
    return `X: ${x}, Y: ${y}, Z: ${z}`;
}

console.log(processCoordinates([10, 20]));      // Z default = 0
console.log(processCoordinates([10, 20, 30]));  // Z = 30

// Destructuring return values
function getMinMax(array) {
    return [Math.min(...array), Math.max(...array)];
}

let [min, max] = getMinMax([5, 2, 8, 1, 9]);
console.log(`Min: ${min}, Max: ${max}`);

// ==========================================
// 8. SPREAD OPERATOR ADVANCED
// ==========================================

console.log("\n=== 8. SPREAD OPERATOR ADVANCED ===");

// Cloning array (shallow copy)
let original = [1, 2, {x: 3}];
let clone = [...original];
console.log("Original:", original);
console.log("Clone:", clone);
console.log("Same reference?", original === clone); // false

// Combining arrays
let arr1a = [1, 2];
let arr2a = [3, 4];
let arr3a = [5, 6];
let combined = [...arr1a, ...arr2a, ...arr3a];
console.log("Combined:", combined);

// Adding elements while copying
let withExtra = [0, ...arr1a, 2.5, ...arr2a, 4.5, ...arr3a, 7];
console.log("With extra:", withExtra);

// Function arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of 1,2,3:", sum(1, 2, 3));
console.log("Sum of array:", sum(...[4, 5, 6]));

// Finding max/min
let nums = [3, 7, 2, 9, 1, 5];
console.log("Max:", Math.max(...nums));
console.log("Min:", Math.min(...nums));

// ==========================================
// 9. PERFORMANCE TIPS
// ==========================================

console.log("\n=== 9. PERFORMANCE TIPS ===");
console.log("");

// Tip 1: Hindari nested loops yang tidak perlu
console.log("❌ Hindari:");
console.log("arr1.forEach(item1 => {");
console.log("  arr2.forEach(item2 => { /* O(n²) */ });");
console.log("});");
console.log("");

console.log("✅ Lebih baik:");
console.log("let set2 = new Set(arr2);");
console.log("arr1.filter(item => set2.has(item)); // O(n)");
console.log("");

// Tip 2: Use appropriate methods
console.log("✅ Pilih method yang tepat:");
console.log("- find() untuk mencari 1 elemen");
console.log("- some() untuk mengecek kondisi");  
console.log("- includes() untuk membership test");
console.log("- map() untuk transformasi");
console.log("- filter() untuk penyaringan");
console.log("");

// ==========================================
// 10. COMMON PATTERNS
// ==========================================

console.log("\n=== 10. COMMON PATTERNS ===");

// Pattern 1: Remove duplicates
let duplicates = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(duplicates)];
console.log("Remove duplicates:", unique);

// Pattern 2: Chunking array
function chunk(array, size) {
    return array.reduce((chunks, item, index) => {
        const chunkIndex = Math.floor(index / size);
        if (!chunks[chunkIndex]) {
            chunks[chunkIndex] = [];
        }
        chunks[chunkIndex].push(item);
        return chunks;
    }, []);
}

let longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Chunked array:", chunk(longArray, 3));

// Pattern 3: Group by property
let students = [
    {name: "Alice", grade: "A"},
    {name: "Bob", grade: "B"},
    {name: "Charlie", grade: "A"},
    {name: "David", grade: "C"},
    {name: "Eve", grade: "B"}
];

let groupedByGrade = students.reduce((groups, student) => {
    const grade = student.grade;
    if (!groups[grade]) {
        groups[grade] = [];
    }
    groups[grade].push(student);
    return groups;
}, {});

console.log("Grouped by grade:", groupedByGrade);

// Pattern 4: Count occurrences
let fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];
let fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log("Fruit count:", fruitCount);

console.log("\n=== ARRAY METHODS ADVANCED SELESAI ===");
console.log("Lanjut ke file berikutnya untuk belajar multidimensional arrays!");