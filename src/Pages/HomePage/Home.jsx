import React from "react";
// import Category from "./Category";
import Hero from "./Hero";
import styles from "./styles/Home.module.css";
import TopCollection from "./TopCollection";
import TrendingCollection from "./TrendingCollection";
function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <TopCollection />
      <TrendingCollection />
      {/* <Category /> */}
    </div>
  );
}

export default Home;
