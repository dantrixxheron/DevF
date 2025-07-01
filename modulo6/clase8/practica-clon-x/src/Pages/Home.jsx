import { useState, useEffect } from "react";

import TweetList from "../Components/TweetList";
import TweetForm from "../Components/TweetForm";
import { MdAddCircle, MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Home.css";

const Home = ({ user, logout }) => {
  const navigate = useNavigate();
  const [tweets, setTweets] = useState([]);
  const [showFormTweet, setShowFormTweet] = useState(false);
  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      user: user.username,
      text,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };
  const handleNav = () => {
    navigate("/profile");
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Bienvenido a Twitter</h1>
        {user && (
          <div className="user-controls">
            <p>Hola, {user.username}!</p>
            <button className="btn-icon" onClick={() => handleNav()}>
              <FaUserCircle />
            </button>
            <button className="btn-icon" onClick={logout}>
              <MdLogout />
            </button>
          </div>
        )}
      </div>
      <button
        className="float-right btn-icon"
        onClick={() => setShowFormTweet(!showFormTweet)}
      >
        <MdAddCircle />
      </button>
      {showFormTweet && <TweetForm onAddTweet={addTweet} />}
      <h2>Últimos Tweets</h2>
      {tweets.length === 0 && !showFormTweet && (
        <p>No hay tweets. ¡Sé el primero en twittear!</p>
      )}
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home;
