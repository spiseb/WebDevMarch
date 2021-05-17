// Number Methods
let result;

// parseInt() method
// Number()
let number = "1000"

//result = parseInt(number);
result = Number(number)

// parseFloat

result = parseFloat('10.5')

result = isFinite(10.5) // true
result = isFinite(-1) // true
result = isFinite(9999999999999) //true
result = isFinite('intecbrussel') // false
result = isFinite('intec123') // false
result = isFinite('10') // true
result = isFinite('10x') // false
result = isNaN(10) // false
result = isNaN('10') // false

// result  = isFinite(function(){
//     return 10.05
// })


let phoneNumber = '0488000556'

if (isFinite(phoneNumber)) { //if true or 
    // run code here
    console.log("yes it's a number");
} else {
    console.log("Please use numbers only"); // false | if not true
}


// toFixed() method

let salary = -1000.30

// 10 - 20 - 30 - 40 - 50 - 60 - 70 - 80 - 90 - 100

result = salary.toFixed()

function fixedSalary(employeesalary) {
    console.log("Employe salary is ",employeesalary.toFixed())
}



fixedSalary(salary)


console.log(result);