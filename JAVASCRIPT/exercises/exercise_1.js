let User = []
var user_id=0;
/*
add 5 User 
Use only array methods and no regular loops

*/

function addUser(fullname, email, phone, username, password) {
    // params: id,fullname, email, phone, username,password
    user_id +=1
    let obj = {
        id:user_id,
        fullname:fullname,
        email:email,
        phone:phone,
        username:username,
        password:password
    }

    return User.push(obj)

}


function getUsers() {
    return User;   
}

function getSortedUsersByName() {
    // getAllUser sorted list by names
    // google is your friend: "How to sort an array of objects by a property value?"
    return User.sort(function(a,b){
        if(a.fullname > b.fullname){
            return 1
        }else{
            return -1
        }
    })
}

function getUserByName(name) {
    // You should get single user object by name
    let result = User.find(function(x){
        return x.fullname == name
    })

    return result;

}

function deleteUserById(id) {
    // delete single user object by id
    let findUserIndex = User.findIndex(function(x){
        return x.id == id
    })
    //const index = User.findIndex(item => item.id === id);
//    console.log(User[findUserIndex]);
    //return findUserIndex
    User.splice(findUserIndex,1)
}


// CONSOLE RESULT HERE
// 
addUser('FAtilla','atilla@atilla.com','23232323','root','2323root')
addUser('Mehmet','atilla@atilla.com','23232323','root','2323root')
addUser('Veli','atilla@atilla.com','23232323','root','2323root')
addUser('Atilla','atilla@atilla.com','23232323','root','2323root')
//console.log("default",User)
//console.log("sorted",getSortedUsersByName())
//console.log(getUserByName('Veli'));
console.log(deleteUserById(4)); // deleted user id 4 > atilla
addUser('Atilla','atilla@atilla.com','23232323','root','2323root')
console.log(deleteUserById(4)); // deleted user id 4 > atilla
console.log(getUsers());

