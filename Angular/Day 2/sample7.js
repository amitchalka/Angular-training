function Greet(greeting, name) {
    if (greeting === void 0) { greeting = 'hi'; }
    if (name === void 0) { name = 'hello'; }
    return greeting + '' + name + '!';
}
console.log(Greet('Hello', 'Steve'));
console.log(Greet('Hello'));
console.log(Greet(undefined, "Hello"));
