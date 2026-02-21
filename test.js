const sayHello = require('./app');
const add = require('./app');

if (sayHello() === "Hello World") {
    console.log("Test Passed ✅");
    process.exit(0);
} else {
    console.log("Test Failed ❌");
    process.exit(1);
}

if (add(1, 2) == 3) {
    console.log("Add Test Passed ✅");
    process.exit(0);
} else {
    console.log("Add Test Failed ❌");
    process.exit(1);
}