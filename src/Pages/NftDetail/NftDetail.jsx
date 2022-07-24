import React from "react";
import styles from "./NftDetail.module.css";
import img from "../../Assets/card-img.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function NftDetail() {
  return (
    <div className="container">
      <div className={styles.nftDetail}>
        <h1 className={styles.nftName}>Pink Ocean</h1>
        <div className={styles.imgDiv}>
          <img src={img} alt="" />
          <div className={styles.imgCol}>
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
        </div>
        <Splide
          options={{
            rewind: true,
            gap: "0rem",
            perPage: 1,
            type: "loop",
            pagination: true,
            drag: true,
            arrows: false,
            width: "100%",
          }}
          className={styles.mobileSlider}
        >
          <SplideSlide>
            <img src={img} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={img} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={img} alt="" />
          </SplideSlide>
        </Splide>
        <div className={styles.bottomNft}>
          <div className={styles.descNft}>
            <div className={styles.details}>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
            </div>
            <ul>
              <li>7 bd</li>
              <li>3 ba</li>
              <li>2,605 sqft</li>
              <li>16,552 sq. ft.</li>
              <li>HOA dues </li>
              <li>Active</li>
            </ul>
            <p className={styles.mainDesc}>
              So many Possibilities for improvements here. This home was once a
              Group Home for children. There are many bedrooms ... Has 2 Kitchen
              areas (one incomplete) ... MULTI-family possibilities... Needs TLC
              and SOLD AS-IS. We are looking at all reasonable offers.
            </p>
            <h6>Listed By Ava Weaver, Crown City Management Brokers</h6>
            <h1>Features</h1>
            <div className={styles.featureDiv}>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
              <div className={styles.col}>
                <h3>Beds</h3>
                <p>7</p>
              </div>
            </div>
            <div className={styles.btnDiv}>
              <button className="cta-btn">Get More Info</button>
              <button className="cta-btn">Start an offer</button>
            </div>
          </div>
          <div className={styles.stickyBox}>
            <div className={styles.boxWrapper}>
              <div className={styles.boxDesc}>
                <div className={styles.boxCol}>
                  <h3>List price</h3>
                  <p>$489,900</p>
                </div>
                <div className={styles.boxCol}>
                  <h3>Buy with Opendoor</h3>
                  <p>$489,900</p>
                </div>
              </div>
              <button className="cta-btn">Start an offer</button>
              <button className="cta-btn">Take a tour</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobBox}>
        <div className={styles.boxCol}>
          <h3>$489,900</h3>
          <p>List price $489,900</p>
        </div>
        <button className="cta-btn">Start an offer</button>
      </div>
    </div>
  );
}

export default NftDetail;
