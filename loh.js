

function MakeNewTask(element){

  let newTask = GetTask(element);

  ClearInput(element);

  // console.log(newTask)

  MakeNewContainerForTask();

  FillNewContainer(newTask);

  document.getElementsByClassName('newContainer')[0].setAttribute('class', 'container');
}

function FillNewContainer(task) {
  let element = document.createElement('div');
  element.setAttribute('class', 'newMain__task');
  let newContainer = document.querySelector('newContainer');
  document.getElementsByClassName('newContainer')[0].appendChild(element);

  element = document.createElement('input');
  element.setAttribute('type', 'checkbox');
  element.setAttribute('name', 'task');
  newContainer = document.querySelector('newMain__task');
  document.getElementsByClassName('newMain__task')[0].appendChild(element);

  element = document.createElement('label');
  element.setAttribute('for', 'scales');
  element.innerHTML = task;
  newContainer = document.querySelector('newMain__task');
  document.getElementsByClassName('newMain__task')[0].appendChild(element);


  document.getElementsByClassName('newMain__task')[0].setAttribute('class', 'main__task');
}

/* _______________________________________________________________
  <div class="container">
    <div class="main__task">
      <input type="checkbox" name="task" checked>
      <label for="scales">task</label>
    </div>
__________________________________________________________________*/

function GetTask(element){
  return document.getElementsByClassName(element)[0].value;
}

function ClearInput(element){
  document.getElementsByClassName(element)[0].value = "";
}

function MakeNewContainerForTask() {
  let myContainer = document.createElement('div');
  myContainer.setAttribute('class', 'newContainer');

  let main = document.querySelector('main');

  main.appendChild(myContainer);

}
