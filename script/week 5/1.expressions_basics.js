// EXPRESSIONS BASICS DALAM JAVASCRIPT

console.log("Expression adalah bagian kode program yang dapat menghasilkan suatu nilai");
console.log("Expression terdiri dari literals, variables, dan operators");

// APA ITU EXPRESSION
// Expression sederhana - literal
console.log("Expression literal:");
console.log("5 ->", 5);                    // Expression menghasilkan nilai 5
console.log("'Hello' ->", 'Hello');        // Expression menghasilkan nilai "Hello" 
console.log("true ->", true);              // Expression menghasilkan nilai true

// Expression dengan operator
console.log("\nExpression dengan operator:");
console.log("10 + 5 ->", 10 + 5);         // Expression menghasilkan nilai 15
console.log("20 - 8 ->", 20 - 8);         // Expression menghasilkan nilai 12
console.log("3 * 4 ->", 3 * 4);           // Expression menghasilkan nilai 12

// Expression dengan variabel
console.log("\nExpression dengan variabel:");
let x = 10;
let y = 5;
console.log("x =", x);
console.log("y =", y);
console.log("x + y ->", x + y);           // Expression menghasilkan nilai 15
console.log("x * y ->", x * y);           // Expression menghasilkan nilai 50
console.log("");

// PRIMARY EXPRESSIONS

console.log("PRIMARY EXPRESSIONS");
console.log("Primary expressions adalah expression paling sederhana");

// 1. Literals
console.log("\n1. LITERALS:");
console.log("Number literal: 42 ->", 42);
console.log("String literal: 'JavaScript' ->", 'JavaScript');
console.log("Boolean literal: false ->", false);
console.log("Null literal: null ->", null);
console.log("Undefined literal: undefined ->", undefined);

// Literal dalam berbagai format
console.log("\nLiteral dalam berbagai format:");
console.log("Decimal: 123 ->", 123);
console.log("Float: 3.14 ->", 3.14);
console.log("Scientific: 1e5 ->", 1e5);
console.log("Binary: 0b1010 ->", 0b1010);      // Binary untuk 10
console.log("Octal: 0o12 ->", 0o12);           // Octal untuk 10
console.log("Hexadecimal: 0xA ->", 0xA);       // Hex untuk 10

// 2. Keywords sebagai expressions
console.log("\n2. KEYWORDS SEBAGAI EXPRESSIONS:");
console.log("true ->", true);
console.log("false ->", false);
console.log("null ->", null);
console.log("undefined ->", undefined);
// console.log("this ->", this);  // this dalam global scope

// 3. Variables sebagai expressions
console.log("\n3. VARIABLES SEBAGAI EXPRESSIONS:");
let nama = "Andi";
let umur = 20;
let aktif = true;

console.log("nama ->", nama);
console.log("umur ->", umur);
console.log("aktif ->", aktif);
console.log("");

// ARRAY DAN OBJECT INITIALIZER

console.log("ARRAY DAN OBJECT INITIALIZER");

// Array initializer
console.log("Array Initializer:");
let angka = [1, 2, 3, 4, 5];
console.log("let angka = [1, 2, 3, 4, 5] ->", angka);

let campuran = [10, "hello", true, null];
console.log("let campuran = [10, 'hello', true, null] ->", campuran);

// Array dengan expression
let hasil = [1+2, 3*4, 10/2];
console.log("let hasil = [1+2, 3*4, 10/2] ->", hasil);

// Array kosong
let kosong = [];
console.log("let kosong = [] ->", kosong);

// Array bertingkat (2D)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Array 2D (matrix):");
console.log(matrix);
console.log("matrix[1][2] ->", matrix[1][2]);   // Mengakses elemen baris 1 kolom 2

// Object initializer
console.log("\nObject Initializer:");
let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Teknik Informatika",
    aktif: true
};
console.log("let mahasiswa = {...} ->", mahasiswa);

// Object dengan computed properties
let key = "dinamis";
let objekDinamis = {
    [key]: "nilai dinamis",
    "property space": "bisa pakai spasi",
    123: "angka sebagai key"
};
console.log("Object dengan computed properties:", objekDinamis);

// Nested object
let perusahaan = {
    nama: "PT ABC",
    alamat: {
        jalan: "Jl. Sudirman",
        kota: "Jakarta",
        kodePos: "10110"
    },
    karyawan: ["Andi", "Budi", "Citra"]
};
console.log("Nested object:", perusahaan);
console.log("");

