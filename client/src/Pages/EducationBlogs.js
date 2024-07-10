import React, { useEffect, useState } from 'react';
import Post from '../post';

export default function EducationBlogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/posts?category=education');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching education posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Education Blogs</h2>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} {...post} />)
      ) : (
        <p>No posts found in this category.</p>
      )}
    </div>
  );
}