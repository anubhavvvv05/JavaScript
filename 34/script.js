let age = prompt("tell your age");

if (age === null) {
    console.error("cancel kar diya");
} else {
    if (age.trim() === "") {
        console.error("only spaces")
    } else 
    age = Number(age.trim());
    {
        if (isNaN(age)) {
            console.error("number nhi hai ye")
        }
        else {
            console.log("confirm ye number hai..")
        }
    }
}



