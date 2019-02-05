let fruits : Array<string> ;
fruits = ['apple','orange','banana'];
let i :number;
for(let i in fruits){
    console.log(i);
    console.log(fruits[i]);
} 

fruits.push('mango');
fruits.sort();
//fruits.pop();   //deletes the last element
//fruits.splice(0);   //deletes all elements from the index specified
fruits.splice(fruits.indexOf('mango'),1);   //deletes only mango


for(let i of fruits){
    console.log(i);
}