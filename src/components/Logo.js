import React, { useEffect, useRef } from "react";
import styles from "../styles/Logo.module.css";
import ButtonPrimary from "./ButtonPrimary";
import { Link } from "react-router-dom";
import "../App.css";
const logoImages = [
  { image: "htmlLogo.png" },
  { image: "logoCss.png" },
  { image: "logoBootstrap.png" },
  { image: "logoJS.png" },
  { image: "logoReact.png" },
  { image: "logoWebDesign.png" },
  { image: "logoGitHub.png" },
];

export default function Logo() {
  const sliderRef = useRef(null);
  const slideInterval = useRef(null);

  useEffect(() => {
    let position = 0;

    const totalImages = logoImages.length;
    const totalClones = totalImages * 2;
    const slideWidth = 120;

    slideInterval.current = setInterval(() => {
      position -= slideWidth;

      if (Math.abs(position) >= slideWidth * totalImages) {
        position = 0;
        sliderRef.current.style.transition = "none"; // Disable animation for seamless loop
        sliderRef.current.style.transform = `translateX(${position}px)`;
      } else {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(${position}px)`;
      }
    }, 2000);

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderLogo} ref={sliderRef}>
          {[...logoImages, ...logoImages].map((logo, index) => (
            <div className={styles.logoItem} key={index}>
              <img
                className={styles.logoImg}
                src={`${process.env.PUBLIC_URL}/images/${logo.image}`}
                alt={logo.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sectionCV}>
        <ButtonPrimary
          text="Check Out My CV"
          link="https://mowgligit.github.io/CV-with-bootstrap/"
        />
        <ButtonPrimary
          text="My Interactive Resume"
          link="https://mowgligit.github.io/website-portfolio-grid-about-my-work-and-me/"
        />
      </div>
    </>
  );
}
