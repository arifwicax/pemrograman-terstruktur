// COMPREHENSIVE EXAMPLE - SISTEM MANAJEMEN MAHASISWA

console.log("COMPREHENSIVE EXAMPLE - SISTEM MANAJEMEN MAHASISWA");
console.log("Contoh aplikasi yang menggunakan semua jenis statements:");
console.log("- Expression statements & compound statements");
console.log("- Conditional statements (if, switch)");
console.log("- Loop statements (for, while, for-of, for-in)");
console.log("- Jump statements (break, continue, return)");
console.log("- Error handling (try-catch-finally)\n");

// DATA STRUCTURE & CLASSES

// Custom error classes for better error handling
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

// Student management system class
class StudentManagementSystem {
    constructor() {
        // Expression statement - initialization
        this.students = [];
        this.nextId = 1;
        this.validGrades = ['A', 'B', 'C', 'D', 'F'];
        
        console.log("Student Management System initialized");
        
        // Load sample data
        this.loadSampleData();
    }
    
    // Load sample data - uses expression statements
    loadSampleData() {
        console.log("\nLoading Sample Data");
        
        // Compound statement block
        {
            let sampleStudents = [
                { name: "Alice Johnson", nim: "12345678", major: "Computer Science", scores: [85, 92, 78, 90] },
                { name: "Bob Smith", nim: "12345679", major: "Information Systems", scores: [78, 85, 82, 88] },
                { name: "Charlie Brown", nim: "12345680", major: "Computer Science", scores: [92, 88, 95, 90] },
                { name: "Diana Prince", nim: "12345681", major: "Data Science", scores: [88, 92, 85, 87] },
                { name: "Eva Wilson", nim: "12345682", major: "Information Systems", scores: [75, 80, 78, 82] }
            ];
            
            // For-of loop to add sample students
            for (let studentData of sampleStudents) {
                try {
                    this.addStudent(studentData.name, studentData.nim, studentData.major, studentData.scores);
                } catch (error) {
                    console.log(`Error adding sample student: ${error.message}`);
                }
            }
        }
        
        console.log(`Sample data loaded: ${this.students.length} students`);
    }
    
    // Add student - uses validation, error handling
    addStudent(name, nim, major, scores = []) {
        try {
            console.log(`\n--- Adding Student: ${name} ---`);
            
            // Input validation with conditional statements
            if (!name || typeof name !== 'string') {
                throw new ValidationError("Name must be a valid string");
            }
            
            if (!nim || nim.length !== 8) {
                throw new ValidationError("NIM must be 8 characters");
            }
            
            // Check for duplicate NIM using for-of loop
            for (let student of this.students) {
                if (student.nim === nim) {
                    throw new ValidationError(`Student with NIM ${nim} already exists`);
                }
            }
            
            // Validate scores array
            if (!Array.isArray(scores)) {
                throw new ValidationError("Scores must be an array");
            }
            
            // Validate each score using for-of with continue
            let validatedScores = [];
            for (let score of scores) {
                // Continue statement - skip invalid scores
                if (score < 0 || score > 100) {
                    console.log(`  Skipping invalid score: ${score}`);
                    continue;
                }
                validatedScores.push(score);
            }
            
            // Create student object
            let student = {
                id: this.nextId++,
                name: name,
                nim: nim,
                major: major,
                scores: validatedScores,
                average: this.calculateAverage(validatedScores),
                grade: null,
                status: 'active',
                createdAt: new Date().toISOString()
            };
            
            // Calculate grade using conditional statements
            student.grade = this.calculateGrade(student.average);
            
            // Add to students array
            this.students.push(student);
            
            console.log(`  Student added successfully: ID ${student.id}`);
            console.log(`  Average: ${student.average.toFixed(2)} | Grade: ${student.grade}`);
            
            return student;
            
        } catch (error) {
            console.log(`  Error: ${error.message}`);
            throw error;
        } finally {
            console.log(`  Add student operation completed`);
        }
    }
    
