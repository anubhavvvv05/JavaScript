// //1

// function sayHello(){
//     console.log("hello JavaScript");
// }

// sayHello();


// //2


// function add(a, b) {

//     return a + b;
// }
// let ans = add(5, 6);
// console.log(ans);




// //3

// function greet(guest = "Guest") {
//     console.log("Hii " + guest);
// }


// greet();


// //4.1


// function addUnlimited(...nums) {
//     let sum = 0;
//     nums.forEach(val => {
//         sum = sum + val;
//     });
//     console.log(sum);
// }

// addUnlimited(1,2,3,4,5);

// //4.2


// function addUnlimited(...num){
//     let sum = 0 ;
//     for (let i = 0; i < num.length; i++) {
//        sum = sum + num[i] ;

//     }
//     console.log(sum);
// }

// addUnlimited(1,2,3,4,5,6);


// //4.3

// function addUnlimited(...num){
//     let ans = num.reduce(function(acc, val){
//         return acc+ val;
//     } , 0 );
//     console.log(ans);
// }
// addUnlimited(1,2,3,4,5,6,7);


// (function(){
//     console.log("I run instantly!")

// })();


// //5

// let person = {
//     Name : "Anubhav",
//     Age: 22,
//     City: "Sultanpur",
// }

// for (let key in person) {
//     console.log(key + " : " + person[key])
// }


//6


let obj = {
    name: "anubhav",
    fnc: function () {
       
       console.log(this)
    },
    fnc2 :()=>{
            console.log(this);
        }
       
   
}
obj.fnc();
 obj.fnc2();