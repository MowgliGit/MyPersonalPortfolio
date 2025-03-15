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
            Got a Vision? Let’s Bring It to Life
          </h1>
          <div className={styles.buttonWrapper}>
            <ButtonSecondary text="Pricing & Offers" link="/Prices" />
          </div>
        </div>
      </section>
    </>
  );
}
