const mongoose = require('mongoose');

// MongoDB Connection URI
const MONGO_URI = 'mongodb://localhost:27017/Week8';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`Error occurred during connection: ${err}`);
});

db.once('connected', () => {
    console.log(`Connected to ${MONGO_URI}`);
});

// Define the Schema
const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    salary: Number
});

// Create the Model
const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Insert Sample Data (if needed)
const insertSampleData = async () => {
    const existingDocs = await Person.countDocuments();
    if (existingDocs === 0) {
        const sampleData = [
            { name: 'Yousuf', age: 44, gender: "Male", salary: 3456 },
            { name: 'Simon', age: 42, gender: "Male", salary: 3456 },
            { name: 'Neesha', age: 23, gender: "Female", salary: 1000 },
            { name: 'Mary', age: 27, gender: "Female", salary: 5402 },
            { name: 'Mike', age: 40, gender: "Male", salary: 4519 },
            { name: 'Alice', age: 30, gender: "Female", salary: 3500 },
            { name: 'John', age: 35, gender: "Male", salary: 4000 }
        ];
        await Person.insertMany(sampleData);
        console.log("Sample data inserted successfully!");
    } else {
        console.log("Sample data already exists.");
    }
};

// Task 4: Find documents with filtering criteria (gender=Female and age > givenAge)
const getFilteredByAgeAndGender = async (givenAge) => {
    try {
        console.log(`Showing age greater than ${givenAge}, gender=Female`);
        const docs = await Person.find({ gender: "Female", age: { $gt: givenAge } });
        docs.forEach((doc) => {
            console.log(`Name: ${doc.name}, Age: ${doc.age}`);
        });
    } catch (err) {
        console.error("Error fetching filtered documents:", err);
    }
};

// Task 5: Count total number of documents in the collection
const countDocuments = async () => {
    try {
        const count = await Person.countDocuments();
        console.log("Total documents count:", count);
    } catch (err) {
        console.error("Error counting documents:", err);
    }
};

// Task 6: Delete documents with age greater than or equal to 25
const deleteDocumentsByAge = async () => {
    try {
        const result = await Person.deleteMany({ age: { $gte: 25 } });
        console.log(`Deleted documents count: ${result.deletedCount}`);
    } catch (err) {
        console.error("Error deleting documents:", err);
    }
};

// Task 7: Update documents where gender=Female to set salary=5555
const updateFemaleSalary = async () => {
    try {
        const result = await Person.updateMany({ gender: "Female" }, { salary: 5555 });
        console.log(`Updated documents count: ${result.modifiedCount}`);
    } catch (err) {
        console.error("Error updating documents:", err);
    }
};

// Additional Queries from the second code block

// Query 1: Return all documents and limit to 5
const getAllDocuments = async () => {
    try {
        const docs = await Person.find({}).limit(5);
        console.log("All Documents (limited to 5):");
        console.log(docs);
    } catch (err) {
        console.error("Error fetching documents:", err);
    }
};

// Query 2: Filter by age >= 25, sort by salary, and limit to 10 records
const getFilteredDocuments = async () => {
    try {
        const filteredDocs = await Person.find({ age: { $gte: 25 } }) // Filter: age >= 25
            .sort({ salary: 1 })                                      // Sort: Salary in ascending order
            .select("name age salary")                                // Select fields: name, age, salary
            .limit(10);                                               // Limit: 10 records
        console.log("Filtered and Sorted Documents:");
        filteredDocs.forEach(doc => {
            console.log(`Name: ${doc.name}, Age: ${doc.age}, Salary: ${doc.salary}`);
        });
    } catch (err) {
        console.error("Error fetching filtered documents:", err);
    }
};

// Main Function to Run Tasks
const main = async () => {
    await insertSampleData();               // Insert sample data if the collection is empty
    await getFilteredByAgeAndGender(15);    // Task 4
    await countDocuments();                 // Task 5
    await deleteDocumentsByAge();           // Task 6
    await updateFemaleSalary();             // Task 7
    await getAllDocuments();                // Additional Query 1
    await getFilteredDocuments();           // Additional Query 2
};

// Run Main
main()
    .then(() => mongoose.disconnect())
    .catch((err) => {
        console.error("Error running main function:", err);
        mongoose.disconnect();
    });
