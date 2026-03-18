// ==========================================
// OTHER OPERATORS DALAM JAVASCRIPT
// ==========================================

console.log("=== OTHER OPERATORS DALAM JAVASCRIPT ===\n");
console.log("JavaScript memiliki berbagai operator khusus:");
console.log("typeof, delete, ternary (?:), instanceof, in, dan lainnya\n");

// ==========================================
// TYPEOF OPERATOR
// ==========================================

console.log("=== TYPEOF OPERATOR ===");
console.log("typeof operator mengembalikan string yang menunjukkan tipe data");

// Basic types
console.log("Basic data types:");
console.log("typeof 42 =", typeof 42);                        // "number"
console.log("typeof 'hello' =", typeof 'hello');              // "string"
console.log("typeof true =", typeof true);                   // "boolean"
console.log("typeof undefined =", typeof undefined);         // "undefined"
console.log("typeof null =", typeof null);                   // "object" (known bug)

// Functions and objects
console.log("\nFunctions and objects:");
console.log("typeof function(){} =", typeof function(){});    // "function"
console.log("typeof {} =", typeof {});                       // "object"
console.log("typeof [] =", typeof []);                       // "object"
console.log("typeof new Date() =", typeof new Date());       // "object"
console.log("typeof /regex/ =", typeof /regex/);             // "object"

// Special numbers
console.log("\nSpecial numbers:");
console.log("typeof NaN =", typeof NaN);                     // "number"
console.log("typeof Infinity =", typeof Infinity);           // "number"

// Variables
let myVar = "test";
let myFunc = function() { return "hello"; };
console.log("\nVariables:");
console.log("typeof myVar =", typeof myVar);                 // "string"
console.log("typeof myFunc =", typeof myFunc);               // "function"

// Undefined variables (won't cause error)
console.log("typeof nonExistentVar =", typeof nonExistentVar); // "undefined"

// Practical usage
function getTypeInfo(value) {
    let type = typeof value;
    let isArray = Array.isArray(value);
    let isNull = value === null;
    
    return {
        type: isNull ? 'null' : isArray ? 'array' : type,
        value: value,
        description: getTypeDescription(type, value)
    };
}

function getTypeDescription(type, value) {
    if (value === null) return "Null value";
    if (Array.isArray(value)) return "Array object";
    if (type === "object") return "Object (not array or null)";
    return `${type.charAt(0).toUpperCase()}${type.slice(1)} primitive`;
}

console.log("\nType analysis:");
let testValues = [42, "hello", true, null, undefined, [], {}, function(){}];
testValues.forEach(val => {
    let info = getTypeInfo(val);
    console.log(`${JSON.stringify(val)} -> ${info.type} (${info.description})`);
});
console.log("");

// ==========================================
// DELETE OPERATOR
// ==========================================

console.log("=== DELETE OPERATOR ===");
console.log("delete operator menghapus property dari object");

// Object property deletion
let person = {
    name: "John",
    age: 30,
    city: "Jakarta",
    country: "Indonesia"
};

console.log("Original person:", person);

// Delete property
console.log("\nDeleting properties:");
console.log("delete person.age =", delete person.age);       // true
console.log("Person after deleting age:", person);

console.log("delete person['city'] =", delete person['city']); // true
console.log("Person after deleting city:", person);

// Try to delete non-existent property
console.log("delete person.salary =", delete person.salary); // true (no error)
console.log("Person unchanged:", person);

// Array element deletion (creates holes)
let fruits = ["apple", "banana", "orange", "grape"];
console.log("\nArray deletion:");
console.log("Original fruits:", fruits);
console.log("fruits.length =", fruits.length);

delete fruits[1]; // Creates hole
console.log("After delete fruits[1]:", fruits);
console.log("fruits.length =", fruits.length);              // Length unchanged
console.log("fruits[1] =", fruits[1]);                      // undefined

// Better way to remove array element
fruits.splice(2, 1); // Remove orange
console.log("After splice(2,1):", fruits);
console.log("fruits.length =", fruits.length);

