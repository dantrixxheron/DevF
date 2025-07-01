import React from "react";
import Tweet from "./Tweet";
import "../assets/Styles/TweetList.css";

const TweetList = ({ tweets, onLike }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </div>
  );
};

export default TweetList;
