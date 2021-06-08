// let usersDB = {
//     "users":[
//         {
//             "id":1,
//             "user":"root",
//             "pass":"root123"
//         }
//     ]
// }

// console.log(usersDB)

const db = require('./users.json'); // import JSON file but this wont work in html


//console.log(db)
db.users.forEach(user=>{
    console.log(user)
})