// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Conditional branching to check if the task input is not empty
    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value;
        if (task) {
          const newTask = `<li>${task} <button class="cancelBtn">Cancel</button></li>`;
          taskList.insertAdjacentHTML('beforeend', newTask); // Using the insertAdjacentHTML method as 
        // we are using an array method to add new tasks to the list
        taskInput.value = '';
      }
    });

    // Event delegation
    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('cancelBtn')) {
          event.target.parentElement.remove();
        }
      });
  
    // Fetching external data using Fetch
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    const fetchedTask = `<li>${data.title} <button class="cancelBtn">Cancel</button></li>`;
    taskList.insertAdjacentHTML('beforeend', fetchedTask);
  });
});