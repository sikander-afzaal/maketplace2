import React from "react";
import {
  faImage,
  faMusic,
  faMagnifyingGlass,
  faEarthAmerica,
  faAddressCard,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Category.module.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
function Category() {
  const categories = [
    {
      icon: faImage,
      name: "Art",
    },
    {
      icon: faMusic,
      name: "Music",
    },
    {
      icon: faMagnifyingGlass,
      name: "Domain Names",
    },
    {
      icon: faEarthAmerica,
      name: "Virtual Worlds",
    },
    {
      icon: faAddressCard,
      name: "Trading Cards",
    },
    {
      icon: faGrip,
      name: "Collectibles",
    },
  ];
  return (
    <div className="container">
      <div className={styles.category}>
        <h1>Browse by category</h1>
        <div className={styles.catRow}>
          {categories.map((elem, idx) => {
            return <CategoryCard {...elem} key={idx + Date()} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
