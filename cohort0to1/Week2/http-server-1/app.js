const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML app for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET all todos
app.get('/todos', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading todos.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(JSON.parse(data));
  });
});

// POST a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // Unique random ID
    title: req.body.title,
    description: req.body.description,
  };

  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading todos.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const todos = JSON.parse(data || '[]'); // Handle empty file case
    todos.push(newTodo);

    fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.error('Error writing to todos.json:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json(newTodo);
    });
  });
});

// DELETE a todo
app.delete('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading todos.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const todos = JSON.parse(data || '[]');
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(req.params.id));

    if (todoIndex === -1) {
      console.error(`Task with ID ${req.params.id} not found`);
      return res.status(404).json({ error: 'Task not found' });
    }

    todos.splice(todoIndex, 1); // Remove the task

    fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.error('Error writing to todos.json:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(200).send();
    });
  });
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).send({ error: 'Route not found' });
});

module.exports = app;
