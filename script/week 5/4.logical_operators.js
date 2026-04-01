// LOGICAL OPERATORS DALAM JAVASCRIPT

console.log("LOGICAL OPERATORS DALAM JAVASCRIPT");
console.log("Logical operators digunakan untuk menggabungkan atau memanipulasi nilai boolean");
console.log("Operator logika: && (AND), || (OR), ! (NOT)\n");

// BASIC LOGICAL OPERATORS

console.log("BASIC LOGICAL OPERATORS");

let benar = true;
let salah = false;

console.log("Nilai benar:", benar);
console.log("Nilai salah:", salah);
console.log("");

// Logical AND (&&)
console.log("LOGICAL AND (&&):");
console.log("true && true =", true && true);         // true
console.log("true && false =", true && false);       // false
console.log("false && true =", false && true);       // false
console.log("false && false =", false && false);     // false

console.log("benar && salah =", benar && salah);     // false
console.log("benar && benar =", benar && benar);     // true
console.log("");

// Logical OR (||)
console.log("LOGICAL OR (||):");
console.log("true || true =", true || true);         // true
console.log("true || false =", true || false);       // true
console.log("false || true =", false || true);       // true
console.log("false || false =", false || false);     // false

console.log("benar || salah =", benar || salah);     // true
console.log("salah || salah =", salah || salah);     // false
console.log("");

// Logical NOT (!)
console.log("LOGICAL NOT (!):");
console.log("!true =", !true);                       // false
console.log("!false =", !false);                     // true
console.log("!benar =", !benar);                     // false
console.log("!salah =", !salah);                     // true

// Double negation
console.log("\nDouble negation (!! - converts to boolean):");
console.log("!!true =", !!true);                     // true
console.log("!!false =", !!false);                   // false
console.log("!!1 =", !!1);                          // true
console.log("!!0 =", !!0);                          // false
console.log("!!'hello' =", !!'hello');              // true
console.log("!!'' =", !!'');                        // false
console.log("");

// PRACTICAL BOOLEAN LOGIC

console.log("PRACTICAL BOOLEAN LOGIC");

let umur = 25;
let punyaSIM = true;
let punyaMobil = false;

console.log("umur:", umur);
console.log("punyaSIM:", punyaSIM);
console.log("punyaMobil:", punyaMobil);
console.log("");

// Complex conditions
console.log("Complex conditions:");
let bisaMenyetir = umur >= 17 && punyaSIM;
console.log("Bisa menyetir (umur >= 17 && punyaSIM):", bisaMenyetir);

let bisaIkutRoadTrip = bisaMenyetir || punyaMobil;
console.log("Bisa ikut road trip:", bisaIkutRoadTrip);

let belumBolehMinum = umur < 21;
console.log("Belum boleh minum alkohol:", belumBolehMinum);

let dewasa = umur >= 18 && umur < 60;
console.log("Dewasa (18-59 tahun):", dewasa);
console.log("");

// TRUTHY DAN FALSY VALUES

console.log("TRUTHY DAN FALSY VALUES");

// Falsy values
let falsyValues = [false, 0, -0, 0n, '', null, undefined, NaN];
console.log("Falsy values (evaluates to false):");
falsyValues.forEach(value => {
    console.log(`${JSON.stringify(value)}: ${!!value}`);
});

console.log("");

// Truthy values
let truthyValues = [true, 1, -1, 3.14, 'hello', ' ', [], {}, function(){}];
console.log("Truthy values (evaluates to true):");
truthyValues.forEach(value => {
    let displayValue = typeof value === 'function' ? 'function(){}' : JSON.stringify(value);
    console.log(`${displayValue}: ${!!value}`);
});
console.log("");

// SHORT-CIRCUIT EVALUATION

console.log("SHORT-CIRCUIT EVALUATION");

console.log("AND (&&) short-circuit:");
console.log("false && console.log('This won't execute') ->", false && console.log('This won\'t execute'));
console.log("true && 'second value' ->", true && 'second value');
console.log("0 && 'not executed' ->", 0 && 'not executed');
console.log("5 && 'executed' ->", 5 && 'executed');

console.log("\nOR (||) short-circuit:");
console.log("true || 'not evaluated' ->", true || 'not evaluated');
console.log("false || 'second value' ->", false || 'second value');
console.log("null || 'default value' ->", null || 'default value');
console.log("'existing' || 'default' ->", 'existing' || 'default');

// Practical short-circuit examples
console.log("\nPractical short-circuit examples:");

// Default values
let username = '';
let displayName = username || 'Guest';
console.log("displayName (empty username):", displayName);

username = 'John';
displayName = username || 'Guest';
console.log("displayName (with username):", displayName);

// Conditional execution
let isLoggedIn = true;
isLoggedIn && console.log("User is logged in!");

let errorMessage = null;
errorMessage && console.log("Error:", errorMessage);

errorMessage = "Something went wrong";
errorMessage && console.log("Error:", errorMessage);
console.log("");

// LOGICAL OPERATORS WITH NON-BOOLEANS

console.log("LOGICAL OPERATORS WITH NON-BOOLEANS");

console.log("AND (&&) returns first falsy or last truthy:");
console.log("'hello' && 'world' ->", 'hello' && 'world');           // 'world'
console.log("'hello' && 0 && 'world' ->", 'hello' && 0 && 'world'); // 0
console.log("5 && 10 && 15 ->", 5 && 10 && 15);                   // 15
console.log("1 && 2 && 0 && 4 ->", 1 && 2 && 0 && 4);             // 0

console.log("\nOR (||) returns first truthy or last falsy:");
console.log("'' || 'default' ->", '' || 'default');                 // 'default'
console.log("0 || null || 'found' ->", 0 || null || 'found');       // 'found'
console.log("false || 0 || null ->", false || 0 || null);           // null (last falsy)
console.log("'first' || 'second' ->", 'first' || 'second');         // 'first'

