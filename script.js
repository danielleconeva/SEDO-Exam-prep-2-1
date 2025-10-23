// Base functionality: add task, toggle complete, delete on double-click

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const text = input.value;
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
  input.value = '';
});

// Toggle complete
list.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

// Delete on double-click
list.addEventListener('dblclick', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

// Clear all completed tasks
const clearBtn = document.getElementById('clear-completed-btn');
clearBtn.addEventListener('click', () => {
  document.querySelectorAll('#task-list li.completed')
    .forEach(li => li.remove());
});