// ==========================================
// FUNCTION EXPRESSIONS
// ==========================================

console.log("=== FUNCTION EXPRESSIONS ===");

// Anonymous function expression
let square = function(x) {
    return x * x;
};
console.log("let square = function(x) { return x * x; }");
console.log("square(5) ->", square(5));

// Named function expression
let factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};
console.log("factorial(5) ->", factorial(5));

// Arrow function expressions (ES6)
let tambah = (a, b) => a + b;
console.log("let tambah = (a, b) => a + b");
console.log("tambah(3, 7) ->", tambah(3, 7));

let kuadrat = x => x * x;
console.log("let kuadrat = x => x * x");
console.log("kuadrat(4) ->", kuadrat(4));

// Immediately Invoked Function Expression (IIFE)
let hasilIIFE = (function(x, y) {
    return x + y;
})(10, 20);
console.log("IIFE result ->", hasilIIFE);
console.log("");

// ==========================================
// PROPERTY ACCESS EXPRESSIONS
// ==========================================

console.log("=== PROPERTY ACCESS EXPRESSIONS ===");

let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
        email: "john@email.com",
        phone: "08123456789"
    }
};

// Dot notation
console.log("Dot notation:");
console.log("user.firstName ->", user.firstName);
console.log("user.age ->", user.age);
console.log("user.contact.email ->", user.contact.email);

// Bracket notation
console.log("\nBracket notation:");
console.log("user['firstName'] ->", user['firstName']);
console.log("user['last' + 'Name'] ->", user['last' + 'Name']);

// Dynamic property access
let propertyName = "age";
console.log("user[propertyName] ->", user[propertyName]);

// Array property access
let fruits = ["apple", "banana", "orange"];
console.log("\nArray access:");
console.log("fruits[0] ->", fruits[0]);
console.log("fruits[fruits.length - 1] ->", fruits[fruits.length - 1]);

// Method access
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

console.log("\nMethod access:");
console.log("calculator.add(5, 3) ->", calculator.add(5, 3));
console.log("calculator['multiply'](4, 6) ->", calculator['multiply'](4, 6));
console.log("");

// ==========================================
// FUNCTION INVOCATION EXPRESSIONS
// ==========================================

console.log("=== FUNCTION INVOCATION EXPRESSIONS ===");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function invocation
console.log("greet('Alice') ->", greet('Alice'));

// Method invocation
let person = {
    name: "Bob",
    sayHello: function() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log("person.sayHello() ->", person.sayHello());

// Constructor invocation
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.start = function() {
        return `${this.brand} ${this.model} is starting`;
    };
}

let myCar = new Car("Toyota", "Avanza");
console.log("new Car('Toyota', 'Avanza') ->", myCar);
console.log("myCar.start() ->", myCar.start());

// Call dan Apply
function introduce(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
}

let speaker = { name: "Charlie" };
console.log("introduce.call(speaker, 'Hi', '!') ->", 
    introduce.call(speaker, 'Hi', '!'));
console.log("introduce.apply(speaker, ['Hey', '.']) ->", 
    introduce.apply(speaker, ['Hey', '.']));
console.log("");

// ==========================================
// COMPLEX EXPRESSIONS
// ==========================================

console.log("=== COMPLEX EXPRESSIONS ===");

// Kombinasi multiple expressions
let data = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];

// Expression kompleks dengan method chaining
let topScorer = data
    .filter(student => student.score > 80)
    .sort((a, b) => b.score - a.score)[0];

console.log("Top scorer:", topScorer);

// Expression dalam kondisi
let grade = topScorer.score >= 90 ? 'A' : 
           topScorer.score >= 80 ? 'B' : 
           topScorer.score >= 70 ? 'C' : 'D';

console.log(`Grade for ${topScorer.name}: ${grade}`);

// Expression sebagai argument function
console.log("Math.max(...data.map(s => s.score)) ->", 
    Math.max(...data.map(s => s.score)));

console.log("\n=== EXPRESSION EVALUATION ===");
console.log("Expression dievaluasi dari kiri ke kanan dengan mempertimbangkan operator precedence");
console.log("Contoh: 2 + 3 * 4 ->", 2 + 3 * 4, "(bukan 20, karena * memiliki precedence lebih tinggi)");
console.log("Dengan kurung: (2 + 3) * 4 ->", (2 + 3) * 4);