// What can and cannot be deleted
console.log("\nDelete limitations:");

// Global variables (var) cannot be deleted in strict mode
var globalVar = "cannot delete this";
console.log("delete globalVar = false (Cannot delete identifiers in strict mode)");
console.log("globalVar still exists:", globalVar);

// Let/const variables cannot be deleted in strict mode  
let localVar = "cannot delete this either";
console.log("delete localVar = false (Cannot delete identifiers in strict mode)");
console.log("localVar still exists:", localVar);

// Built-in properties cannot be deleted
console.log("delete Math.PI =", delete Math.PI);            // false
console.log("Math.PI =", Math.PI);                          // Still exists

// Function properties can be deleted
function testFunc() {
    return "test";
}
testFunc.customProperty = "deletable";
console.log("testFunc.customProperty =", testFunc.customProperty);
delete testFunc.customProperty;
console.log("After delete:", testFunc.customProperty);       // undefined
console.log("");

// ==========================================
// TERNARY OPERATOR (?:)
// ==========================================

console.log("=== TERNARY OPERATOR (? :) ===");
console.log("Ternary operator adalah shorthand untuk if-else statement");

// Basic syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(`Age ${age} -> Status: ${status}`);

// Multiple examples
let score = 85;
let grade = score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
console.log(`Score ${score} -> Grade: ${grade}`);

// With function calls
function isWeekend(day) {
    return day === 'Saturday' || day === 'Sunday' ? 'Weekend' : 'Weekday';
}

console.log("Monday ->", isWeekend('Monday'));
console.log("Saturday ->", isWeekend('Saturday'));

// Nested ternary (use with caution)
let temperature = 25;
let weather = temperature > 30 ? 'Hot' :
              temperature > 20 ? 'Warm' :
              temperature > 10 ? 'Cool' : 'Cold';
console.log(`${temperature}°C -> ${weather}`);

// Ternary in calculations
let price = 100;
let discount = price > 50 ? price * 0.1 : 0;
let finalPrice = price - discount;
console.log(`Price: $${price}, Discount: $${discount}, Final: $${finalPrice}`);

// Conditional assignment vs ternary
let userRole = 'admin';

// Traditional if-else
let permissions1;
if (userRole === 'admin') {
    permissions1 = 'full';
} else {
    permissions1 = 'limited';
}

// Ternary operator
let permissions2 = userRole === 'admin' ? 'full' : 'limited';

console.log("Traditional:", permissions1);
console.log("Ternary:", permissions2);

// Complex conditions
let user = { age: 25, isAdmin: true, isActive: true };
let accessLevel = user.isAdmin && user.isActive ? 'full' :
                 user.isActive ? 'user' : 'none';
console.log("User access level:", accessLevel);
console.log("");

// ==========================================
// INSTANCEOF OPERATOR
// ==========================================

console.log("=== INSTANCEOF OPERATOR ===");
console.log("instanceof checks if object is instance of specific constructor");

// Built-in types
let date = new Date();
let arr = [1, 2, 3];
let obj = { name: "test" };
let str = new String("hello");
let num = new Number(42);

console.log("date instanceof Date =", date instanceof Date);           // true
console.log("arr instanceof Array =", arr instanceof Array);           // true
console.log("arr instanceof Object =", arr instanceof Object);         // true (inheritance)
console.log("obj instanceof Object =", obj instanceof Object);         // true
console.log("str instanceof String =", str instanceof String);         // true
console.log("'hello' instanceof String =", 'hello' instanceof String); // false (primitive)

// Custom constructors
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

