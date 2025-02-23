import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import ButtonSecondary from "./ButtonSecondary";
import styles from "../styles/Home.module.css";
const projectsCards = [
  {
    id: 1,
    title: "Spase Tourism",
    image: "space.png",
    link: "https://mowgligit.github.io/space-tourism-webpage/",
  },
  {
    id: 2,
    title: "Nonprofit Org",
    image: "charito.png",
    link: "https://mowgligit.github.io/charitoNonProfitOrg/",
  },
  {
    id: 3,
    title: "Rattan Stool",
    image: "rattanchair.png",
    link: "https://website-for-rattan-pouffe-stool-websi.netlify.app/",
  },
];
export default function ProjectsHome({ isMenuVisible, toggleMenu }) {
  return (
    <section className={`section ${styles.sectionProjectsHome} `}>
      <div className="container">
        {isMenuVisible && (
          <Navigation isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        )}

        <div className="subTitle">
          <h3 className={styles.headingTertiary}>My work</h3>
          <span className={styles.line}></span>
        </div>
        <div className={styles.projectsMeSection}>
          <div className={styles.aboutBoxText}>
            <h4 className={styles.headingQuarternary}>
              Here’s a selection of my work
            </h4>
            <p className={styles.paragraphText}>
              Each project showcases my passion for creating innovative
              solutions and delivering high-quality results. From design to
              deployment, these works highlight my technical expertise and
              creativity.
            </p>
            <p className={styles.paragraphText}></p>
          </div>
          <div
            className={`${styles.containerProjectsBoxGrid} ${styles.containerProjectsBox}`}
          >
            {projectsCards.map((project) => (
              <div key={project.id} className={styles.cardProject}>
                <div className={styles.imageWrapper}>
                  <img
                    src={`${process.env.PUBLIC_URL}/projects/${project.image}`}
                    alt={project.title}
                    className={styles.projectsImg}
                  />
                </div>
                {/* </figure> */}
                <div className={styles.cardDetails}>
                  <div>
                    <h6 className={styles.headingProjectsTitle}>
                      {project.title}
                    </h6>
                  </div>
                  <button className={styles.btnLinkProject}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectsLink}
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonSecondary text="See All Projects" link="/projects" />
          </div>
        </div>
      </div>
    </section>
  );
}
