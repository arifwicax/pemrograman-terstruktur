// ERROR HANDLING DALAM JAVASCRIPT

console.log("ERROR HANDLING DALAM JAVASCRIPT");
console.log("Error handling digunakan untuk menangani kesalahan dalam program.");
console.log("Menggunakan: try, catch, finally, dan throw\n");

// 1. TRY-CATCH BASIC

console.log("1. TRY-CATCH BASIC");
console.log("Try-catch mencegah program crash saat terjadi error\n");

// Contoh basic try-catch
console.log("Contoh 1: Parsing JSON yang salah");
try {
    let invalidJSON = "{ nama: 'John', umur: 25 }";
    console.log("Mencoba parse JSON:", invalidJSON);
    let data = JSON.parse(invalidJSON);
    console.log("Data berhasil diparsing:", data);
} catch (error) {
    console.log("Terjadi error!");
    console.log("Error message:", error.message);
    console.log("Error name:", error.name);
}

// Contoh dengan valid JSON
console.log("\nContoh 2: Parsing JSON yang benar");
try {
    let validJSON = '{ "nama": "John", "umur": 25 }';
    console.log("Mencoba parse JSON:", validJSON);
    let data = JSON.parse(validJSON);
    console.log("Data berhasil diparsing:", data);
} catch (error) {
    console.log("Terjadi error:", error.message);
}

// Accessing undefined property
console.log("\nContoh 3: Mengakses property undefined");
try {
    let user = null;
    console.log("Mencoba akses user.name:");
    console.log(user.name); // Akan menyebabkan error
} catch (error) {
    console.log("Error saat mengakses property:", error.message);
    console.log("Type error:", error.name);
}

// 2. FINALLY BLOCK

console.log("\n2. FINALLY BLOCK");
console.log("Finally selalu dijalankan, baik ada error atau tidak\n");

// Finally dengan error
console.log("Contoh finally dengan error:");
try {
    console.log("Memulai proses...");
    throw new Error("Something went wrong!");
    console.log("Ini tidak akan dijalankan");
} catch (error) {
    console.log("Caught error:", error.message);
} finally {
    console.log("Finally block - cleanup process");
    console.log("Proses selesai\n");
}

// Finally tanpa error
console.log("Contoh finally tanpa error:");
try {
    console.log("Memulai proses berhasil...");
    let result = 2 + 2;
    console.log("Hasil:", result);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finally block - selalu dijalankan");
    console.log("Cleanup selesai\n");
}

// ==========================================
// 3. THROW STATEMENT
// ==========================================

console.log("3. THROW STATEMENT");
console.log("Throw digunakan untuk membuat custom error\n");

// Function dengan custom error
function divide(a, b) {
    if (b === 0) {
        throw new Error("Tidak bisa membagi dengan nol!");
    }
    return a / b;
}

console.log("Function divide dengan error handling:");

// Test dengan nilai normal
try {
    let result = divide(10, 2);
    console.log("10 / 2 =", result);
} catch (error) {
    console.log("Error:", error.message);
}

// Test dengan pembagian nol
try {
    let result = divide(10, 0);
    console.log("10 / 0 =", result);
} catch (error) {
    console.log("Error:", error.message);
}

// Custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (typeof age !== 'number') {
        throw new ValidationError("Umur harus berupa angka");
    }
    if (age < 0) {
        throw new ValidationError("Umur tidak boleh negatif");
    }
    if (age > 150) {
        throw new ValidationError("Umur tidak realistis");
    }
    return true;
}

console.log("\nFunction validateAge dengan custom error:");
let ageTests = [25, -5, "twenty", 200];

for (let age of ageTests) {
    try {
        validateAge(age);
        console.log(`Umur ${age}: Valid`);
    } catch (error) {
        console.log(`Umur ${age}: ${error.name} - ${error.message}`);
    }
}

// ==========================================
// 4. MULTIPLE CATCH (Error Types)
// ==========================================

console.log("\n4. HANDLING DIFFERENT ERROR TYPES");

function processUserData(userData) {
    try {
        // Validasi input
        if (!userData) {
            throw new ValidationError("Data user tidak boleh kosong");
        }
        
        // Parse jika string
        if (typeof userData === 'string') {
            userData = JSON.parse(userData);
        }
        
        // Validasi required fields
        if (!userData.name) {
            throw new ValidationError("Nama harus diisi");
        }
        
        if (!userData.email) {
            throw new ValidationError("Email harus diisi");
        }
        
        // Validasi email format
        if (!userData.email.includes('@')) {
            throw new ValidationError("Format email tidak valid");
        }
        
        return {
            success: true,
            data: userData
        };
        
    } catch (error) {
        if (error instanceof ValidationError) {
            return {
                success: false,
                error: "Validation Error",
                message: error.message
            };
        } else if (error instanceof SyntaxError) {
            return {
                success: false,
                error: "JSON Parse Error", 
                message: "Data format tidak valid"
            };
        } else {
            return {
                success: false,
                error: "Unknown Error",
                message: error.message
            };
        }
    }
}

