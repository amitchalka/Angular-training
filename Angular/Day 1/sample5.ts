import {Set} from 'typescript-collections';
let sample = new Set<number>(); //Set holds unique elements
sample.add(1);
sample.add(2);
sample.add(3);
sample.add(4);
sample.add(5);

sample.forEach(function(value){
    console.log(value);
})