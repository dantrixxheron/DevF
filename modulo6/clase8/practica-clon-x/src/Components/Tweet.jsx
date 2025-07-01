//import { useState } from "react";
import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "../assets/Styles/Tweet.css";

const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="tweet">
      <div className="user-icon">
        <FaUserCircle size={40} />
        <h3>{tweet.user}</h3>
      </div>
      <p>{tweet.text}</p>

      <div className="tweet-actions">
        <button onClick={() => onLike(tweet.id)} className="btn-icon-like">
          {tweet.likes == 0 ? <MdFavoriteBorder /> : <MdFavorite />}{" "}
          {tweet.likes}
        </button>
      </div>
    </div>
  );
};

export default Tweet;
