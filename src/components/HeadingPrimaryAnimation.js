import React, { useState, useEffect } from "react";
import styles from "../styles/HeadingPrimaryAnimation.module.css";
import ButtonPrimary from "./ButtonPrimary";
import "../App.css";
import { Link } from "react-router-dom";

const HeadingPrimaryAnimation = () => {
  const headings = ["React Developer", "Web Designer", "Mowgli"];
  const [currentIndex, setCurrentIndex] = useState(0); // Track current heading index
  const [displayText, setDisplayText] = useState(""); // Display letters incrementally
  const [letterIndex, setLetterIndex] = useState(0); // Track current letter index

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (letterIndex < headings[currentIndex].length) {
        // Add the next letter
        setDisplayText((prev) => prev + headings[currentIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        // After finishing one heading, pause, then move to the next
        const delay = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % headings.length); // Loop to the next heading
          setDisplayText(""); // Reset for the next heading
          setLetterIndex(0); // Reset letter index
        }, 1500); // Pause before switching to the next heading
        return () => clearTimeout(delay);
      }
    }, 100); // Adjust typing speed (ms)

    return () => clearTimeout(timeout);
  }, [letterIndex, currentIndex, headings]);

  return (
    <div className={styles.containerHeadingPrimaryAnimation}>
      <div className={styles.headingBox}>
        <h1 className={styles.headingPrimary}>
          <span>Hi, I'm a freelancer</span>
        </h1>
        <div className={styles.headerAnimation}>
          <h1 className={styles.animatedHeadings}>{displayText}</h1>
        </div>
        <ButtonPrimary text="View My Works" link="/projects" />
      </div>
    </div>
  );
};

export default HeadingPrimaryAnimation;
