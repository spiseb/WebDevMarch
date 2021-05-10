// Events
// const user = document.getElementById('user')
// const pass = document.getElementById('pass')
// console.log(user,pass)

// let i=0
// function clickEventFunction(){
//     i=i+1 // 1
//     //alert(`Hello ${name}!`)
//     let userx = {
//         id:i,
//         user:user.value,
//         pass:pass.value
//     }
//     console.log(userx)
// }

// string methods
let result;
let comment = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Intecbrussel, Eius, dolorem! Sunt numquam amet asperiores eaque aliquam obcaecati quia eius, Intecbrussel, unde accusantium, inventore laudantium velit dolorum tenetur, Intecbrussel, veniam assumenda fugiat harum.Intecbrussel, veniam assumenda fugiat harum.Intecbrussel, veniam assumenda fugiat harum.Intecbrussel, veniam assumenda fugiat harum. Intecbrussel, veniam assumenda fugiat harum. Intecbrussel, veniam assumenda fugiat harum. Intecbrussel, veniam assumenda fugiat harum. Intecbrussel, veniam assumenda fugiat harum."

// length

result = comment.length

// methods return pos of string you look for

// indexOf and lastIndexOf Methods
result = comment.indexOf('Intecbrussel')
result = comment.lastIndexOf('Intecbrussel')

// search method
result = comment.search('Intecbrussel')

// Extracting String Parts
result = comment.slice(227,comment.length)
result = comment.indexOf('ipsum')
result = comment.slice(6,12);

result = comment.substring(6,12);
result = comment.substr(6,12);
result = comment.substring(12,-1);

// replace method
result = comment.replace('ipsum','2847289347289749')
//result = comment.replace(/Intecbrussel/g,'WE ARE DEVELOPERS')
//result = comment.replaceAll('Intecbrussel','WE ARE DEVELOPERS')
let numbers = "2323232323 sdadadasd 239849242894928 asdojaio 349834983 ADASDADASD ASD 34234234 dasdad"
result = numbers.replace(/([a-zA-Z])\w+/g,'WE ARE DEVELOPERS')

// uppercase lowercase methods
result = comment.toUpperCase();
result = comment.toLowerCase();

comment = "                                        INTECBRUSSEL                                                          "
result = comment.trim();
result = comment.trimLeft();
result = comment.trimRight();
result = comment.trimEnd();

// concat > merge strings
let str1= "Intec";
let str2= "Brussel";
let num1 = "123"

result = str1.concat(str2)

result = num1.concat('456')

// charCode
result = str1.charAt(0);
result = str1.charCodeAt(0)


// converting string into array
let data = "Maryam,Yasmine,Lalena,Hutu,Marcio,Kabbaj,Mariam,Barsam,Frank,Massimiliano,Sebastien"

// split method

result = data.split(",")

console.log(result)