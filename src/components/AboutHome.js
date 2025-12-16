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
              I’m a front-end developer building custom, high-performance
              websites from the ground up — fully hand-coded, with no templates
              and no CMS. I turn approved designs into pixel-accurate, fast, and
              responsive front-end builds using HTML, CSS, JavaScript, and
              React.
            </p>
            <p className={styles.paragraphText}>
              My work focuses on clean, scalable code that performs reliably
              across all devices. I work with agencies and clients who need
              production-ready front ends and provide ongoing support to keep
              websites optimized, stable, and easy to maintain as they grow.
            </p>
          </div>
          <div className={styles.aboutImgBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/ChatGpt.png`}
              className={styles.aboutMeImg}
              alt="aboutMeImg"
            />
          </div>
        </div>
        <div className={styles.aboutBoxText}>
          <p className={styles.paragraphText}>
            I also handle full implementation — front-end development,
            performance optimization, basic technical SEO, and hosting setup —
            ensuring each website launches fast and functions flawlessly. With
            40+ custom-coded projects, I help teams turn design systems into
            stable, scalable, production-ready interfaces.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonSecondary text="Learn More About Me" link="/about" />
        </div>
      </div>
    </section>
  );
}
