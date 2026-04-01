// ASSIGNMENT OPERATORS DALAM JAVASCRIPT

console.log("ASSIGNMENT OPERATORS DALAM JAVASCRIPT");
console.log("Assignment operators digunakan untuk memberikan nilai ke variabel");
console.log("Terdapat basic assignment (=) dan compound assignment (+=, -=, dll)\n");

// ==========================================
// BASIC ASSIGNMENT OPERATOR (=)
// ==========================================

console.log("=== BASIC ASSIGNMENT OPERATOR (=) ===");

// Simple assignment
let x = 10;
let y = 20;
let z = x + y;

console.log("let x = 10 ->", "x =", x);
console.log("let y = 20 ->", "y =", y);
console.log("let z = x + y ->", "z =", z);

// Assignment returns the assigned value
let a = b = c = 5; // Right to left: c = 5, b = c, a = b
console.log("let a = b = c = 5 ->", "a =", a, "b =", b, "c =", c);

// Assignment with expressions
let result = (x + y) * 2;
console.log("let result = (x + y) * 2 ->", "result =", result);

// Reassignment
x = 50;
console.log("x = 50 (reassignment) ->", "x =", x);
console.log("");

// ==========================================
// COMPOUND ASSIGNMENT OPERATORS
// ==========================================

console.log("=== COMPOUND ASSIGNMENT OPERATORS ===");

let num = 10;
console.log("Initial num:", num);

// Addition assignment (+=)
console.log("\nADDITION ASSIGNMENT (+=):");
console.log("num += 5 (equivalent to num = num + 5)");
num += 5;
console.log("Result:", num);

// Subtraction assignment (-=)
console.log("\nSUBTRACTION ASSIGNMENT (-=):");
console.log("num -= 3 (equivalent to num = num - 3)");
num -= 3;
console.log("Result:", num);

// Multiplication assignment (*=)
console.log("\nMULTIPLICATION ASSIGNMENT (*=):");
console.log("num *= 2 (equivalent to num = num * 2)");
num *= 2;
console.log("Result:", num);

// Division assignment (/=)
console.log("\nDIVISION ASSIGNMENT (/=):");
console.log("num /= 4 (equivalent to num = num / 4)");
num /= 4;
console.log("Result:", num);

// Modulus assignment (%=)
console.log("\nMODULUS ASSIGNMENT (%=):");
num = 17; // Reset for clearer example
console.log("Reset num to 17");
console.log("num %= 5 (equivalent to num = num % 5)");
num %= 5;
console.log("Result:", num);

// Exponentiation assignment (**=)
console.log("\nEXPONENTIATION ASSIGNMENT (**=):");
console.log("num **= 3 (equivalent to num = num ** 3)");
num **= 3;
console.log("Result:", num);
console.log("");

// ==========================================
// STRING ASSIGNMENT OPERATORS
// ==========================================

console.log("=== STRING ASSIGNMENT OPERATORS ===");

let text = "Hello";
console.log("Initial text:", text);

// String concatenation assignment (+=)
console.log("\nSTRING CONCATENATION (+=):");
console.log("text += ' World'");
text += " World";
console.log("Result:", text);

console.log("text += '!'");
text += "!";
console.log("Result:", text);

// Multiple concatenations
let greeting = "Hi";
greeting += " there";
greeting += ", ";
greeting += "how are you?";
console.log("Multiple concatenations:", greeting);

// Concatenation with numbers
let message = "The answer is: ";
message += 42;
console.log("String + number concatenation:", message);
console.log("");

// ==========================================
// ARRAY ASSIGNMENT PATTERNS
// ==========================================

console.log("=== ARRAY ASSIGNMENT PATTERNS ===");

// Array element assignment
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

numbers[0] = 10;
console.log("numbers[0] = 10 ->", numbers);

numbers[numbers.length] = 6; // Add to end
console.log("numbers[numbers.length] = 6 ->", numbers);

// Array element compound assignment
numbers[1] += 5;
console.log("numbers[1] += 5 ->", numbers);

numbers[2] *= 2;
console.log("numbers[2] *= 2 ->", numbers);

// Modify multiple elements
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        numbers[i] *= 2; // Double even indices
    }
}
console.log("Double elements at even indices:", numbers);
console.log("");

// ==========================================
// OBJECT PROPERTY ASSIGNMENT
// ==========================================

console.log("=== OBJECT PROPERTY ASSIGNMENT ===");

