const input=document.querySelector('#txtTaskName');

const taskList= document.querySelector('#task-list');

const form = document.querySelector('form');

const ul = document.querySelector('#task-list');

let items;

const deleteBtn= document.querySelector('#btnDeleteAll');

loadTask();

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addNewTask);

    taskList.addEventListener('click', deleteSingleItem);

    deleteBtn.addEventListener('click', deleteTasksAll);
    
}

function loadTask(){
    items=getItemsFromLS();
    items.forEach(function(item){
        createTask(item);
    });
}


function createTask(text){
 
    const li= document.createElement('li');
    li.appendChild(document.createTextNode(text));
    li.className='list-group-item list-group-item-secondary';
    
    const a = document.createElement('a');

    a.className='delete-item float-end';
    a.setAttribute('href', '#');
    a.innerHTML='<i class="fa fa-times"></i>';
    li.appendChild(a);
    
    taskList.appendChild(li);
    
}


function addNewTask(e){
    if(input.value === ''){
        alert('Cannot be empty');
    }else{
        createTask(input.value);
    
    
        setItemToLS(input.value);
    }
    
    

    

    input.value='';
    e.preventDefault();
}


function deleteItemFromLS(text){
    items=getItemsFromLS();
    items.forEach(function(item, index){
        console.log(item)
        if(item === text){
            items.splice(index, 1);
        }
    });
    console.log(items)
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteSingleItem(e){
    
    if(e.target.className === 'fa fa-times'){
        if(confirm('are you sure?')){
            e.target.parentElement.parentElement.remove();

            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
        

    }
    e.preventDefault();
}


function getItemsFromLS(){

    if (localStorage.getItem('items') === null){
        items=[];
    }else{
        items=JSON.parse(localStorage.getItem('items'));
        console.log(items);
    }
    
    return items;
}

function setItemToLS(text){
    items=getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
    
}



function deleteTasksAll(e){
    e.preventDefault();
    taskList.innerHTML='';

}