
function NewContainerForTask() {
  let myContainer = document.createElement('div');
  myContainer.setAttribute('class', 'container');

  let main = document.querySelector('main');

  main.appendChild(myContainer);
}
/* _______________________________________________________________
  <div class="container">
    <div class="main__task">
      <input type="checkbox" name="task" checked>
      <label for="scales">task</label>
    </div>
__________________________________________________________________*/
