const API_URL = 'http://localhost:2000/todos';

document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoList = document.getElementById('todo-list');

  // Fetch and display tasks
  function fetchTodos() {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        return response.json();
      })
      .then((todos) => {
        todoList.innerHTML = '';
        todos.forEach((todo) => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${todo.title}: ${todo.description}</span>
            <button class="delete-btn" data-id="${todo.id}">Delete</button>
          `;
          todoList.appendChild(li);
        });

        // Attach event listeners to the delete buttons
        document.querySelectorAll('.delete-btn').forEach((button) => {
          button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            deleteTodo(id);
          });
        });
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }

  // Add a new task
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    if (!title || !description) {
      alert('Please provide both title and description');
      return;
    }

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add task');
        }
        return response.json();
      })
      .then(() => {
        fetchTodos(); // Refresh the list
        todoForm.reset(); // Clear the form
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  });

  // Delete a task
  function deleteTodo(id) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete task');
        }
        fetchTodos(); // Refresh the list
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  }

  // Initial fetch
  fetchTodos();
});
