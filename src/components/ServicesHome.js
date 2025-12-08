import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import ButtonSecondary from "./ButtonSecondary";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function ServicesHome({ isMenuVisible, toggleMenu }) {
  return (
    <section className={`section ${styles.sectionServicesHome}`}>
      <div className="container">
        {isMenuVisible && (
          <Navigation isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        )}
        <div className="subTitle">
          <h3 className={styles.headingTertiary}>Services</h3>
          <span className={styles.line}></span>
        </div>
        <div className="grid grid--2--cols">
          <div className={styles.aboutImgBoxServices}>
            <img
              src={`${process.env.PUBLIC_URL}/images/responsive.webp`}
              className={`${styles.servicesImg} ${styles.servicesImgOne}`}
              alt="responsiveImage"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/webdevelopment.jpg`}
              className={`${styles.servicesImg} ${styles.servicesImgTwo}`}
              alt="webdevelopmentImage"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/webdesign.jpeg`}
              className={`${styles.servicesImg} ${styles.servicesImgThree}`}
              alt="webdesignImage"
            />
          </div>
          <div
            className={`
            ${styles.servicesAboutBoxText} ${styles.aboutBoxText}`}
          >
            <p className={styles.paragraphText}>
              As a front-end developer, I deliver clean, custom-coded websites
              with modern design, responsive layouts, and optimized performance.
              My services include front-end development, unique web design,
              on-page SEO, and ongoing updates to keep your site fast, secure,
              and up to date.
            </p>

            <p className={styles.paragraphText}>
              From visually engaging layouts to well-structured UI systems and
              mobile-first design, every project is built for smooth navigation,
              reliability, and a high-quality user experience across all
              devices.
            </p>
          </div>
        </div>
        <div className={`${styles.btnSecondaryBox} ${styles.buttonWrapper}`}>
          <ButtonSecondary text="Learn More About Me" link="/services" />
        </div>
      </div>
    </section>
  );
}
