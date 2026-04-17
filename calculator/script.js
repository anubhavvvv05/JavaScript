let a = Number(prompt("enter first number:"));
let b = Number(prompt("enter second number:"));


let operator = prompt("enter operator:(+,-,/,*,%)");


switch(operator){
    case "+":
        result = a+b;
        break;
    case "-":
        result = a-b;
        break;
    case "*":
        result = a*b;
        break;
    case "/":
        if (b===0) {
            result = "can't divide by zero";
        } else {
            result =a/b;
        }
        break;
    case "%":
        result = a%b;
        break;
        
    default :
        result = "invalid operator";    
}

alert(result);