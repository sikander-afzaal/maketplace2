import React from "react";
import styles from "./styles/Collection.module.css";
import pic from "../../Assets/card-profile.jpg";
import cardBg from "../../Assets/card-img.jpg";
import Card from "../../Components/Card.jsx/Card";

function TopCollection() {
  const cardData = [
    {
      profileImg: pic,
      cardBg: cardBg,
      time: "9/15/2022 3:00 PM",
      name: "Pinky Ocean",
      likes: 50,
    },
    {
      profileImg: pic,
      cardBg: cardBg,
      time: "9/15/2022 3:00 PM",
      name: "Pinky Ocean",
      likes: 50,
    },
    {
      profileImg: pic,
      cardBg: cardBg,
      time: "9/15/2022 3:00 PM",
      name: "Pinky Ocean",
      likes: 50,
    },
    {
      profileImg: pic,
      cardBg: cardBg,
      time: "9/15/2022 3:00 PM",
      name: "Pinky Ocean",
      likes: 50,
    },
    {
      profileImg: pic,
      cardBg: cardBg,
      time: "9/15/2022 3:00 PM",
      name: "Pinky Ocean",
      likes: 50,
    },
    {
      profileImg: pic,
      cardBg: cardBg,
      time: "9/15/2022 3:00 PM",
      name: "Pinky Ocean",
      likes: 50,
    },
  ];
  return (
    <div className={`container ${styles.trendingCont}`}>
      <div className={styles.collection}>
        <h1>Trending Collection</h1>
        <div className={styles.cardsGrid}>
          {cardData.map((card, idx) => {
            return <Card {...card} key={idx + Date()} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopCollection;
