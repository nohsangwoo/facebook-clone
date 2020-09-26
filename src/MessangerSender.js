import React from "react";
import "./MessangerSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessangerSender() {
  const handleSubmit = (e) => {
    e.prevenDefault();
  };
  return (
    <div className="messangerSender">
      <div className="messageSender__top">
        <Avatar />
        <form action="">
          <input
            className="messageSender__input"
            placeholder={`what's on your mind?`}
          />
          <input placeholder="image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessangerSender;
