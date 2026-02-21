const { sayHello, add } = require('./app');

if (sayHello() === "Hello World" && add(1, 2) == 3) {
    console.log("Test Passed ✅");
    process.exit(0);
} else {
    console.log("Test Failed ❌");
    process.exit(1);
}
