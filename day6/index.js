
function calculate(myLocation, myLocation2, myLocation3) {

    var myName = "This is Stackup, at " + myLocation + " , " + myLocation2;
    console.log(myName);
}

calculate("One North", "JTC Launchpad");
calculate("test","test");

function getMyFullName() {

    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName;
    return fullName;
}

var myFullName = getMyFullName();
console.log(myFullName);

function greet(firstName, lastName, bornYear) {

    var age = 2018 - bornYear;
    var fullName1 = "Hello" + ", " + firstName + " " + lastName + "," + age;
    console.log(fullName1);  

}

greet("Lionel", "Messi", "1985");

function testMe() {
    alert ("Hi you hit the button");
}
