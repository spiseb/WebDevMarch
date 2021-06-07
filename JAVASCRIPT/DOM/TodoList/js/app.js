// NAVIGATION IN DOM TREE
let result;
const CardBody = document.querySelectorAll('.card-body')[1]
//result = CardBody.children
// result = CardBody.children[4] // list-group
// result = CardBody.children[4].children // li elements
// result = CardBody.children[4].children[0] // first li element
// CardBody.children[4].children[0].innerHTML = "INTECBRUSSEL"

// const findme = document.querySelector('.findme')
// result = findme
// result = findme.parentElement.parentElement.parentElement
//result.innerHTML="hello"


const listofTodos = document.querySelectorAll('.list-group-item:nth-child(even)')

listofTodos.forEach(function(li){
    li.classList.add('bg-secondary')
})


const TodosListBody = document.querySelector('.list-group')

// TodosListBody.innerHTML=`
// <li class="list-group-item d-flex justify-content-between">
//                         My todo title
//                         <a href="#" class="delete-item">
//                             <i class="fa fa-remove"></i>
//                         </a>
//                     </li>

// `

// child nodes


result = CardBody.firstElementChild
result = CardBody.childElementCount
result = CardBody.lastElementChild


let redBtn = document.querySelector('.btn-danger');

// next sibling
//result = single_li.nextElementSibling.nextElementSibling

// previous sibling
result = redBtn.previousElementSibling

let card=document.querySelector('.card').lastElementChild

result = card.previousElementSibling

console.log(result)