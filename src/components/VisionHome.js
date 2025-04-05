import ButtonSecondary from "./ButtonSecondary";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import "../App.css";
export default function VisionHome() {
  return (
    <>
      <section className={`section ${styles.sectionVisionHome}`}>
        <div className={` ${styles.containerVisionHome}`}>
          <h1 className={styles.headingPrimary}>
            Have a Vision? Let’s Make It a Reality.
          </h1>
          <div className={styles.buttonWrapper}>
            <ButtonSecondary text="Pricing & Offers" link="/Pricing" />
          </div>
        </div>
      </section>
    </>
  );
}
