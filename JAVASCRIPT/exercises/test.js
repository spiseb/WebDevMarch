var test = document.getElementById('test')

function alertBox(){
  alert('hello')
}

test.click()

test.onclick= function(){
    console.log('hello')
}

console.log(test)