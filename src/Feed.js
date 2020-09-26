import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessangerSender from "./MessangerSender";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessangerSender />
    </div>
  );
}

export default Feed;