console.log("\nChaining logical operators:");
let result1 = 'a' && 'b' && 'c';
console.log("'a' && 'b' && 'c' ->", result1);                      // 'c'

let result2 = false || 0 || 'found' || 'not reached';
console.log("false || 0 || 'found' || 'not reached' ->", result2);  // 'found'

let result3 = '' && 'not reached' || 'default';
console.log("'' && 'not reached' || 'default' ->", result3);        // 'default'
console.log("");

// OPERATOR PRECEDENCE

console.log("OPERATOR PRECEDENCE");

console.log("Precedence: ! > && > ||");
console.log("!false && true || false =", !false && true || false);   // true
console.log("false || true && false =", false || true && false);     // false
console.log("!(false || true) && false =", !(false || true) && false); // false

console.log("\nWithout parentheses vs with parentheses:");
console.log("true || false && false =", true || false && false);     // true
console.log("(true || false) && false =", (true || false) && false); // false

console.log("!true || false && true =", !true || false && true);     // false
console.log("!(true || false) && true =", !(true || false) && true); // false
console.log("");

// PRACTICAL APPLICATIONS

console.log("PRACTICAL APPLICATIONS");

// 1. Form validation
function validateForm(name, email, age) {
    let isNameValid = name && name.length >= 2;
    let isEmailValid = email && email.includes('@');
    let isAgeValid = age && age >= 18 && age <= 100;
    
    console.log("Form validation:");
    console.log("Name valid:", isNameValid);
    console.log("Email valid:", isEmailValid);
    console.log("Age valid:", isAgeValid);
    
    let isFormValid = isNameValid && isEmailValid && isAgeValid;
    console.log("Form is valid:", isFormValid);
    
    return isFormValid;
}

console.log("\nTesting form validation:");
validateForm("John", "john@email.com", 25);
console.log("");
validateForm("", "invalid-email", 15);

// 2. Access control
function checkAccess(user) {
    let isAuthenticated = user && user.loggedIn;
    let isAdmin = user && user.role === 'admin';
    let isOwner = user && user.isOwner;
    
    let canRead = isAuthenticated;
    let canWrite = isAuthenticated && (isAdmin || isOwner);
    let canDelete = isAuthenticated && isAdmin;
    
    return { canRead, canWrite, canDelete };
}

console.log("Access control examples:");
let adminUser = { loggedIn: true, role: 'admin', isOwner: false };
let ownerUser = { loggedIn: true, role: 'user', isOwner: true };
let guestUser = { loggedIn: false, role: 'guest', isOwner: false };

console.log("Admin access:", checkAccess(adminUser));
console.log("Owner access:", checkAccess(ownerUser));
console.log("Guest access:", checkAccess(guestUser));

// 3. Feature flags
function getFeatures(user) {
    let isPremium = user && user.subscription === 'premium';
    let isBeta = user && user.betaTester;
    let isStaff = user && user.role === 'staff';
    
    return {
        basicFeature: true,
        advancedFeature: isPremium || isStaff,
        betaFeature: isBeta && (isPremium || isStaff),
        experimentalFeature: isStaff
    };
}

console.log("\nFeature flags:");
let premiumUser = { subscription: 'premium', betaTester: true, role: 'user' };
let staffUser = { subscription: 'free', betaTester: false, role: 'staff' };
let basicUser = { subscription: 'free', betaTester: false, role: 'user' };

console.log("Premium user features:", getFeatures(premiumUser));
console.log("Staff user features:", getFeatures(staffUser));
console.log("Basic user features:", getFeatures(basicUser));

// 4. Default value assignment
console.log("\nDefault value patterns:");

function createUser(options = {}) {
    return {
        name: options.name || 'Anonymous',
        age: options.age || 0,
        country: options.country || 'Unknown',
        isActive: options.isActive !== undefined ? options.isActive : true
    };
}

console.log("User with some options:", createUser({ name: 'Alice', age: 30 }));
console.log("User with no options:", createUser());
console.log("User with false isActive:", createUser({ name: 'Bob', isActive: false }));

// 5. Conditional method calling
console.log("\nConditional method calling:");

let api = {
    connected: true,
    sendData: function(data) {
        return `Sending: ${data}`;
    }
};

// Safe method calling with short-circuit
let response = api.connected && api.sendData && api.sendData('Hello World');
console.log("API response:", response);

api.connected = false;
let response2 = api.connected && api.sendData && api.sendData('Hello Again');
console.log("API response (disconnected):", response2);

// 6. Multiple condition checking
function categorizeTemperature(temp) {
    let isFreezing = temp <= 0;
    let isCold = temp > 0 && temp <= 15;
    let isWarm = temp > 15 && temp <= 25;
    let isHot = temp > 25 && temp <= 35;
    let isExtreme = temp > 35 || temp < -10;
    
    if (isExtreme) return 'Extreme';
    if (isHot) return 'Hot';
    if (isWarm) return 'Warm';
    if (isCold) return 'Cold';
    if (isFreezing) return 'Freezing';
    return 'Unknown';
}

console.log("\nTemperature categorization:");
[-15, -5, 5, 20, 30, 40].forEach(temp => {
    console.log(`${temp}°C: ${categorizeTemperature(temp)}`);
});

console.log("\nBEST PRACTICES");
console.log("1. Gunakan && untuk conditional execution");
console.log("2. Gunakan || untuk default values");
console.log("3. Gunakan !! untuk explicit boolean conversion");
console.log("4. Perhatikan operator precedence");
console.log("5. Manfaatkan short-circuit evaluation untuk performance");
console.log("6. Hati-hati dengan falsy values (0, '', null, undefined)");