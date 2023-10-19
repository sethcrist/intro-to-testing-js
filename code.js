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

function isVowel(input) {
    if (typeof input === 'string') {
        input = input.toLowerCase();
        if ('aeiiou'.indexOf(input) !== -1) return true
    }
    return false;
}

function add(number1 , number2) {
    let result = number1 + number2;
    return true;
}