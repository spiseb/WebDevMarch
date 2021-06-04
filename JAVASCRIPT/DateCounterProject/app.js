

// let current_date = new Date();
// let new_date = new Date('June 1 2021');
// let totaltime = (new_date - current_date)/1000

// unix timestamp 

/*

days = totaltime/3600/24
hours (totaltime/3600) % 24
mins (totaltime/60) %60
seconds totaltime % 60

*/

// console.log("new date",new_date)

// console.log(totaltime)

// console.log("current date",current_date)

// let i =0
// setInterval(function(){
//     i++
//     console.log('hello',i)
// },10000)

// setInterval(function(){
//     console.log(new Date());
// },1000)


let result
let newDate = new Date("June 01 2021").getTime()
// Timestamp format
/*
days = totalTime/3600/24
hours (totalTime/3600) % 24
mins (totalTime/60) % 60
seconds totalTime % 60
*/
setInterval(function(){
    let currentDate = new Date().getTime()
    let totalTime = newDate - currentDate/1000
    //let days = Math.floor(totalTime/3600/24);
    let hours = Math.floor((totalTime/3600) % 24)
    let mins = Math.floor((totalTime/60) % 60)
    let secs = Math.floor(totalTime % 60)
    let displayTime = [hours, mins, secs]
    displayTime.join(":")
    console.log(result, "until June 1st, 2021")
    
}, 1000)