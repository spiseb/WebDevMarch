// ARRAY METHODS
let result;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let movie_categories = ['Comedy', 'Action', 'Sci-fi', 'Thriller', 'Fantasy']

let students = [
    { id: 1, fullname: 'Joe dalton', age: 100, profession: 'Pirate' }
]

// push() 

numbers.push(10)

movie_categories.push('Horror')
// [ 'Comedy', 'Action', 'Sci-fi', 'Thriller', 'Fantasy', 'Horror' ]

result = movie_categories

let newStudent = {
    id:2,fullname:'Mike', age:50,profession:'pirate'
}

students.push(newStudent)
/*
[
  { id: 1, fullname: 'Joe dalton', age: 100, profession: 'Pirate' },
  { id: 2, fullname: 'Mike', age: 50, profession: 'pirate' }
]
*/

result= students

// join() method

//result = movie_categories.join()
//result = movie_categories.join("")
result = movie_categories.join("----")
// Comedy-Action-Sci-fi-Thriller-Fantasy
// ComedyActionSci-fiThrillerFantasyHorror

// pop() method
numbers.pop() // remove last element of an array
result = numbers

// shift method
numbers.shift() // removes first element of an array
result = numbers

// some method

result = numbers.some(function(value){
    return value>=9
})


// every method
// Determines whether all the members of an array satisfy the specified test.

function everyCallBackFunc(value){
    return value>=1 
}

result = numbers.every(everyCallBackFunc)


// reduce method

result = numbers.reduce(function(total,current,index,arrayitself){
    console.log(`Total: ${total}\nCurrent: ${current}\nIndex: ${index}\nArrayItself: ${arrayitself}`)
    return total = total+current;
})


result = movie_categories.reduce(function(total,current,index){
    return total  = total + current
})




// unshift method

numbers.unshift(-1)
numbers.unshift('hello')
numbers.unshift((()=>10)());
result = numbers


// map method

numbers.map(function(element,index){
    console.log(`Element:${element}`)

})

function getAllMovieCategories(value,index){
    console.log(`Movie Category:${value}\nIndex:${index}`)
}

movie_categories.map(getAllMovieCategories)


result = students



let student = [
    {
        fullname:'ali veli'
    },
    {
        fullname:'veli'
    }
]

student.map(function(singledata,index){
    console.log(singledata.fullname)
})

// forEach method

student.forEach(function(x,i){
    console.log(x.fullname)
})


// flat()
let multidimensionalArray= [1,2,3,4,5,6,7,8,[9,10,11,12,13,[14,15,16,17,18,[19,20]]]]
let nestedStringsArray =['a','b','c',['d','e',['f','g']]]
let single = multidimensionalArray.flat(Infinity)
result = multidimensionalArray.flat(3)
result = nestedStringsArray.flat(2)

result = nestedStringsArray.flat(Infinity)


// filter()

result = single.filter(function(value){
    return value >=11 && value <=18
})

nestedStringsArray.flat(Infinity)

result = nestedStringsArray.filter(function(element){
    return element >= 'b'
})


let person = [
    {
        name:"Ali Baba1",
        age:70
    },
    {
        name:"Ali Baba2",
        age:50
    },
    {
        name:"Ali Baba3",
        age:25
    },
    {
        name:"Ali Baba4",
        age:18
    },
    {
        name:"Ali Baba5",
        age:100
    }
]


result = person.filter(function(x){
    return x.age <=25
})

/*
Total: 20
Current: 7
Index: 5
ArrayItself: 2,3,4,5,6,7,8,9

27 = 20+7

*/


// sort method
let nums = [4,7,2,9,0,4,6,2,54,12,98,45,23,7,34,245]
let strings = ['a','k','y','w','p','q','b','n','l']

result = strings.sort()

function compareFunction(a,b){
    return a-b
}
result = nums.sort()
result = nums.sort(compareFunction)

/*
[5,5]
5-5 = 0 > 
5,5
4-7 = -3
-1 >  
0 > first_num1 === second_num2
1


*/

//find method
let studentsx = [
    {id:1,name:"Sebastien"},
    {id:2,name:"Maryam"},
    {id:3,name:"Barsam"}
]


result = studentsx.find(function(student){
    return student.id === 2
})


// concat method

let oldData = [1,2,3,4,5]
let newData = [6,7,8,9,'test',true,function(){}]

result = oldData.concat(newData);


// fill() method
//result = result.fill(result)
//result = result.fill("INTECBRUSSEL");

// includes()
//result = result.includes(7)


function iselementExist(obj,findValue){
    let isExist = obj.includes(findValue);
    if(isExist){
        console.log('RESULT>','this is exist in the array')
    }else{
        console.log('the value/element is not in the array')
    }
}

iselementExist(result,'INTECBRUSSEL')

// reverse () method

result = result.reverse();


console.log(result);