/* if - if else - if else if - switch */
function GenNumbers(min, max) {
    let number = Math.floor(Math.random() * ((max - min) + 1) + min)
    //console.log("Random Number",number);
    return number;
}

// if

// for(let i=0;i<10;i++){
//     let number = GenNumbers(0,3);
//     // if begin
//     if(number == 2){
//         console.log("FOUND =>",number);
//         break;
//     }else if(number== 3){
//         console.log("FOUND>",number)
//     }else{
//         console.log("Not found!")
//     }
// }


let number = GenNumbers(0, 3);
// if begin
if (number == 2) {
    //console.log("FOUND =>",number);

} else if (number == 3) {
    // console.log("FOUND>",number)
} else {
    // console.log("Not found!")
}


// switch 

// switch(90){
//     case 1:
//         console.log('found! it s number 1')
//         break;
//     case 9:
//         console.log('yes the number is 9')
//         break;
//     case 10:
//         console.log('found the number is 10')
//     default:
//         console.log('default')
// }

// switch('Barsam'){
//     case 'mehmet':
//         console.log('welcome mehmet!')
//         break;
//     case 'Ali':
//         console.log('welcome ali!')
//         break;
//     case 'atilla':
//         console.log('welcome atilla!')
//         break;
//     default:
//         console.log('not found')
// }


// switch(number){
//     case 1:
//         console.log("Found>",number)
//         break;
//     case 2:
//         console.log("Found Switch>",number)
//         break;
//     case 3:
//         console.log("Found Switch>",number)
//         break;
//     default:
//         console.log("Switch not found")

// }


let today = new Date().getDay();

console.log(today);

// Zondag = 0
// Maandag = 1
// Dinsdag = 2
// Woendag = 3
// Donderdag = 4
// Vrijdag = 5
// Zaterdag = 6

switch (today) {
    case 0:
        console.log('Zondag')
        break;
    case 1:
        console.log('Maandag')
        break;
    case 2:
        console.log('Dinsdag')
        break;
    case 3:
        console.log('Woensdag')
        break;
    case 4:
        console.log('Donderdag')
        break;
    case 5:
        console.log('Vrijdag')
        break;
    case 6:
        console.log('Zaterdag')
        break;
}


console.log(new Date().getDate());

let printTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`

console.log(printTime);