function ElectricCar(brand, model, battery) {
    Car.call(this, brand, model);
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

let myCar = new Car("Toyota", "Camry");
let myElectricCar = new ElectricCar("Tesla", "Model 3", "75kWh");

console.log("\nCustom constructors:");
console.log("myCar instanceof Car =", myCar instanceof Car);                     // true
console.log("myElectricCar instanceof ElectricCar =", myElectricCar instanceof ElectricCar); // true
console.log("myElectricCar instanceof Car =", myElectricCar instanceof Car);     // true (inheritance)
console.log("myCar instanceof ElectricCar =", myCar instanceof ElectricCar);     // false

// Type checking function
function getObjectType(obj) {
    if (obj instanceof Date) return 'Date';
    if (obj instanceof Array) return 'Array';
    if (obj instanceof RegExp) return 'RegExp';
    if (obj instanceof Function) return 'Function';
    if (obj instanceof Object) return 'Object';
    return typeof obj;
}

console.log("\nType detection:");
let testObjects = [new Date(), [], /regex/, function(){}, {}, "string", 42];
testObjects.forEach(item => {
    console.log(`${String(item).slice(0, 20)} -> ${getObjectType(item)}`);
});
console.log("");

// ==========================================
// IN OPERATOR
// ==========================================

console.log("=== IN OPERATOR ===");
console.log("in operator checks if property exists in object");

let student = {
    name: "Alice",
    age: 22,
    grades: [85, 90, 88]
};

console.log("Property existence:");
console.log("'name' in student =", 'name' in student);           // true
console.log("'age' in student =", 'age' in student);             // true
console.log("'salary' in student =", 'salary' in student);       // false

// Inherited properties
console.log("'toString' in student =", 'toString' in student);   // true (from Object.prototype)  
console.log("student.hasOwnProperty('toString') =", student.hasOwnProperty('toString')); // false

// Array indices
let colors = ["red", "green", "blue"];
console.log("\nArray indices:");
console.log("0 in colors =", 0 in colors);                       // true
console.log("2 in colors =", 2 in colors);                       // true
console.log("5 in colors =", 5 in colors);                       // false
console.log("'length' in colors =", 'length' in colors);         // true

// Safe property access
function safeGetProperty(obj, prop) {
    return prop in obj ? obj[prop] : undefined;
}

console.log("\nSafe property access:");
console.log("safeGetProperty(student, 'name') =", safeGetProperty(student, 'name'));
console.log("safeGetProperty(student, 'salary') =", safeGetProperty(student, 'salary'));
console.log("");

// ==========================================
// COMMA OPERATOR
// ==========================================

console.log("=== COMMA OPERATOR ===");
console.log("Comma operator evaluates expressions left to right, returns last value");

// Basic usage
let result = (1 + 2, 3 + 4, 5 + 6);
console.log("(1 + 2, 3 + 4, 5 + 6) =", result);               // 11 (last expression)

// In for loop
console.log("\nFor loop with comma operator:");
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// Function with side effects
function sideEffect(message) {
    console.log("Side effect:", message);
    return message;
}

let commaResult = (sideEffect("first"), sideEffect("second"), 42);
console.log("Final comma result:", commaResult);

// Practical usage in assignments
let a1, b1, c1;
(a1 = 1), (b1 = 2), (c1 = 3);
console.log("Multiple assignments:", { a1, b1, c1 });
console.log("");

// ==========================================
// VOID OPERATOR
// ==========================================

console.log("=== VOID OPERATOR ===");
console.log("void operator evaluates expression and returns undefined");

let voidResult = void 0;          // Always returns undefined
console.log("void 0 =", voidResult);

let voidExpression = void (5 + 3);
console.log("void (5 + 3) =", voidExpression);

// Practical use: preventing navigation
console.log("void is often used in: javascript:void(0) for links");

// Alternative to undefined (more reliable)
function getValue() {
    return void 0; // Guaranteed undefined
}
console.log("getValue() =", getValue());
console.log("");

// ==========================================
// SPREAD OPERATOR (...)
// ==========================================

console.log("=== SPREAD OPERATOR (...) ===");
console.log("Spread operator expands iterables into individual elements");

// Array spreading
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("[...arr1, ...arr2] =", combined);

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}
let numbers = [10, 20, 30];
console.log("sum(...numbers) =", sum(...numbers));

