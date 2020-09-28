import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

// firebase db에서 data값 가져오는방법
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const postsArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsArray);
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
