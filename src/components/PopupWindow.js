import React, { useEffect, useState } from "react";
import styles from "../styles/PopupWindow.module.css";
import ButtonSection from "./ButtonSection";
import "../App.css";

const PopupWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("popupOpen");
    } else {
      document.body.classList.remove("popupOpen");
    }
  }, [isOpen]);

  return (
    <div className={styles.supportSection}>
      {/* Button to open popup */}
      <div>
        <ButtonSection
          text="Need More Support"
          link="#popupOverlay"
          onClick={() => setIsOpen(true)} // Ensure onClick is correctly passed
        />
      </div>

      {/* Popup Window */}
      {isOpen && (
        <section className={styles.popupOverlay} id="popupOverlay">
          <div className={styles.popupContainer}>
            <div className={styles.popupContent}>
              <h3 className={styles.headingQuarternary}>
                Ongoing Support & Updates
              </h3>

              <ul className={styles.cardList}>
                <li className={styles.cardListItem}>
                  <span>
                    <ion-icon
                      name="checkmark-done-outline"
                      className={styles.icon}
                    ></ion-icon>
                  </span>
                  Minor: Text, images, links and small CSS tweaks.
                </li>
                <li className={styles.cardListItem}>
                  <span>
                    <ion-icon
                      name="checkmark-done-outline"
                      className={styles.icon}
                    ></ion-icon>
                  </span>
                  Major: Layout changes, new sections, and functionality
                  updates.
                </li>
                <li className={styles.cardListItem}>
                  <span>
                    <ion-icon
                      name="checkmark-done-outline"
                      className={styles.icon}
                    ></ion-icon>
                  </span>
                  Bug fixes and performance optimization
                </li>
                <li className={styles.cardListItem}>
                  <span>
                    <ion-icon
                      name="checkmark-done-outline"
                      className={styles.icon}
                    ></ion-icon>
                  </span>
                  Feature additions and enhancements
                </li>
              </ul>
              <p className={styles.paragraphText}>
                <strong>Pricing:</strong> Monthly fee, starting at{" "}
                <strong>$50/month</strong>, depending on the complexity and
                frequency of updates.
              </p>
              {/* Close button */}
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PopupWindow;
