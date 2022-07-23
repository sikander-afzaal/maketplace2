import React from "react";
import styles from "./styles/Hero.module.css";
import img from "../../Assets/hero-img.png";
function Hero() {
  return (
    <div className={`container ${styles.heroCont}`}>
      <div className={styles.hero}>
        <div className={styles.leftHero}>
          <h4>GIGALAND MARKET</h4>
          <h1>Create, sell or collect digital items.</h1>
          <p>
            Unit of data stored on a digital ledger, called a blockchain, that
            certifies a digital asset to be unique and therefore not
            interchangeable
          </p>
          <div className={styles.btnDiv}>
            <button className="cta-btn">Explore</button>
            <button className="cta-btn">Create</button>
          </div>
        </div>
        <div className={styles.rightHero}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
