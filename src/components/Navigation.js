import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { useState } from "react";
import "../App.css";
import {
  logoGithub,
  logoLinkedin,
  personCircleOutline,
  logoInstagram,
} from "ionicons/icons";
import "../App.css";
export default function Navigation() {
  const menuItems = [
    { index: "00", name: "Home", link: "/" },
    { index: "01", name: "About", link: "/about" },
    { index: "02", name: "Services", link: "/services" },
    { index: "03", name: "Projects", link: "/projects" },
    { index: "05", name: "Pricing", link: "/pricing" },
    { index: "06", name: "Contact", link: "/contact" },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isMenuVisible) {
      // Start animation before hiding menu
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuVisible(false);
        setIsAnimating(false);
      }, 1100); // Match the CSS animation duration (1.1s)
    } else {
      setIsMenuVisible(true);
    }
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.logoBox}>
        <h6 className={styles.logo}>Mowgli</h6>
      </div>
      {isMenuVisible && (
        <nav
          className={`${styles.nav} ${
            isAnimating ? styles.navHidden : styles.navOpen
          }`}
        >
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.navigationIconsBox}>
            {/* <a
              href="https://www.upwork.com/freelancers/~01741f500be36f1cbe"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <i className={`fa-brands fa-square-upwork ${styles.navIcon}`}></i>
              Upwork
            </a> */}
            <a
              href="https://github.com/MowgliGit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon
                name="logo-github"
                className={styles.navIcon}
              ></ion-icon>
            </a>

            <a href="https://app.netlify.com/teams/marina-jovanova17/sites">
              <ion-icon
                name="person-circle-outline"
                className={styles.navIcon}
              ></ion-icon>
            </a>
            <a href="https://www.instagram.com/mowgli_codding/?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D">
              <ion-icon
                name="logo-instagram"
                className={styles.navIcon}
              ></ion-icon>
            </a>
          </div>
        </nav>
      )}

      <div>
        {!isMenuVisible && (
          <button className={styles.menuBox} onClick={toggleMenu}>
            <ion-icon name="menu" className={styles.menuBtn}></ion-icon>
          </button>
        )}

        {isMenuVisible && (
          <button className={styles.menuBox} onClick={toggleMenu}>
            <ion-icon name="close" className={styles.closeBtn}></ion-icon>
          </button>
        )}
      </div>
    </div>
  );
}