console.log("Testing processUserData function:");

// Test cases
let testCases = [
    null,
    '{ "name": "John", "email": "john@email.com" }',
    '{ bad json }',
    { name: "Jane" },
    { name: "Bob", email: "bob-email" },
    { name: "Alice", email: "alice@email.com" }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`, testCase);
    let result = processUserData(testCase);
    console.log("Result:", result);
});

// ==========================================
// 5. ASYNC ERROR HANDLING 
// ==========================================

console.log("\n5. ASYNC ERROR HANDLING");

// Simulasi async function
function simulateAsyncOperation(shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Async operation failed"));
            } else {
                resolve("Async operation success");
            }
        }, 100);
    });
}

// Using async/await with try-catch
async function handleAsyncOperation() {
    console.log("\nAsync operation with success:");
    try {
        let result = await simulateAsyncOperation(false);
        console.log("Success:", result);
    } catch (error) {
        console.log("Async Error:", error.message);
    }
    
    console.log("\nAsync operation with failure:");
    try {
        let result = await simulateAsyncOperation(true);
        console.log("Success:", result);
    } catch (error) {
        console.log("Async Error:", error.message);
    } finally {
        console.log("Async cleanup completed");
    }
}

// Call async function
handleAsyncOperation();

// ==========================================
// 6. BEST PRACTICES
// ==========================================

console.log("\n6. BEST PRACTICES");

// Logging errors with context
function safeExecute(operation, context = "") {
    try {
        console.log(`Executing ${context}...`);
        return operation();
    } catch (error) {
        console.log(`Error in ${context}:`);
        console.log("  Error name:", error.name);
        console.log("  Error message:", error.message);
        console.log("  Stack trace:", error.stack?.split('\n')[0]);
        return null;
    }
}

// Test safe execution
console.log("\nSafe execution examples:");

safeExecute(() => {
    return JSON.parse('{"valid": "json"}');
}, "JSON parsing");

safeExecute(() => {
    return JSON.parse('{invalid json}');
}, "Invalid JSON parsing");

safeExecute(() => {
    let arr = [1, 2, 3];
    return arr[10].toString(); // Error: undefined.toString()
}, "Array access");

// Graceful degradation
function getConfigValue(key, defaultValue) {
    try {
        let config = JSON.parse(localStorage.getItem('appConfig') || '{}');
        return config[key] ?? defaultValue;
    } catch (error) {
        console.log("Config error, using default:", error.message);
        return defaultValue;
    }
}

console.log("\nConfig with graceful degradation:");
console.log("Theme:", getConfigValue('theme', 'light'));
console.log("Language:", getConfigValue('language', 'en'));

// ==========================================
// 7. PRACTICAL EXAMPLES
// ==========================================

console.log("\n7. PRACTICAL EXAMPLES");

// File processing simulation
function processFile(filename, content) {
    try {
        console.log(`\nProcessing file: ${filename}`);
        
        if (!filename) {
            throw new Error("Filename is required");
        }
        
        if (!content) {
            throw new Error("File content is empty");
        }
        
        // Simulate file type validation
        if (!filename.endsWith('.json') && !filename.endsWith('.txt')) {
            throw new Error("Unsupported file type");
        }
        
        // Process based on file type
        if (filename.endsWith('.json')) {
            let data = JSON.parse(content);
            console.log("JSON processed successfully");
            return { type: 'json', data: data };
        } else {
            console.log("Text processed successfully");
            return { type: 'text', data: content };
        }
        
    } catch (error) {
        console.log(`File processing error: ${error.message}`);
        return { error: true, message: error.message };
    } finally {
        console.log("File processing completed");
    }
}

// Test file processing
let files = [
    { name: "data.json", content: '{"name": "test"}' },
    { name: "readme.txt", content: "Hello World" },
    { name: "image.png", content: "binary data" },
    { name: "broken.json", content: '{invalid}' },
    { name: "", content: "no name" },
    { name: "empty.json", content: "" }
];

files.forEach(file => {
    let result = processFile(file.name, file.content);
    console.log("Result:", result);
});

console.log("\nTIPS ERROR HANDLING");
console.log("1. Selalu gunakan try-catch untuk operasi yang berisiko error");
console.log("2. Gunakan finally untuk cleanup code");
console.log("3. Buat custom error class untuk error types yang spesifik");
console.log("4. Log error dengan context yang cukup untuk debugging");
console.log("5. Berikan fallback/default value untuk graceful degradation");
console.log("6. Jangan biarkan error tidak tertangani");
console.log("7. Gunakan async/await dengan try-catch untuk async operations");

console.log("\nSELESAI - ERROR HANDLING");