let data = [1,2,3,4,5,true,false,'atilla','intec','Barsam'];

console.log(data[8])

const [item1,item2,item3,item4,item5,item6,item7,item8,item9] = data;
console.log(item9)

// let StudentInfo = {
//     name:"joe",
//     lastname:"dalton",
//     location:{
//         country:"USA",
//         city:"Texas"
//     }
// }

// let {location:{country,city}} = StudentInfo;
// let {name,lastname} = StudentInfo
// console.log(country,city,name,lastname)

let person = {
    name:"Joe",
    age:25,
    salary:5000,
    printInfo:function(){
        //console.log(name,age,salary)
    }
}

const {name:FULLNAME,age:AGE,salary:MAX_SALARY,printInfo} =person

console.log(FULLNAME,AGE,MAX_SALARY)
printInfo()

const obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

const {a:number1,b:number2,c:number3,d:number4} = obj

console.log(number1,number2,number3,number4)