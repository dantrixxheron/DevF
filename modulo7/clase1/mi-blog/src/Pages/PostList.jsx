import React, { useEffect, useState } from "react";
import client from '../api/client';

export default function PostList(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.get('/post')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error("Error al obtener posts:", err));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
