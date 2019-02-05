var fruits;
fruits = ['apple', 'orange', 'banana'];
var i;
for (var i_1 in fruits) {
    console.log(i_1);
    console.log(fruits[i_1]);
}
fruits.push('mango');
fruits.sort();
//fruits.pop();   //deletes the last element
//fruits.splice(0);   //deletes all elements from the index specified
fruits.splice(fruits.indexOf('mango'), 1);
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var i_2 = fruits_1[_i];
    console.log(i_2);
}
