// eval 

// let yasmine_age = 21;
// let control = yasmine_age > 25
// console.log(control)



// while (true) {
//     let calc = prompt('ENTER A NUMBER PLEASE')
//   //  console.log(eval(calc))
//     console.log(calc)
//     if(calc == null){
//         break;
//     }
// }

// let askNumber = prompt('enter a number between 5-10')
// let result = askNumber >=5 && askNumber <=10;

// function trueOrFalse(n1,n2){
//     return n1 >=5 && n2 <=10
// }
let askNumber = prompt('enter a number')

function trueOrFalse(){
    return askNumber >=5 && askNumber <=10
}

console.log(trueOrFalse())


while(trueOrFalse()){
  askNumber = prompt('enter a number again')
}

// while(trueOrFalse(5)){
//     console.log('hello it is 5')
// }
// while(){
//     let x = prompt('enter a number between 5-10')
//     console.log(x)
//     console.log(result)
// }