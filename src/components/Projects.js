import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import ButtonSection from "./ButtonSection";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";
import styles from "../styles/Projects.module.css";
import "../App.css";
const projectsData = [
  {
    id: 1,
    title: "Spase Tourism",
    category: "React",
    image: "space.png",
    link: "https://mowgligit.github.io/space-tourism-webpage/",
  },
  {
    id: 2,
    title: "Nonprofit Org",
    category: "React",
    image: "charito.png",
    link: "https://mowgligit.github.io/charitoNonProfitOrg/",
  },
  {
    id: 3,
    title: "E commerce",
    category: "React",
    image: "ecommerce.png",
    link: "https://mowgligit.github.io/E-commerce-product/",
  },
  {
    id: 4,
    title: "Pouffe Stool",
    category: "JavaScript",
    image: "rattanchair.png",
    link: "https://website-for-rattan-pouffe-stool-websi.netlify.app/",
  },
  {
    id: 5,
    title: "Soy Candles",
    category: "JavaScript",
    image: "soycandel.png",
    link: "https://website-for-homemade-soy-candles.netlify.app/",
  },
  {
    id: 6,
    title: "Raw Meal",
    category: "JavaScript",
    image: "raw.png",
    link: "https://website-for-raw-meals.netlify.app/",
  },
  {
    id: 7,
    title: "Landing page",
    category: "React",
    image: "bloglanding.png",
    link: "https://mowgligit.github.io/blogr-landing/",
  },
  {
    id: 8,
    title: "Booking app",
    category: "React",
    image: "hotel.png",
    link: "https://mowgligit.github.io/website-for-hotel/",
  },
  {
    id: 9,
    title: "Book Web App",
    category: "React",
    image: "book.png",
    link: "https://mowgligit.github.io/bookWebApp/",
  },
  {
    id: 10,
    title: "Nat. Deodorant",
    category: "Bootstrap",
    image: "antiperspirant.png",
    link: "https://website-for-natural-antiperspirant.netlify.app/",
  },
  {
    id: 11,
    title: "Culinary Herbs",
    category: "Bootstrap",
    image: "herbs.png",
    link: "https://website-for-herbs.netlify.app/",
  },

  {
    id: 12,
    title: "Healty Meal",
    category: "Bootstrap",
    image: "meal.png",
    link: "https://website-for-healty-meal.netlify.app/",
  },
  {
    id: 13,
    title: "Snapfolio",
    category: "Bootstrap",
    image: "photographer.png",
    link: "https://website-for-photographer.netlify.app/",
  },
  {
    id: 14,
    title: "Skin Care",
    category: "Bootstrap",
    image: "skincare.png",
    link: "https://website-for-skin-care.netlify.app/",
  },

  {
    id: 15,
    title: "Animal Shelter",
    category: "Bootstrap",
    image: "shelter.png",
    link: "https://website-for-animal-shelter.netlify.app/",
  },
  {
    id: 16,
    title: "Blog",
    category: "Bootstrap",
    image: "blog.png",
    link: "https://website-blogr.netlify.app/",
  },

  {
    id: 17,
    title: "Organic Soap",
    category: "HTML&CSS",
    image: "soap.png",
    link: "https://website-for-soap.netlify.app/",
  },
  {
    id: 18,
    title: "Mountain Event",
    category: "HTML&CSS",
    image: "mountain.png",
    link: "https://websiteformountain.netlify.app/",
  },
];

const Projects = ({ isMenuVisible, toggleMenu }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "HTML&CSS", "Bootstrap", "JavaScript", "React"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <>
      <section className={`${styles.sectionProjects} `}>
        <Navigation />
        <div className={styles.containerProject}>
          <div className={styles.subHeading}>
            <h6>Projects</h6>
            <span className={styles.line}></span>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>
              Explore My Code Creations
            </h2>
          </div>
          <div className="btnCentre">
            <ButtonSection text="Check Out My Work" link="#sectionProjectBox" />
          </div>
        </div>
      </section>
      <section
        className={`${styles.sectionProjectsBox} `}
        id="sectionProjectBox"
      >
        <div className={styles.containerProjectBox}>
          <div className={`${styles.projectsBox}`}>
            <div>
              <h3 className={styles.headingTertiary}>Take a Look at My Work</h3>
            </div>
            <div>
              <p className={styles.projectsParagraph}>
                From concept to execution, these projects showcase my ability to
                transform ideas into interactive, functional, and visually
                stunning web experiences.
              </p>
            </div>
          </div>
          {/* Navigation */}
          <div className={`${styles.projectNavigation} `}>
            {" "}
            <nav className={styles.navProjects}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.btnNav} ${
                    selectedCategory === category.replace(/ & /g, "")
                      ? styles.btnNavActive
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(category.replace(/ & /g, ""))
                  } // Remove spaces for comparison
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          {/* Projects Grid */}
          <div className={`  ${styles.containerProjectsBoxCards}`}>
            <div className={styles.containerProjectsBoxCardsGrid}>
              {filteredProjects.map((project) => (
                <div key={project.id} className={styles.cardProject}>
                  <div className={styles.imageWrapper}>
                    {" "}
                    {/* Wrap the image */}
                    <img
                      src={`${process.env.PUBLIC_URL}/projects/${project.image}`}
                      alt={project.title}
                      className={styles.projectsImg}
                    />
                  </div>

                  <div className={styles.cardDetails}>
                    <div>
                      <h6 className={styles.headingProjectsTitle}>
                        {project.title}
                      </h6>
                    </div>
                    <button className={styles.btnLinkProject}>
                      {/* <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectsLink}
                      >
                        View
                      </a> */}
                      <Link
                        to={`/projects/${project.id}`}
                        className={styles.projectsLink}
                      >
                        View Details
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path=":id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Projects;
