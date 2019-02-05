function Greet2(greeting: string='hi', name:string='hello'):string
//function Greet(greeting: string, name?:string):string 
{
    return greeting + '' + name + '!';
}

console.log(Greet2('Hello','Steve'));
console.log(Greet2('Hello'));
console.log(Greet2(undefined,"Hello"));