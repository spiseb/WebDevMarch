// data types

/*
number
string
object
array
undefined
null
function
*/

let numberDataType= 10;
let stringDataType= "Intecbrussel's building";


let objDataType = {
    name:'Joe',
    familyname:'Dalton',
    age:21,
    showPerson:function(){
        console.log('hello its from showperson')
    },
    scores:{
        javascript:100,
        java:90,
        php:80,
        golang:60,
        x:{
            y:{
                z:{
                    w:{

                    }
                }
            }
        }
    }
}

objDataType.name="Michael"
objDataType.familyname="Joe"
objDataType.age = 31

// nested objects  - update

objDataType.scores.x.id=1
objDataType.scores.x.y.id = 2
objDataType.scores.x.y.z.id= 3
objDataType.scores.x.y.z.w.id=4

console.log("RESULT=>",objDataType.name, objDataType.familyname, objDataType.age)
console.log(objDataType.scores.x)
objDataType.showPerson();

// array data type
let myArray = ['Frank','Barsam','Lalena','Mariam','Marcio','Maryam','Hutu','Kabbaj','Yasmine','Roger','Massimiliano','Sebastien']
myArray[0] = 'Joe'

let nestedArray = [1,2,3,4,5,[6,7,8]]

let resultGetNested = nestedArray[5][0]; // print first element of nested array in nestedArray data

nestedArray[5][0] = 10 // update nested array item

let extractSingleArrayItem = myArray[1];

console.log(extractSingleArrayItem,myArray);
console.log(typeof myArray);
console.log(nestedArray);


let obj = {
    myArray  : [1,2,3,4,5,6]
}