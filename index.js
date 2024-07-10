// creating an array that maintains  a shopping list
const shoppingList= ["Laptop", "Smartphone", "Tablet", "Smartwatch", "Earbuds", "Digital Camera", "Bt Speaker"]

// creating a list & updating the DOM 
// we iterate through the array 
// create an element
//add content into the element
// we append the element to an existing element
// we create an update fuction that prevents items from recurring
function updateList(){
    document.getElementById('items').textContent=''
    shoppingList.map((item)=>{
        let itemList= document.createElement('li')
        itemList.textContent=item
        itemList.addEventListener('click',()=>{
            itemList.style.textDecoration='line-through'
        })
        document.getElementById('items').appendChild(itemList)
    })
}
updateList()

// we add an event listener by targeting the input
let itemName;
const addItem = document.querySelector('#inputItem')
addItem.addEventListener('input', (e)=>{
    itemName= e.target.value
})

// we add event listener to the form 
// we push the added item to our array
//we later update the list
const formSubmit = document.querySelector('#myForm')
formSubmit.addEventListener('submit',(e)=>{
     e.preventDefault()
     shoppingList.push(itemName)
     updateList()
})

const resetForm = document.getElementById('myForm')
resetForm.addEventListener('reset',(e)=>{
    e.preventDefault()
    shoppingList.remove()
    updateList
})

