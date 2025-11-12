// Exercise 1

const maxOfTwoNumbers = ( num1 , num2 ) => {
    if (num1 >= num2){
        return num1;
    }
    else {
        return num2;
    }
}

console.log("Exercise 1 Result: ", maxOfTwoNumbers(3,9))

console.log("==========")

//Exercise 2

function isAdult( age ){
    if( age >= 18 ){
        return ("Adult")
    }
    else {
         return ("Minor")
    }
}
console.log("Exercise 2 Result: ", isAdult(21))

console.log("==========")
//Exercise 3

function isCharAVowel(vowel){
    if ( vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
        return true
    }
    else {
        return false
    }
}
console.log("Exercise 3 Result: ", isCharAVowel("a"))

console.log("==========")

//Exercise 4

function generateEmail (myname,domain) {
    return myname + domain
}
console.log("Exercise 4 Result: ", generateEmail("Nawaf", "@gmail.com"))

console.log("==========")

// Exercise 5

function greetUser(aName,timeOfDay){
    if (timeOfDay === "morning"){
        return ("Good Morning, " + aName + "!")
    }
    else if (timeOfDay === "afternoon"){
        return ("Good Afternoon, " + aName + "!")
    }
    else if (timeOfDay === "evening"){
        return ("Good Evening, " + aName + "!")
    }
}
console.log("Exercise 5 Result: ", greetUser("Sam", "morning"))

console.log("==========")

//Exercise 6

function maxOfThree(number1,number2,number3){
    if (number1 > number2 && number1 > number3){
        return number1
    }
    else if (number2 > number1 && number2 > number3){
        return number2
    }
    else if (number3 > number1 && number3 > number2){
        return number3
    }
}
console.log("Exercise 6 Result: ", maxOfThree( 5, 10, 8))

console.log("==========")

//Excercise 7

function calculateTip(billAmount,tipPercentage){
    return billAmount * tipPercentage / 100
}
console.log("Exercise 7 Result: ", calculateTip(50,20))

console.log("==========")

//Exercise 8

function convertTemperature(temperature, string){
    if (string === "c"){
        return (temperature * 1.8 + 32)
    }
    else {
        return (temperature - 32) / 1.8
    }
}
console.log("Exercise 8 Result: ", convertTemperature(32,"c"))

console.log("==========")

//Exercise 9

function basicCalculator(no1, no2, operation){
    if (operation === "add"){
        return no1 + no2
    }
    else if ( operation === "subtract"){
        return no1 - no2
    }
    else if (operation === "multiply"){
        return no1 * no2
    }
    else if (operation === "divide"){
        return no1 / no2
    }
}
console.log("Exercise 9 Result: ", basicCalculator(10,5,"subtract"))

console.log("==========")

//Exercise 10

function calculateGrade(score,grade){
    if (score > 90){
        return "A"
    }
    else if ( score >= 80 && score <= 89 ){
        return "B"
    }
    else if (score >= 70 && score <= 79){
        return "C"
    }
    else if (score >= 60 && score <= 69){
        return "D"
    }
    else {
        return "F"
    }
    
}
console.log("Exercise 10 Result: ", calculateGrade(85))

console.log("==========")

//Exercise 11

function createUsername(firstName,lastName,chrCount){
    chrCount = firstName + lastName
    return firstName.slice(0,3)+lastName.slice(0,3)+chrCount.length

}
console.log("Exercise 11 Result: ", createUsername("Samantha", "Green"))

console.log("==========")

//Exercise 12

function numArgs(Args){
    return arguments.length
}
console.log("Exercise 12 Result: ", numArgs(1, 2, 3, 4))