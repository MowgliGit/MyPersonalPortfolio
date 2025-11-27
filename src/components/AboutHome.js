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
              I’m a front-end developer focused on building custom,
              high-performance websites from scratch —no templates, no CMS
              platforms. I help clients grow their online presence by building
              fast, user-friendly, and visually engaging websites with clean,
              responsive code tailored to their brand.
            </p>
            <p className={styles.paragraphText}>
              Whether you need a landing page, portfolio, or a full business
              website, I create solutions that are tailored to your brand and
              built to last. Beyond launch, I offer continued support and
              maintenance to ensure your site stays updated, secure, and running
              smoothly.
            </p>
          </div>
          <div className={styles.aboutImgBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/ChatGpt.png`}
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
