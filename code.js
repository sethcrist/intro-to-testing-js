// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name !== 'string') return 'Hello, World!';
    return "Hello, " + name + "!";
}
function isFive(input) {
    return input === 5 || input === "5";
}