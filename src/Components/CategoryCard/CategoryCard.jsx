import React from "react";
import styles from "./CategoryCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CategoryCard({ icon, name }) {
  return (
    <div className={styles.catCard}>
      <FontAwesomeIcon icon={icon} />
      <h3>{name}</h3>
    </div>
  );
}

export default CategoryCard;
