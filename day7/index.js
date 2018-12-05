//to get value of HTML Element
//document.getElementById("firstNumber").value;

//to display value:
//document.getElementById("result").value = "";

function calculate () {

    var first_number;
    var second_number;
    var operator;
    var total;

    first_number = document.getElementById("firstNumber").value;
    second_number = document.getElementById("secondNumber").value;
    operator = document.getElementById("operator").value;

    if(operator == "+") {
        total = parseInt(first_number) + parseInt(second_number);
    }

    else if(operator=="-") {
        total = parseInt(first_number) - parseInt(second_number);
    }

    else if(operator=="/") {
        total = parseInt(first_number) / parseInt(second_number);
    }

    else if(operator=="*") {
        total = parseInt(first_number) * parseInt(second_number);
    }
 
    document.getElementById("result").value = total;

}

//morning
//afternoon
//evening

var greet;

greet = "afternoon";

if(greet == "morning") {
    console.log("This is Morning");
}

else if(greet == "afternoon") {
    console.log("This is Afternoon");
}

else if(greet == "evening") {
    console.log("This is Evening");
}

//default condition
else{
    console.log("Night Time");
}


var greetings = ["Morning", "Afternoon", "Evening"];

console.log(greetings);
console.log(greetings.length);

console.log(greetings[1]);
console.log(greetings[2]);
console.log(greetings[3]);

var primeNumber = [1, 3, 5, 7, 9, 12, 15]
console.log(primeNumber[primeNumber.length-1]);

var step = 3;
while( step < primeNumber.length){
    console.log(step);
    step = step + 1;
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

//if even number -> "Even Number"
// -> "Not Even Number"
// divide = %
//while + if else

step2 = 0;
while( step2 < numbers.length){

    var isEven = numbers[step2] % 2;

    if(isEven == 0){
        console.log(numbers[step2] + "is even number");
    }else{
        console.log(numbers[step2] + "is not even number");
    }
    step2 = step2 +1;
}