    // Calculate average - uses reduce method
    calculateAverage(scores) {
        if (scores.length === 0) {
            return 0;
        }
        
        let sum = scores.reduce((total, score) => total + score, 0);
        return sum / scores.length;
    }
    
    // Calculate grade - uses if-else if statements
    calculateGrade(average) {
        if (average >= 90) {
            return 'A';
        } else if (average >= 80) {
            return 'B';
        } else if (average >= 70) {
            return 'C';
        } else if (average >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
    
    // Find student - uses for-of with break
    findStudent(searchTerm, searchBy = 'nim') {
        console.log(`\n--- Searching Student by ${searchBy}: ${searchTerm} ---`);
        
        try {
            // Loop through students
            for (let student of this.students) {
                let found = false;
                
                // Switch statement for search criteria
                switch (searchBy) {
                    case 'nim':
                        if (student.nim === searchTerm) {
                            found = true;
                        }
                        break;
                        
                    case 'name':
                        if (student.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            found = true;
                        }
                        break;
                        
                    case 'id':
                        if (student.id === parseInt(searchTerm)) {
                            found = true;
                        }
                        break;
                        
                    default:
                        throw new ValidationError("Invalid search criteria");
                }
                
                // Break if found
                if (found) {
                    console.log(`  Student found: ${student.name}`);
                    return student;
                }
            }
            
            // Not found
            throw new NotFoundError(`Student not found with ${searchBy}: ${searchTerm}`);
            
        } catch (error) {
            console.log(`  Search error: ${error.message}`);
            return null;
        }
    }
    
    // Update student score - uses error handling and validation
    updateStudentScore(nim, newScore) {
        console.log(`\n--- Updating Score for NIM: ${nim} ---`);
        
        try {
            // Find student
            let student = this.findStudent(nim, 'nim');
            if (!student) {
                return false;
            }
            
            // Validate score
            if (typeof newScore !== 'number' || newScore < 0 || newScore > 100) {
                throw new ValidationError("Score must be a number between 0-100");
            }
            
            // Add score
            student.scores.push(newScore);
            
            // Recalculate average and grade
            student.average = this.calculateAverage(student.scores);
            student.grade = this.calculateGrade(student.average);
            
            console.log(`  Score added: ${newScore}`);
            console.log(`  New average: ${student.average.toFixed(2)}`);
            console.log(`  New grade: ${student.grade}`);
            
            return true;
            
        } catch (error) {
            console.log(`  Update error: ${error.message}`);
            return false;
        }
    }
    
    // Get students by major - uses filter and for-in
    getStudentsByMajor(major) {
        console.log(`\n--- Students in ${major} ---`);
        
        try {
            let filteredStudents = this.students.filter(student => 
                student.major.toLowerCase() === major.toLowerCase()
            );
            
            if (filteredStudents.length === 0) {
                console.log(`  No students found in ${major}`);
                return [];
            }
            
            console.log(`  Found ${filteredStudents.length} students:`);
            
            // Use for-in to iterate through array properties
            for (let index in filteredStudents) {
                let student = filteredStudents[index];
                console.log(`  ${parseInt(index) + 1}. ${student.name} (${student.nim}) - Grade: ${student.grade}`);
            }
            
            return filteredStudents;
            
        } catch (error) {
            console.log(`  Error getting students by major: ${error.message}`);
            return [];
        }
    }
    
    // Generate report - uses nested loops and comprehensive logic
    generateReport() {
        console.log("\nSTUDENT REPORT GENERATION");
        
        try {
            if (this.students.length === 0) {
                console.log("No students to report");
                return;
            }
            
            // Report statistics object
            let report = {
                totalStudents: this.students.length,
                gradeDistribution: {},
                majorDistribution: {},
                averageScore: 0,
                topPerformers: [],
                needAttention: []
            };
            
            // Initialize grade distribution
            for (let grade of this.validGrades) {
                report.gradeDistribution[grade] = 0;
            }
            
            let totalScoreSum = 0;
            let totalScoreCount = 0;
            
            // Process each student using for-of
            for (let student of this.students) {
                // Count grades
                if (student.grade) {
                    report.gradeDistribution[student.grade]++;
                }
                
                // Count majors
                if (report.majorDistribution[student.major]) {
                    report.majorDistribution[student.major]++;
                } else {
                    report.majorDistribution[student.major] = 1;
                }
                
                // Calculate overall average
                totalScoreSum += student.average;
                totalScoreCount++;
                
                // Identify top performers and students needing attention
                if (student.average >= 85) {
                    report.topPerformers.push(student);
                } else if (student.average < 70) {
                    report.needAttention.push(student);
                }
            }
            
            // Calculate overall average
            report.averageScore = totalScoreCount > 0 ? totalScoreSum / totalScoreCount : 0;
            
            // Display report using nested loops and conditionals
            console.log("\n📊 COMPREHENSIVE REPORT 📊");
            
            console.log(`\n👥 Total Students: ${report.totalStudents}`);
            console.log(`📈 Overall Average: ${report.averageScore.toFixed(2)}`);
            
            // Grade distribution with for-in loop
            console.log("\n📊 Grade Distribution:");
            for (let grade in report.gradeDistribution) {
                let count = report.gradeDistribution[grade];
                let percentage = ((count / report.totalStudents) * 100).toFixed(1);
                console.log(`   ${grade}: ${count} students (${percentage}%)`);
            }
            
            // Major distribution
            console.log("\n🎓 Major Distribution:");
            for (let major in report.majorDistribution) {
                let count = report.majorDistribution[major];
                console.log(`   ${major}: ${count} students`);
            }
            
            // Top performers
            if (report.topPerformers.length > 0) {
                console.log("\n🏆 Top Performers (Average >= 85):");
                let counter = 1;
                for (let student of report.topPerformers) {
                    console.log(`   ${counter}. ${student.name} (${student.nim}) - ${student.average.toFixed(2)}`);
                    counter++;
                }
            }
            
            // Students needing attention
            if (report.needAttention.length > 0) {
                console.log("\n⚠️ Students Needing Attention (Average < 70):");
                let counter = 1;
                for (let student of report.needAttention) {
                    console.log(`   ${counter}. ${student.name} (${student.nim}) - ${student.average.toFixed(2)}`);
                    counter++;
                }
            }
            
            return report;
            
        } catch (error) {
            console.log(`Report generation error: ${error.message}`);
            return null;
        } finally {
            console.log("\n📋 Report generation completed");
        }
    }
    
    // Batch operations - uses while loop and error recovery
    processBatchOperations(operations) {
        console.log("\nBATCH OPERATIONS PROCESSING");
        
        let successCount = 0;
        let errorCount = 0;
        let operationIndex = 0;
        
        // While loop for processing
        while (operationIndex < operations.length) {
            let operation = operations[operationIndex];
            
            try {
                console.log(`\nProcessing operation ${operationIndex + 1}/${operations.length}`);
                console.log(`Type: ${operation.type}`);
                
                // Switch for operation types
                switch (operation.type) {
                    case 'add':
                        this.addStudent(
                            operation.data.name,
                            operation.data.nim,
                            operation.data.major,
                            operation.data.scores
                        );
                        break;
                        
                    case 'update_score':
                        let updated = this.updateStudentScore(
                            operation.data.nim,
                            operation.data.score
                        );
                        if (!updated) {
                            throw new Error("Failed to update score");
                        }
                        break;
                        
                    case 'find':
                        let found = this.findStudent(
                            operation.data.searchTerm,
                            operation.data.searchBy
                        );
                        if (!found) {
                            throw new Error("Student not found");
                        }
                        break;
                        
                    default:
                        throw new Error(`Unknown operation type: ${operation.type}`);
                }
                
                successCount++;
                console.log(`  ✅ Operation ${operationIndex + 1} completed successfully`);
                
            } catch (error) {
                errorCount++;
                console.log(`  ❌ Operation ${operationIndex + 1} failed: ${error.message}`);
                
                // Continue processing other operations
                continue;
                
            } finally {
                operationIndex++;
            }
        }
        
        console.log(`\n📊 Batch Processing Summary:`);
        console.log(`   Total operations: ${operations.length}`);
        console.log(`   Successful: ${successCount}`);
        console.log(`   Failed: ${errorCount}`);
        console.log(`   Success rate: ${((successCount / operations.length) * 100).toFixed(1)}%`);
        
        return { successCount, errorCount, totalCount: operations.length };
    }
}

// MAIN PROGRAM EXECUTION

console.log("\n🚀 STARTING COMPREHENSIVE DEMO 🚀");

try {
    // Initialize system - expression statement
    let sms = new StudentManagementSystem();
    
    // Demonstrate individual operations
    console.log("\n\nINDIVIDUAL OPERATIONS DEMO");
    
    // Add new student
    sms.addStudent("Frank Miller", "12345683", "Computer Science", [88, 92, 85, 90]);
    
    // Find students
    let student1 = sms.findStudent("12345678", "nim");
    let student2 = sms.findStudent("Alice", "name");
    
    // Update scores
    sms.updateStudentScore("12345678", 95);
    sms.updateStudentScore("12345679", 87);
    
    // Get students by major
    let csStudents = sms.getStudentsByMajor("Computer Science");
    let isStudents = sms.getStudentsByMajor("Information Systems");
    
    // Generate comprehensive report
    let report = sms.generateReport();
    
    // Demonstrate batch operations
    console.log("\n\nBATCH OPERATIONS DEMO");
    
    let batchOperations = [
        {
            type: 'add',
            data: {
                name: "Grace Lee",
                nim: "12345684",
                major: "Data Science",
                scores: [92, 88, 90, 94]
            }
        },
        {
            type: 'update_score',
            data: {
                nim: "12345680",
                score: 96
            }
        },
        {
            type: 'find',
            data: {
                searchTerm: "Charlie",
                searchBy: "name"
            }
        },
        {
            type: 'add',
            data: {
                name: "Invalid Student",
                nim: "123", // Invalid NIM
                major: "Computer Science",
                scores: [85, 90]
            }
        },
        {
            type: 'update_score',
            data: {
                nim: "99999999", // Non-existent NIM
                score: 85
            }
        }
    ];
    
    let batchResult = sms.processBatchOperations(batchOperations);
    
    // Final report after batch operations
    console.log("\n\nFINAL SYSTEM STATE");
    sms.generateReport();
    
    console.log("\n✅ COMPREHENSIVE DEMO COMPLETED SUCCESSFULLY ✅");
    
} catch (error) {
    console.log("\n❌ CRITICAL ERROR IN MAIN PROGRAM");
    console.log("Error:", error.message);
    console.log("Stack:", error.stack);
} finally {
    console.log("\n🔚 PROGRAM EXECUTION FINISHED");
    console.log("Cleanup completed.");
    
    console.log("\n\n📚 STATEMENTS DEMONSTRATED");
    console.log("✅ Expression statements: variable assignments, function calls");
    console.log("✅ Compound statements: code blocks with {}");
    console.log("✅ Conditional statements: if-else-if, switch");
    console.log("✅ Loop statements: for, while, for-of, for-in");
    console.log("✅ Jump statements: break, continue, return");
    console.log("✅ Error handling: try-catch-finally, throw");
    console.log("✅ Declaration statements: let, const, class, function");
    
    console.log("\n🎯 PROGRAMMING CONCEPTS APPLIED");
    console.log("• Object-oriented programming with classes");
    console.log("• Error handling with custom error types");
    console.log("• Data validation and input sanitization");
    console.log("• Search and filter operations");
    console.log("• Batch processing with error recovery");
    console.log("• Report generation with statistical analysis");
    console.log("• Comprehensive logging and user feedback");
}

console.log("\nSELESAI - COMPREHENSIVE EXAMPLE");