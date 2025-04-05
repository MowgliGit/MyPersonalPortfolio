import styles from "../styles/Footer.module.css";
import "../App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <>
      <div className={`${styles.sectionFooter}`}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContact}>
            <h4 className={styles.headingQuaternary}>
              <span>Contact me</span>
            </h4>
            <div className={styles.copyRight}>
              <p>Copyright © {currentYear} All Rights Reserved. </p>
            </div>
          </div>

          <div className={styles.footerBtnLinks}>
            <button className={`${styles.btnFooterLink}`}>
              <i className={`fa-solid fa-envelope ${styles.navIcon}`}></i>
              <a
                href="mailto:themowglicoder@gmail.com"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                themowglicoder@gmail.com
              </a>
            </button>

            <div className={styles.contactBtns}>
              <button className={styles.btnFooterLink}>
                <a
                  href="https://www.upwork.com/freelancers/~01741f500be36f1cbe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  <i
                    className={`fa-brands fa-square-upwork ${styles.navIcon}`}
                  ></i>
                  Upwork
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
