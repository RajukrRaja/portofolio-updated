import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { io } from "socket.io-client";
import axios from "axios";
import { FaComment, FaThumbsUp, FaEdit, FaTrash } from "react-icons/fa";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './Blog.css';

// Custom styles
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    marginTop: "2cm",
    maxWidth: "900px",
 
    
  },
  postContainer: {
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
    position: "relative",
  },
  commentBox: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "10px",
    backgroundColor: "#f1f1f1",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    background: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    background: "#0056b3",
  },
  emojiPicker: {
    position: "absolute",
    bottom: "60px",
    right: "20px",
  },
};

// Socket.IO connection
const socket = io("http://localhost:5000", { transports: ["websocket", "polling"], reconnection: true });

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newComments, setNewComments] = useState({});
  const [likes, setLikes] = useState({});
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts");
        if (Array.isArray(res.data)) {
          setPosts(res.data);
        } else {
          console.error("Fetched data is not an array:", res.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();

    // Socket event listeners
    socket.on("newPost", (post) => setPosts((prev) => [post, ...prev]));
    socket.on("newComment", (postId, comment) => {
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, comments: [...post.comments, comment] } : post
        )
      );
    });
    socket.on("likeUpdate", (postId) => {
      setLikes((prev) => ({ ...prev, [postId]: (prev[postId] || 0) + 1 }));
    });

    return () => {
      socket.off("newPost");
      socket.off("newComment");
      socket.off("likeUpdate");
    };
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      try {
        const res = await axios.post("http://localhost:5000/api/posts", { content: newPost });
        setNewPost("");
        socket.emit("addPost", res.data);
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };

  const handleLike = (postId) => {
    socket.emit("like", postId);
  };

  const handleEditPost = async (postId) => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${postId}`, { content: editedContent });
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, content: editedContent } : post
        )
      );
      setIsEditing(null);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`);
      setPosts((prev) => prev.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Adding comment functionality
  const handleCommentSubmit = async (e, postId) => {
    e.preventDefault();
    const comment = newComments[postId]?.trim();
    if (comment) {
      try {
        const res = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, { text: comment });
        socket.emit("addComment", postId, res.data);
        setNewComments((prev) => ({ ...prev, [postId]: "" }));
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  const handleCommentChange = (e, postId) => {
    setNewComments((prev) => ({ ...prev, [postId]: e.target.value }));
  };

  const handleEmojiSelect = (emoji) => {
    setNewPost((prev) => prev + emoji.native);
    setIsEmojiPickerOpen(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setNewPost((prev) => prev + `![image](${res.data.url})`);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handlePostSubmit} style={{ marginBottom: "20px" }}>
        <ReactQuill
          value={newPost}
          onChange={setNewPost}
          placeholder="Write a new post..."
        />
        <button type="submit" style={styles.button}>Submit Post</button>
        <button onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)} style={styles.button}>
          😊 Add Emoji
        </button>
        <input type="file" onChange={handleImageUpload} style={{ marginTop: "10px" }} />
        {isEmojiPickerOpen && <Picker onSelect={handleEmojiSelect} style={styles.emojiPicker} />}
      </form>

      {Array.isArray(posts) && posts.map((post) => (
        <motion.div key={post._id} style={styles.postContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {isEditing === post._id ? (
            <div>
              <ReactQuill value={editedContent} onChange={setEditedContent} />
              <button onClick={() => handleEditPost(post._id)} style={styles.button}>Save</button>
            </div>
          ) : (
            <>
              <h2 dangerouslySetInnerHTML={{ __html: post.content }}></h2>
              <motion.button style={styles.button} onClick={() => handleLike(post._id)}>
                <FaThumbsUp /> Like ({likes[post._id] || post.likes})
              </motion.button>
              <button onClick={() => { setIsEditing(post._id); setEditedContent(post.content); }} style={styles.button}>
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDeletePost(post._id)} style={styles.button}>
                <FaTrash /> Delete
              </button>
            </>
          )}
          <h3>Comments:</h3>
          {post.comments.map((comment, index) => (
            <div key={index} style={styles.commentBox}>
              <p><strong>{comment.user}</strong>: {comment.text}</p>
              <span>{new Date(comment.timestamp).toLocaleTimeString()}</span>
            </div>
          ))}
          <form onSubmit={(e) => handleCommentSubmit(e, post._id)} style={{ marginTop: "15px" }}>
            <input
              type="text"
              value={newComments[post._id] || ""}
              onChange={(e) => handleCommentChange(e, post._id)}
              placeholder="Add a comment"
              style={{ width: "80%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
            />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </motion.div>
      ))}
    </div>
  );
};

export default Blog;
