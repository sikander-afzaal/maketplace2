import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [connected, toggleConnect] = useState(false);
  const location = useLocation();
  const [currAddress, updateAddress] = useState("0x");
  const [scrollBg, setScrollBg] = useState(false);
  const [openHeader, setOpenHeader] = useState(false);
  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY > 100) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div className={`${styles.headerCont} ${scrollBg && styles.bgWhite}`}>
      <div
        className={`${styles.overlay} ${openHeader && styles.openOverlay}`}
        onClick={() => setOpenHeader(false)}
      ></div>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <input type="text" placeholder="search item here" />
        </div>
        <div className={styles.rightHeader}>
          <div
            className={`${styles.navLinks} ${openHeader && styles.openHeader}`}
          >
            <Link onClick={() => setOpenHeader(false)} to={"/"}>
              Explore
            </Link>
            <Link onClick={() => setOpenHeader(false)} to={"/"}>
              Activity
            </Link>
            <Link onClick={() => setOpenHeader(false)} to={"/"}>
              Create
            </Link>
          </div>
          <button className="cta-btn">
            {connected ? "Connected" : "Connect Wallet"}
          </button>
          <FontAwesomeIcon
            onClick={() => setOpenHeader((prev) => !prev)}
            className={styles.mobile}
            icon={openHeader ? faXmark : faBars}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
