let todoList = [
   {
      item: 'Wake up early',
      dueDate: '14/2/2024'
   },
   {
      item: 'Go to College',
      dueDate: '14/2/2024'
   }
];
displayItems();
// const butn = document.querySelector('button');



function addTodo() {
   const inputElement = document.querySelector('#todo-input');
   const dateElement = document.querySelector('#todo-date');
   let todoDate = dateElement.value;
   let todoItem = inputElement.value;
   todoList.push({
      item: todoItem,
      dueDate: todoDate
   });
   inputElement.value = " ";
   dateElement.value = " ";

   displayItems();
}

function displayItems() {
   let containerElemet = document.querySelector('#todo-container');
   let newHtml = '';
   for (let i = 0; i < todoList.length; i++) {
      let item = todoList[i].item;
      let dueDate = todoList[i].dueDate;
      newHtml += `

<span>${item}</span>
<span>${dueDate}</span>
<button id="but2" class="but-delete" onclick=" todoList.splice(${i}, 1); displayItems();" 
>Delete</button>


`;

   }
   containerElemet.innerHTML = newHtml;
}


