import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import ButtonSecondary from "./ButtonSecondary";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function AboutMe({ isMenuVisible, toggleMenu }) {
  return (
    <section className={`section ${styles.sectionAboutMe}`}>
      <div className="container">
        {isMenuVisible && (
          <Navigation isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        )}
        <div className="subTitle">
          <h3 className={styles.headingTertiary}>About me</h3>
          <span className={styles.line}></span>
        </div>
        <div className="grid grid--2-cols">
          <div className={styles.aboutBoxText}>
            <h3 className={styles.headingQuaternary}>
              Hi, I'm <span>Marina</span>
            </h3>
            <p className={styles.paragraphText}>
              I’m a front-end developer specializing in custom, high-performance
              websites—no templates, no CMS. I build fast, responsive, and
              visually engaging user experiences with clean, modern code
              tailored to each client’s brand.
            </p>

            <p className={styles.paragraphText}>
              Whether you need a landing page, portfolio, or a full business
              website, I deliver solutions that are built to last. I also
              provide ongoing support and maintenance to keep your site updated,
              secure, and performing at its best.
            </p>
          </div>
          <div className={styles.aboutImgBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/ChatGPT.png`}
              className={styles.aboutMeImg}
              alt="aboutMeImg"
            />
            {/* <p className={styles.textNumber}>
              Years of <span>Experience</span>
            </p> */}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonSecondary text="Learn More About Me" link="/about" />
        </div>
      </div>
    </section>
  );
}