// Object spreading
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObj = { ...obj1, ...obj2, e: 5 };
console.log("Object spread:", mergedObj);

// Copying arrays/objects
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
copiedArray.push(4);
console.log("Original:", originalArray, "Copy:", copiedArray);
console.log("");

// ==========================================
// NULLISH COALESCING (??) - ES2020
// ==========================================

console.log("=== NULLISH COALESCING (??) ===");
console.log("Returns right operand when left is null or undefined");

let value1 = null ?? "default";
let value2 = undefined ?? "default";  
let value3 = "" ?? "default";         // Empty string is not nullish
let value4 = 0 ?? "default";          // Zero is not nullish
let value5 = false ?? "default";      // False is not nullish

console.log("null ?? 'default' =", value1);
console.log("undefined ?? 'default' =", value2);
console.log("'' ?? 'default' =", value3);
console.log("0 ?? 'default' =", value4);
console.log("false ?? 'default' =", value5);

// vs OR operator
console.log("\nComparison with ||:");
console.log("0 || 'default' =", 0 || 'default');             // "default"
console.log("0 ?? 'default' =", 0 ?? 'default');             // 0

// Practical usage
function getUserName(user) {
    return user?.name ?? 'Anonymous';
}

console.log("getUserName({name: 'John'}) =", getUserName({name: 'John'}));
console.log("getUserName({}) =", getUserName({}));
console.log("getUserName(null) =", getUserName(null));
console.log("");

// ==========================================
// OPTIONAL CHAINING (?.) - ES2020
// ==========================================

console.log("=== OPTIONAL CHAINING (?.) ===");
console.log("Safely access nested properties without errors");

let userData = {
    name: "John",
    address: {
        street: "Main St",
        city: "New York"
    },
    getPhone: function() {
        return "123-456-7890";
    }
};

// Safe property access
console.log("userData.address?.city =", userData.address?.city);
console.log("userData.work?.company =", userData.work?.company);     // undefined, no error

// Safe method calling
console.log("userData.getPhone?.() =", userData.getPhone?.());
console.log("userData.getEmail?.() =", userData.getEmail?.());       // undefined, no error

// Array access
let users = [
    { name: "Alice" },
    null,
    { name: "Bob" }
];

console.log("users[0]?.name =", users[0]?.name);              // "Alice"
console.log("users[1]?.name =", users[1]?.name);              // undefined
console.log("users[5]?.name =", users[5]?.name);              // undefined
console.log("");

// ==========================================
// PRACTICAL COMBINATIONS
// ==========================================

console.log("=== PRACTICAL COMBINATIONS ===");

// Form validation with multiple operators
function validateAndProcess(userData) {
    // Use optional chaining and nullish coalescing
    let name = userData?.name ?? 'Unknown';
    let email = userData?.contact?.email ?? 'No email';
    let age = userData?.age ?? 0;
    
    // Use ternary operator
    let status = age >= 18 ? 'Adult' : 'Minor';
    
    // Use typeof for validation
    let isValidAge = typeof age === 'number' && age > 0;
    
    return {
        name,
        email,
        age,
        status,
        isValid: isValidAge && name !== 'Unknown'
    };
}

console.log("Complete validation:");
console.log("Valid user:", validateAndProcess({
    name: "Alice",
    age: 25,
    contact: { email: "alice@example.com" }
}));

console.log("Incomplete user:", validateAndProcess({
    name: "Bob"
}));

console.log("Null user:", validateAndProcess(null));

console.log("\n=== BEST PRACTICES ===");
console.log("1. typeof untuk type checking yang aman");
console.log("2. delete hanya untuk object properties, bukan array elements");
console.log("3. Ternary operator untuk simple conditions");
console.log("4. instanceof untuk object type checking");
console.log("5. Optional chaining (?.) untuk safe property access");
console.log("6. Nullish coalescing (??) untuk default values");