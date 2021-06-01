// while loop

/*

while(condition){
    // js code here
}

*/
let control = false;
control = 1<2 // true
console.log(control)
// while(control){ //false
//     console.log('hello')
// }

let i=0
// while(i<10){
    
//     console.log('hello while loop',i)
//     i=i+1
    
// }

// for(i;i<10;i++){
//     console.log('hello while loop',i)
// }

let numbers =[1,'Marcio',3,'atilla',5,'Yasmine',7,8,9,10]
// let index = numbers.length

// while(i<index){
//     console.log(numbers[i])
//     i++
// }
i =0;
let nums = [1,2,3,4,5,6,7,8,9,10]
let index = nums.length
let total=0;

while(i<index){
   // console.log(i)
  //  console.log(nums[i])
    total += nums[i]
    // total = 5 + 1
    i++
}

console.log(total)

