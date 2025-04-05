import Navigation from "./Navigation";
import styles from "../styles/Services.module.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";
import ButtonSection from "./ButtonSection";
const servicesItems = [
  {
    icon: "icons8-google-code-50.png",
    title: "Front-end Development",
    text: "I build interactive websites using HTML, CSS, JS, and React, with API integration for dynamic functionality.",
  },
  {
    icon: "icons8-update-done-50.png",
    title: "Ongoing Updates & Maintenance",
    text: "I manage updates, security patches, and long-term maintenance to keep your website running smoothly.",
  },
  {
    icon: "icons8-web-design-50.png",
    title: "Unique Web Design",
    text: "Crafting visually stunning, modern, and user-friendly websites that stand out.",
  },
  {
    icon: "/icons8-identity-50.png",
    title: "Brand Identity",
    text: "Developing a strong visual identity that sets your business apart.",
  },
  {
    icon: "icons8-seo-50.png",
    title: "SEO Strategy",
    text: "Optimizing websites for better search rankings, driving more traffic and engagement.",
  },
  {
    icon: "icons8-responsive-design-50.png",
    title: "Responsive Design",
    text: "Creating adaptable websites that provide a seamless experience across all devices.",
  },
  {
    icon: "icons8-layout-50.png",
    title: "Single & Multi-Page Websites",
    text: "Building both structured multi-page sites and sleek single-page website.",
  },
  {
    icon: "icons8-optimization-64.png",
    title: "Performance Optimization",
    text: "Enhancing site speed, efficiency, and overall performance.",
  },

  {
    icon: "icons8-git-50.png",
    title: "Version Control & Git",
    text: "Using Git for version control and collaboration within development teams.",
  },
];

const Services = () => {
  return (
    <>
      <section className={`${styles.sectionServices} `}>
        <Navigation />
        <div className={styles.containerService}>
          <div className={styles.subHeading}>
            <h6>Services</h6>
            <span className={styles.line}></span>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>What I Can Do for You</h2>
          </div>
          <div className="btnCentre">
            <ButtonSection text="View Services" link="#sectionServicesPlan" />
          </div>
        </div>
      </section>
      <section className={styles.sectionServicesBox} id="sectionServicesPlan">
        <div className={styles.containerServiceBox}>
          <div className={styles.servicesBoxPlan}>
            <h3 className={styles.headingTertiary}>
              How I Help Bring Your Web Vision to Life
            </h3>
            <p className={styles.servicesParagraph}>
              A seamless and professional web design experience from start to
              finish, tailored to your business needs.
            </p>
          </div>
          <div className={`${styles.servicesBoxItems}`}>
            {servicesItems.map((service, index) => (
              <div className={styles.iconItemService} key={index}>
                <div className={styles.iconBoxService}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${service.icon}`}
                    alt={service.title}
                    className={styles.iconImgService}
                  />
                </div>
                <h6 className={styles.serviceTitleItem}>{service.title}</h6>
                <p className={styles.serviceParagraphItem}>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
