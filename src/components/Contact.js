import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "../styles/Contact.module.css";
import "../App.css";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <div className={styles.mainContactPage}>
        <section className={`${styles.sectionContact} `}>
          <Navigation />
          <div className={styles.containerContact}>
            <div>
              <h2 className={styles.headingSecondary}>Let's work together!</h2>
              <p className={styles.paragraphPrimaryContact}>
                If you'd like to discuss your project, feel free to contact me
                directly through <strong>Upwork</strong>.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
