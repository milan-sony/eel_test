function findSum(){
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    console.log(num1, num2)
    // call python's sum function
    eel.sum_function(num1, num2)(result)
}

function result(number){
    document.querySelector(".result").innerHTML = number;
}