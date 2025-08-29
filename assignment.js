// Topic 1 : "ALERT" ----------------------------------

// Ex no 1 

alert("Hello World")




// Ex no 2 

alert("Hasnain Raza")




// Ex no 3

alert(12)




// Ex no 4

var message = "My name is Muhammad Hasnain Raza"
alert(message)




// Ex no 5

var names = "Hasnain Raza"
var greet = "Welcome " + names
alert(greet)





// Topic 2 : Variables For Strings -----------------------




// Ex no 1 

var userName;
userName = "Muhammad Hasnain Raza"
console.log(userName)





// Ex no 2 

var Greet = "Welcome Hasnain Raza"
alert(Greet)

// Ex no 3 

var firstName = "Muhammad "
var lastName = "Hasnain Raza"
var fullName = firstName + lastName
console.log(fullName)

// Ex no 4

var quote_1 = "Practice Makes A Person Perfect"
console.log(quote_1)

// Ex no 5 

var city = "Karachi"
var greeting = "Welcome to " + city
console.log(greeting)

// Topic 3 : Variables For Numbers ------------------------

// Ex no 1 

var age;
age = 17
console.log(age)
 
// Ex no 2 

var num1 = 11
var num2 = 12
var sum = num1 + num2
console.log(sum)

// Ex no 3 

var num1 = 21
var num2 = 17
var sub = num1 - num2
console.log(sub)

// Ex no 4

var num1 = 6
var num2 = 6
var multiply = num1 * num2
console.log(multiply)

// Ex no 5

var yourAge = Number(prompt("Enter Your Age"))
console.log("Your Age is " + yourAge)

// Topic 4 : Maths Expressions ----------------------------

// Ex no 1

var x = 10
var y = 5
var z = x + y
console.log(z)

// Ex no 2

var x = 10
var y = 5
alert(y - x)


// Ex no 3

var x = 10
var y = 5
console.log(x * y)

// Ex no 4

var x = 10
var y = 5
console.log(x / y)

// Ex no 5

var x = 10
var y = 5
console.log(x % y)





// Topic 5 : Prompts ----------------------------



// Ex no 1

var Name = prompt("Enter Your Name")
alert("Welcome " + Name)




// Ex no 2

var ageOfUser = prompt("Enter Your Age")
alert("You are " + ageOfUser + " Years Old ")



// Ex no 3

var inputNumber = Number(prompt("Enter A Number"))
var DoubledNumber = inputNumber * 2
console.log("The Double Of " + inputNumber + " Is " +  DoubledNumber)


// Ex no 4

var Fav_Color = prompt("Enter Your Favourite Color")
console.log("Wow! I also like " + Fav_Color + " Color")


// Ex no 5 

var CityName = prompt("Enter Your City Name")
console.log("You are from " + CityName)

// Topic 6 : Conditional Statements and Comparison Operators -------


// Ex no 1 

var userAge = Number(prompt("What is your age"));

if (userAge < 30){
    alert("You are still Young man")
} else{
    alert("You are not a young man ")
}
  

// Ex no 2

var Even_Num = prompt("Enter a Number")
if (Even_Num % 2 === 0){
    alert(`${Even_Num} is an Even Number`)
}
else{
    alert(`${Even_Num} is not an even Number`)
}



// Ex no 3

var Num_one = Number(prompt("Enter first Number to compare "));
var Num_two = Number(prompt("Enter second Number"));

if (Num_one > Num_two){
    alert(`${Num_one} is Greater the ${Num_two}`)
} 
else if (Num_two > Num_one){
    alert(`${Num_two} is Greater the ${Num_one}`)
}
else {
    alert("Both Numbers are Equal")
}



// Ex no 4

// var password = 12345
// var user_password = Number(prompt("Enter a Password :  (Like This : 12345)  "));
// if (user_password === password){
//     alert("Access Granted")
// }
// else{
//     alert("Access Denied")
// }


// Ex no 4 

var createPassword = prompt("Create Your Password")
var enterPassword = prompt("Enter Your Password")
if(enterPassword === createPassword){
    alert("Access Granted")
}
else{
    alert("Access Denied")
}


// Ex no 5

var value1 = "5";     // string
var value2 = 5;       // number

// Loose equality (==): compares value after type conversion
console.log(value1 == value2);   // true

// Strict equality (===): compares value and (data) type "OR" Do Not Converts Type
console.log(value1 === value2);  // false

// Loose inequality (!=): compares value after type conversion
console.log(value1 != value2);   // false

// Strict inequality (!==): compares value and type
console.log(value1 !== value2);  // true