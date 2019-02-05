let sample1 : number[] = [1,2,3,4,5];
let sample2 : number[] = [1,2,3,4,5];
let cloneArray = [...sample1,...sample2];
for(let a of cloneArray){
    console.log(a);
} 