let person = {
    name: "John",
    age: 25,
    score: 80
};

console.log("Original person:", person);

// Direct property assignment
person.name = "Jane";
console.log("person.name = 'Jane' ->", person);

person.city = "Jakarta"; // Add new property
console.log("person.city = 'Jakarta' ->", person);

// Bracket notation assignment
person["country"] = "Indonesia";
console.log("person['country'] = 'Indonesia' ->", person);

// Compound assignment on properties
person.age += 5;
console.log("person.age += 5 ->", person);

person.score *= 1.1; // 10% bonus
console.log("person.score *= 1.1 ->", person);

// Dynamic property assignment
let propertyName = "salary";
person[propertyName] = 5000000;
console.log(`person[${propertyName}] = 5000000 ->`, person);
console.log("");

// ==========================================
// INCREMENT AND DECREMENT OPERATORS
// ==========================================

console.log("=== INCREMENT AND DECREMENT OPERATORS ===");

let counter = 5;
console.log("Initial counter:", counter);

// Pre-increment (++variable)
console.log("\nPRE-INCREMENT (++counter):");
console.log("Value returned:", ++counter); // Returns 6
console.log("Counter after:", counter);     // Also 6

// Post-increment (variable++)
counter = 5; // Reset
console.log("\nPOST-INCREMENT (counter++):");
console.log("Value returned:", counter++); // Returns 5
console.log("Counter after:", counter);     // Now 6

// Pre-decrement (--variable)
console.log("\nPRE-DECREMENT (--counter):");
console.log("Value returned:", --counter); // Returns 5
console.log("Counter after:", counter);     // Also 5

// Post-decrement (variable--)
console.log("\nPOST-DECREMENT (counter--):");
console.log("Value returned:", counter--); // Returns 5
console.log("Counter after:", counter);     // Now 4

// In expressions
let val1 = 10;
let val2 = 20;
let result1 = ++val1 + val2++; // (11) + (20), then val2 becomes 21
console.log("\n++val1 + val2++ result:", result1);
console.log("val1:", val1, "val2:", val2);

// Common pitfalls
let n = 5;
// Don't do this: n = n++ (undefined behavior)
// Instead use: n++ or n += 1
console.log("");

// ==========================================
// DESTRUCTURING ASSIGNMENT
// ==========================================

console.log("=== DESTRUCTURING ASSIGNMENT ===");

// Array destructuring
let fruits = ["apple", "banana", "orange", "grape"];
let [first, second, ...rest] = fruits;

console.log("Array destructuring:");
console.log("let [first, second, ...rest] = fruits");
console.log("first:", first);
console.log("second:", second);
console.log("rest:", rest);

// Array destructuring with default values
let [a1, b1, c1, d1 = "default"] = [1, 2, 3];
console.log("\nWith default values:");
console.log("a1:", a1, "b1:", b1, "c1:", c1, "d1:", d1);

// Swapping variables
let x1 = 10, y1 = 20;
console.log("\nBefore swap: x1 =", x1, "y1 =", y1);
[x1, y1] = [y1, x1];
console.log("After swap: x1 =", x1, "y1 =", y1);

// Object destructuring
let student = {
    name: "Alice",
    age: 22,
    grade: "A",
    university: "MIT"
};

let { name, age, grade } = student;
console.log("\nObject destructuring:");
console.log("name:", name, "age:", age, "grade:", grade);

// Object destructuring with aliases
let { name: studentName, university: school } = student;
console.log("studentName:", studentName, "school:", school);

// Object destructuring with defaults
let { hometown = "Unknown", major = "Computer Science" } = student;
console.log("hometown:", hometown, "major:", major);
console.log("");

// ==========================================
// ASSIGNMENT IN CONDITIONS
// ==========================================

console.log("=== ASSIGNMENT IN CONDITIONS ===");

// Assignment in while loop
let input = "";
let attempts = 0;
const maxAttempts = 3;

console.log("Simulating user input validation:");
while ((attempts++ < maxAttempts) && (input = `attempt_${attempts}`) !== "valid_input") {
    console.log(`Attempt ${attempts}: input = "${input}"`);
}

// Assignment in if statement
let data = null;
if (data = getData()) {
    console.log("Data retrieved:", data);
} else {
    console.log("No data available");
}

function getData() {
    // Simulate API call
    return Math.random() > 0.5 ? { id: 1, name: "Sample" } : null;
}

