
//Print multiplication table of 5Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`)

// }



//Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.


// let count = 0;
// for (let i = 1; i <= 15; i++) {
//     if (i>8) {
//         count++;
//     }


// }

// console.log(`${count}`)




// Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

// let flag = false
// let attempts = 0;
// let password = "anubhav";
// let pass = prompt("password bta...");
// attempts++;
// if (password===pass) {
//      flag=true;
// }

// while(password !== pass){

//     if (attempts ===3){
//         console.error("account locked.");
//         break;
//     }
//     pass = prompt("password bta...");
//     if (password===pass) {
//     console.log("password khul gya."); flag=true;
// }
//     attempts++;
// }

// if (flag===true) {
//     console.log("account opened");
// }



//18. Ask user 5 numbers. Count how many are positive Use loop + condition + counter.


// let totalNumbers = 0;
// let PositiveNumbers = 0;



// for (let i = 1; i <= 5; i++) {
//    number = +prompt("enter number."); 
//    if (number>0) {
//     PositiveNumbers++;
//    }
// }

// console.log(`total positive numbers ${PositiveNumbers}`);



// 19. ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times.If enough balance → deduct Else → print “Insufficient balance”

let dbc = 0;
let balance = 1000;

for (let i = 1; i <= 3; i++) {
    if (dbc===3) break;
    let debitAmount = +prompt("how much money you want to debit?");
    if(debitAmount >  balance) break;
    balance = balance - debitAmount;

    if (balance<0) {
        console.error("insufficient balance.");
    }
    dbc++;
}


console.log(`balance = ${balance}`);
