// src/App.js
import React, { useState, useEffect } from "react";
import cookie from "./images/cookie.png";
import brainrot from "./images/brainrot.png";
import StoreItem from "./components/StoreItem";
import InventoryItem from "./components/InventoryItem";
import Modal from "./components/Modal";
import UserID from "./components/UserID";
import LeaderboardModal from "./components/LeaderboardModal"; // Import the LeaderboardModal component
import questions from "./data/questions";
import axios from "axios";

function App() {
  const [cookies, setCookies] = useState(0);
  const [cookieStyle, setCookieStyle] = useState({
    width: "256px",
    height: "256px",
  });
  const [cookieTextStyle, setCookieTextStyle] = useState({
    color: "black",
    fontSize: "24px",
  });
  const [cookieTextClasses, setCookieTextClasses] = useState(
    "mx-auto mt-6 text-3xl p-6"
  );
  const [id, setId] = useState("" + Math.floor(Math.random() * 1000000000));
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false); // Add state for leaderboard modal
  const [leaderboardData, setLeaderboardData] = useState(false);

  const [items, setItems] = useState([
    {
      name: "Cursor",
      description: "Clicks once every 10 seconds",
      cost: 10,
      quantity: 0,
    },
    {
      name: "Grandma",
      description: "Produces 1 cookie per second",
      cost: 100,
      quantity: 0,
    },
    {
      name: "Factory",
      description: "Produces 10 cookies per second",
      cost: 500,
      quantity: 0,
    },
    {
      name: "Mine",
      description: "Produces 50 cookies per second",
      cost: 2000,
      quantity: 0,
    },
    {
      name: "Bank",
      description: "Produces 100 cookies per second",
      cost: 5000,
      quantity: 0,
    },
    {
      name: "Temple",
      description: "Produces 500 cookies per second",
      cost: 20000,
      quantity: 0,
    },
  ]);

  useEffect(() => {
    // Get the current time in milliseconds
    const now = Date.now();
    const date = new Date(now);
    const seconds = date.getSeconds();

    if (seconds === 30) {
      try {
        axios.post("https://cc.brandingandbeyond.org/update", { id, cookies });
      } catch (error) {
        console.log(error);
      }
    }
  }, [id, cookies]);

  useEffect(() => {
    const run = async () => {
      try {
        const result = await axios.get(
          "https://cc.brandingandbeyond.org/leaderboard"
        );

        setLeaderboardData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    run();
  }, [showLeaderboard]);

  useEffect(() => {
    const intervalIds = items
      .map((item) => {
        if (item.quantity > 0) {
          const intervalTime = item.name === "Cursor" ? 10000 : 1000;
          return setInterval(
            () =>
              setCookies(
                (c) => c + item.quantity * getCookiesPerInterval(item.name)
              ),
            intervalTime
          );
        }
        return null;
      })
      .filter((id) => id !== null);

    return () => intervalIds.forEach(clearInterval);
  }, [items]);

  const getCookiesPerInterval = (itemName) => {
    switch (itemName) {
      case "Cursor":
        return 1;
      case "Grandma":
        return 1;
      case "Factory":
        return 10;
      case "Mine":
        return 50;
      case "Bank":
        return 100;
      case "Temple":
        return 500;
      default:
        return 0;
    }
  };

  const handleClick = () => {
    setCookieStyle({ width: "300px", height: "300px", margin: "100px" });
    setCookieTextStyle({ fontSize: "80px" });
    setCookieTextClasses(cookieTextClasses + " marquee");

    setTimeout(() => {
      setCookieStyle({ width: "256px", height: "256px" });
    }, 100);

    setTimeout(() => {
      setCookieStyle({ width: "256px", height: "256px" });
      setCookieTextStyle({ fontSize: "24px" });
      setCookieTextClasses(cookieTextClasses.substring(0, 25));
    }, 1500);

    setCookies(cookies + 1);
  };

  const handlePurchase = (item) => {
    if (cookies >= item.cost) {
      setCurrentItem(item);
      setCurrentQuestion(selectRandomQuestion());
      setShowModal(true);
    }
  };

  const selectRandomQuestion = () => {
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const handleModalSubmit = (answer) => {
    setShowModal(false);

    const isCorrect =
      answer.trim().toLowerCase() ===
      currentQuestion.answer.trim().toLowerCase();

    if (isCorrect) {
      setItems(
        items.map((i) =>
          i.name === currentItem.name
            ? {
                ...i,
                quantity: i.quantity + 1,
                cost: Math.round(i.cost + i.cost * 0.1),
              }
            : i
        )
      );
    }

    setCookies(cookies - currentItem.cost);
  };

  return (
    <div className="App background-animate">
      <header className="text-5xl text-center marquee font-sans flex">
        <span className="blink">
          <img src={brainrot} alt="" />
        </span>
        MR GAGNONS CRAZY CALCULUS COOKIE CLICKER!!!
        <span className="blink">
          <img src={brainrot} alt="" />
        </span>
      </header>
      <div className="grid grid-cols-3">
        <div className="border-4 border-black flex flex-col">
          <button
            onClick={() => setShowLeaderboard(true)}
            className=" p-2 bg-green-500 text-white"
          >
            Show Leaderboard
          </button>
          <div className="mx-auto">
            <UserID id={id} setId={setId} /> {/* Add UserID component here */}
          </div>
          <h1 style={cookieTextStyle} className={cookieTextClasses}>
            {cookies} cookies
          </h1>
          <img
            className="hover:cursor-pointer w-64 h-64 mt-20 mx-auto transition-all duration-75"
            src={cookie}
            style={cookieStyle}
            onClick={handleClick}
            alt="cookie"
          />
        </div>

        <div className="border-y-4 border-black">
          <h2 className="text-3xl font-bold text-center">Your Cool Stuff</h2>
          {items
            .filter((item) => item.quantity > 0)
            .map((item, index) => (
              <InventoryItem key={index} item={item} />
            ))}
        </div>

        <div className="border-4 border-black">
          <h2 className="text-3xl font-bold text-center">Store</h2>
          {items.map((item, index) => (
            <StoreItem key={index} item={item} onPurchase={handlePurchase} />
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
        question={currentQuestion}
      />
      <LeaderboardModal
        show={showLeaderboard}
        onClose={() => setShowLeaderboard(false)}
        leaderboardData={leaderboardData}
      />
    </div>
  );
}

export default App;
