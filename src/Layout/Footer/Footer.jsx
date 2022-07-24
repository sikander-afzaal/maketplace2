import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router";

import styles from "./Footer.module.css";
import logo from "../../Assets/logo.png";
function Footer() {
  const { pathname } = useLocation();
  const [padding, setPadding] = useState(false);
  useEffect(() => {
    if (pathname) {
      if (pathname.includes("NftDetail")) {
        setPadding(true);
      } else {
        setPadding(false);
      }
    }
  }, [pathname]);

  return (
    <div className={`${styles.footCont} ${padding && styles.paddingBot}`}>
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
          <img src={logo} alt="" />
          <p>© Copyright 2021 - Gigaland by Designesia</p>
        </div>
        <div className={styles.rightFooter}>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faRss} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
