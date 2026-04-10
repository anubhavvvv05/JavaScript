// map

let arr = [12,43,10,76,30];

let newarr = arr.map(function(val){
    if(val<50) return val;
})


//filter

let arr2 = [1,2,3,4,5,6,7,8];

let newarr2 = arr2.filter(function(val){
    if(val>4) return true;
})


//reduce

let arr3 = [1,2,3,4,5,6,7,8];
let ans = arr3.reduce(function(accumulator , val) {
    return accumulator+val;
}, 0);


//find 
 let arr4 = [ 1,3,5,7,9];

 let val = arr4.find(function(val){
        return val==3;
 });


 //some

 let marks = [23,54,76,56,44,87,34];


 let any = marks.some(function(val){
    return (val>86);
 })


 //every

 let every = marks.every(function(val){
    return val >5
 })