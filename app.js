function sayHello() {
    return ("Hello World");
}
console.log(sayHello());

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

function sub(a, b) {
    return a - b;
}

module.exports = { sayHello, add, sub };


