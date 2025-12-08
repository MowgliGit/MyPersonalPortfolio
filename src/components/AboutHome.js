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
              ’m a front-end developer who builds custom, high-performance
              websites from the ground up — fully hand-coded, no templates, and
              no CMS dependencies. My focus is on transforming designs into
              fast, responsive, visually polished websites that provide a
              seamless user experience across all devices.
            </p>
            <p className={styles.paragraphText}>
              From landing pages to complete business websites, I deliver clean,
              scalable code that aligns with your brand and supports future
              growth. I also offer ongoing maintenance and support to ensure
              your site stays secure, optimized, and performing at its best.
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
