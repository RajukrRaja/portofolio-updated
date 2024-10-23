// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const postRoutes = require('./Routes/post.route');

dotenv.config(); // Load environment variables

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, { 
  cors: { 
    origin: "http://localhost:3000",  // Allow frontend origin
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes); // Route for posts

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Socket.IO events
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('addPost', (post) => {
    io.emit('newPost', post); // Broadcast to all clients
  });

  socket.on('addComment', (postId, comment) => {
    io.emit('newComment', postId, comment); // Broadcast new comment
  });

  socket.on('like', (postId) => {
    io.emit('likeUpdate', postId); // Broadcast like update
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
