// let name;

// while(name==undefined){
//     name = prompt("Enter your name");

// }
// document.write(name)

// sum of numbers
// let numbers = [1,2,3,4,5,6,7,8,9]
// let index=numbers.length
// let total =0
// while(index--){
//     total+= numbers[index]
// }

// console.log(total)

/*
// let i=0
// while(i<10){
// i++
// console.log(i)
// }
*/


// let i=0;
// let howmany=10;
// while(i<howmany){
//     i++
//     console.log('hello',i)
// }

// while(howmany>0){
//     howmany--;
//     console.log('hello again',howmany)
// }

// let numbers = [1,2,3,4,5,6,7,8,9]
// // let index=numbers.length
// // let total =0
// // while(index--){
// //     total+= numbers[index]
// // }

// let index = numbers.length
// let total = 0;
// while(index){
//     console.log(index)
//     index--
// }
// let x=0;
// let resul=0
// while(x<100){

//     x *=x
//     x++
//     console.log(x)
// }

// while (x < 100) {
//     x++
//     x += x
//     console.log(x);
// }

// var x = 1;
// var sonuc = 1;

// while (x < 11) {
//     sonuc += x;
//     x++;
//     console.log(sonuc, x);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let index = 0
// let total = 0;
// while (index < numbers.length) {

//     total += numbers[index]
//     console.log(total, numbers[index]);
//     index++
// }


// let i = 0
// while (i < 10) {
//     var randomstring = Math.random().toString(36).slice(-12);
//     console.log(randomstring)
//     i++
// }

function maybeTrue() {
    return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
    console.log("And I ran; I ran so far away!");
}


// let enternumber=0;

// while(enternumber<=0){
//     enternumber = prompt('Enter a number')
//     console.log('it is positive number',enternumber)
//     enternumber--
// }

// var total = 0

// while (true) {
//     var result = prompt("You need to give number between 4-10!");
//     total += Number(result)
//     // you could break your loop if an use cancels here
//     if (result === null) break;
//     console.log(total)
// }


while(true){
    var calc = prompt("You need to give number between 4-10!");
    if(calc == "joe"){
        break;
    }
    console.log(eval(calc))
    
}