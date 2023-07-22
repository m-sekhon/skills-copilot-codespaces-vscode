// Create web server application

// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Import the CORS module
const cors = require('cors');

// Import the body-parser module
const bodyParser = require('body-parser');

// Import the comments module
const comments = require('./comments');

// Use the CORS module
app.use(cors());

// Use the body-parser module
app.use(bodyParser.json());

// Use the express.static middleware
app.use(express.static('public'));

// GET /comments
app.get('/comments', (req, res) => {
  comments.getAll().then(comments => {
    res.json(comments);
  });
});

// POST /comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.create(newComment).then(comment => {
    res.json(comment);
  });
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const updatedComment = req.body;
  comments.update(id, updatedComment).then(comment => {
    res.json(comment);
  });
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.delete(id).then(() => {
    res.json({});
  });
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Web Server is running on port 3000');
});


