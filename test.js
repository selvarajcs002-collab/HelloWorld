const sayHello = require('./app');

if (sayHello() === "Hello World") {
    console.log("Test Passed ✅");
    process.exit(0);
} else {
    console.log("Test Failed ❌");
    process.exit(1);
}