// Ternary assignment
let status = Math.random() > 0.5 ? (console.log("Success"), "completed") : "failed";
console.log("Status:", status);
console.log("");

// ==========================================
// PRACTICAL EXAMPLES
// ==========================================

console.log("=== PRACTICAL EXAMPLES ===");

// 1. Counter system
class Counter {
    constructor(initial = 0) {
        this.value = initial;
    }
    
    increment(step = 1) {
        return this.value += step;
    }
    
    decrement(step = 1) {
        return this.value -= step;
    }
    
    multiply(factor) {
        return this.value *= factor;
    }
    
    reset() {
        return this.value = 0;
    }
}

console.log("Counter system:");
let myCounter = new Counter(10);
console.log("Initial:", myCounter.value);
console.log("After increment(5):", myCounter.increment(5));
console.log("After multiply(2):", myCounter.multiply(2));
console.log("After decrement(10):", myCounter.decrement(10));

// 2. Shopping cart calculations
let cart = {
    items: [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Mouse", price: 25, quantity: 2 },
        { name: "Keyboard", price: 75, quantity: 1 }
    ],
    tax: 0,
    discount: 0,
    total: 0
};

function calculateCart(cart) {
    // Reset total
    cart.total = 0;
    
    // Calculate subtotal
    cart.items.forEach(item => {
        cart.total += item.price * item.quantity;
    });
    
    // Apply discount
    cart.total -= cart.discount;
    
    // Add tax
    cart.total += cart.tax;
    
    return cart.total;
}

console.log("\nShopping cart calculation:");
cart.discount = 50;  // $50 discount
cart.tax = cart.total * 0.1; // 10% tax (on original total)
console.log("Cart total:", calculateCart(cart));

// 3. Score tracking system
let gameScore = {
    player1: 0,
    player2: 0,
    round: 1
};

function addScore(player, points) {
    if (player === 1) {
        gameScore.player1 += points;
    } else {
        gameScore.player2 += points;
    }
    console.log(`Round ${gameScore.round}: Player ${player} +${points} points`);
    console.log(`Score - Player 1: ${gameScore.player1}, Player 2: ${gameScore.player2}`);
    gameScore.round++;
}

console.log("\nGame scoring:");
addScore(1, 10);
addScore(2, 15);
addScore(1, 5);

// 4. Form data accumulation
let formData = {};

function updateFormField(field, value, append = false) {
    if (append && formData[field]) {
        formData[field] += `, ${value}`;
    } else {
        formData[field] = value;
    }
}

console.log("\nForm data management:");
updateFormField('name', 'John Doe');
updateFormField('email', 'john@example.com');
updateFormField('skills', 'JavaScript');
updateFormField('skills', 'Python', true); // Append
updateFormField('skills', 'React', true);   // Append
console.log("Form data:", formData);

// 5. Configuration builder
let config = {
    database: {},
    server: {},
    security: {}
};

function setConfig(section, key, value) {
    config[section][key] = value;
    return config;
}

function mergeConfig(section, newConfig) {
    Object.assign(config[section], newConfig);
    return config[section];
}

console.log("\nConfiguration builder:");
setConfig('database', 'host', 'localhost');
setConfig('database', 'port', 5432);
mergeConfig('server', { port: 3000, debug: true });
console.log("Final config:", config);

// 6. Batch operations
let data_array = [1, 2, 3, 4, 5];

function batchUpdate(array, operation) {
    for (let i = 0; i < array.length; i++) {
        switch (operation) {
            case 'double':
                array[i] *= 2;
                break;
            case 'increment':
                array[i] += 1;
                break;
            case 'square':
                array[i] **= 2;
                break;
        }
    }
    return array;
}

console.log("\nBatch operations:");
console.log("Original:", [...data_array]);
console.log("After double:", batchUpdate([...data_array], 'double'));
console.log("After increment:", batchUpdate([...data_array], 'increment'));
console.log("After square:", batchUpdate([...data_array], 'square'));

console.log("\n=== BEST PRACTICES ===");
console.log("1. Gunakan const untuk values yang tidak berubah");
console.log("2. Gunakan compound assignment untuk readability");
console.log("3. Hati-hati dengan pre/post increment dalam expressions");
console.log("4. Manfaatkan destructuring untuk clean code");
console.log("5. Avoid assignment dalam conditions kecuali diperlukan");
console.log("6. Gunakan meaningful variable names");