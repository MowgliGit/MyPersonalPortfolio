import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../styles/ProjectDetails.module.css";

const ProjectDetails = () => {
  const projectsData = [
    {
      id: 1,
      title: "Spase Tourism",
      category: "React",
      image: "space.png",
      link: "https://mowgligit.github.io/space-tourism-webpage/",
      description:
        "This modern, interactive Space tourism website offers an engaging experience with a clean layout. Users can explore destinations, meet the crew, and learn about space technology. Fully responsive, it ensures smooth navigation across all devices with dynamic, clickable elements.",
      githubRepo: "https://github.com/MowgliGit/space-tourism-webpage",
      skills: ["Html", "Css", "React"],
    },
    {
      id: 2,
      title: "Nonprofit Organization",
      category: "React",
      image: "charito.png",
      link: "https://mowgligit.github.io/charitoNonProfitOrg/",
      description:
        "This website is a modern, fully responsive, and dynamic platform designed to showcase the mission and impact of organization. Key features include: Testimonial carousel, a sleek and interactive slider highlighting stories and feedback from beneficiaries and supporters. Modern card design and fully responsive layout.Contact form and integrated map allowing visitors to easily get in touch and locate the organization.",
      githubRepo: "https://github.com/MowgliGit/charitoNonProfitOrg",
      skills: ["Html", "Css", "React"],
    },
    {
      id: 3,
      title: "E commerce",
      category: "React",
      image: "ecommerce.png",
      link: "https://mowgligit.github.io/E-commerce-product/",
      description:
        "A modern, fully responsive online store built for an enhanced shopping experience. Features include: Product gallery, clear, detailed product images and descriptions.Interactive cart, easy add/remove functionality with real-time updates. Responsive design, optimized for all devices, from desktop to mobile. User-friendly interface, simple navigation with categorized products.",
      githubRepo: "https://github.com/MowgliGit/E-commerce-product",
      skills: ["Html", "Css", "React"],
    },

    {
      id: 4,
      title: "Pouffe Stool",
      category: "JavaScript",
      image: "rattanchair.png",
      link: "https://website-for-rattan-pouffe-stool-websi.netlify.app/",
      description:
        "A modern, responsive e-commerce website dedicated to showcasing high-quality rattan pouffe stools. Features include: Product showcase detailed images and descriptions of each stool. Descriptive cards, pricing, testimonials, and key product details. Slide gallery an engaging visual experience. Responsive design seamless browsing on all devices. User-friendly shopping, easy navigation and a smooth checkout experience.",
      githubRepo:
        "https://github.com/MowgliGit/website-for-rattan-pouffe-stool-website",
      skills: ["Html", "Css", "JavaScript"],
    },
    {
      id: 5,
      title: "Soy Candles",
      category: "JavaScript",
      image: "soycandel.png",
      link: "https://website-for-homemade-soy-candles.netlify.app/",
      description:
        "A beautiful, responsive website featuring handcrafted soy candles.Key highlights:Product gallery, stunning images and descriptions for each candle. Price and testimonials, clear pricing details and customer feedback for every product. Responsive design,easy browsing on any device. Explore our collection of eco-friendly, handmade soy candles for the perfect ambiance!",
      githubRepo:
        "https://github.com/MowgliGit/website-for-homemade-soy-candles",
      skills: ["Html", "Css", "JavaScript"],
    },
    {
      id: 6,
      title: "Raw Meal",
      category: "JavaScript",
      image: "raw.png",
      link: "https://website-for-raw-meals.netlify.app/",
      description:
        "A modern, responsive website dedicated to the benefits of eating raw food.Key features: Insightful details on the advantages of a raw food diet. Testimonials real customer feedback, highlighting the positive impact. Modern design, easy navigation and a sleek engaging layout.Well designed menu, easily pick what you want and add it to your cart. Features and forms, interactive sections to explore and engage with content.",
      githubRepo: "https://github.com/MowgliGit/website-for-raw-meals",
      skills: ["Html", "Css", "JavaScript"],
    },
    {
      id: 7,
      title: "Landing page",
      category: "React",
      image: "bloglanding.png",
      link: "https://mowgligit.github.io/blogr-landing/",
      description:
        "A simple, modern, and fully responsive landing page built with React. Features include: Clean design,sleek and user-friendly layout for easy navigation. Responsive and optimized for seamless viewing on all devices. React powered and smooth, dynamic interactions powered by react. Explore our clean and engaging landing page designed for a great user experience!",
      githubRepo: "https://github.com/MowgliGit/blogr-landing",
      skills: ["Html", "Css", "React"],
    },
    {
      id: 8,
      title: "Booking App",
      category: "React",
      image: "hotel.png",
      link: "https://mowgligit.github.io/website-for-hotel/",
      description:
        "Welcome to our hotel booking page, where you can explore detailed descriptions of our accommodations and check real-time weather updates for your destination. Our user-friendly interface provides everything you need to make an informed decision, from hotel amenities to climate conditions.",
      githubRepo: "https://github.com/MowgliGit/website-for-hotel",
      skills: ["Html", "Css", "React"],
    },
    {
      id: 9,
      title: "Book Web App",
      category: "React",
      image: "book.png",
      link: "https://mowgligit.github.io/bookWebApp/",
      description:
        "A responsive web application for exploring and discovering books using an external API. Users can search for books by title or keyword, and results are displayed in a clean grid layout with book covers, titles, and brief information. Clicking on a book opens a modal with the full description and additional details. The design is mobile-friendly and adapts smoothly across all screen sizes. ",
      githubRepo: "https://github.com/MowgliGit/bookWebApp",
      skills: ["Html", "Css", "React"],
    },
    {
      id: 10,
      title: "Natural Deodorant",
      category: "Bootstrap",
      image: "antiperspirant.png",
      link: "https://website-for-natural-antiperspirant.netlify.app/",
      description:
        "A modern, responsive website dedicated to showcasing natural deodorants. Key features:Product showcase and detailed descriptions. Real feedback highlighting the benefits of natural deodorants. Responsive design optimized for seamless viewing on all devices. Informative sections and user-friendly navigation. Learn about ingredients, benefits, and sustainability.Contact and inquiry form.",
      githubRepo:
        "https://github.com/MowgliGit/website-for-natural-antiperspirant",
      skills: ["Css", "Bootstrap", "JavaScript"],
    },
    {
      id: 11,
      title: "Culinary Herbs",
      category: "Bootstrap",
      image: "herbs.png",
      link: "https://website-for-herbs.netlify.app/",
      description:
        "This website built with Bootstrap, features an organized, easy to navigate layout, highlighting each herb’s properties and uses. Optimized for mobile and desktop views, the design is clean and modern. The website includes well structured sections dedicated to each herb, providing detailed information on their benefits, and is designed to engage users with a seamless, informative experience. ",
      githubRepo: "https://github.com/MowgliGit/website-for-herbs",
      skills: ["Css", "Bootstrap", "JavaScript"],
    },

    {
      id: 12,
      title: "Healty Meal",
      category: "Bootstrap",
      image: "meal.png",
      link: "https://website-for-healty-meal.netlify.app/",
      description:
        "Built with Bootstrap, it ensures a clean, modern, and fully responsive experience across all devices. Key Features: Image slider or visually engaging slider featuring high quality images of healthy meals. Interactive gallery showcasing a variety of meal options. Clear and descriptive sections, well organized content sections that highlight meal benefits, ingredients, and nutritional facts.",
      githubRepo: "https://github.com/MowgliGit/website-for-healty-meal",
      skills: ["Css", "Bootstrap", "JavaScript"],
    },
    {
      id: 13,
      title: "Snapfolio",
      category: "Bootstrap",
      image: "photographer.png",
      link: "https://website-for-photographer.netlify.app/",
      description:
        "This Bootstrap built website showcases an artist’s photography portfolio with a modern, fully responsive design. Key features:Interactive image slider and gallery of the artist's best work. Testimonials section with real client feedback, video showcase of the artist's work. Pricing cards with clear photography service details clean, intuitive design",
      githubRepo: "https://github.com/MowgliGit/Website-for-photographer",
      skills: ["Css", "Bootstrap", "JavaScript"],
    },
    {
      id: 14,
      title: "Skin Care",
      category: "Bootstrap",
      image: "skincare.png",
      link: "https://website-for-skin-care.netlify.app/",
      description:
        "This Bootstrap based website showcases a premium face cream with:Product card with slider and interactive browsing experience. Image gallery and high-quality product visuals. Detailed product description, benefits and usage. Elegant design, clean, modern, and user friendly. Responsive layout optimized for all devices.",
      skills: ["Css", "Bootstrap", "JavaScript"],
      githubRepo: "https://github.com/MowgliGit/website-for-skin-care",
    },

    {
      id: 15,
      title: "Animal Shelter",
      category: "Bootstrap",
      image: "shelter.png",
      link: "https://website-for-animal-shelter.netlify.app/",
      description:
        "A responsive Bootstrap  website for an animal shelter, featuring sections for volunteering opportunities and animal adoption. The site includes forms for applications, informative cards, and a gallery to showcase animals in need of a home. Designed for a seamless user experience across all devices.",
      githubRepo: "https://github.com/MowgliGit/website-for-animal-shelter",
      skills: ["Css", "Bootstrap", "JavaScript"],
    },
    {
      id: 16,
      title: "Blog",
      category: "Bootstrap",
      image: "blog.png",
      link: "https://website-blogr.netlify.app/",
      description:
        "A responsive Bootstrap  website for a company blog, featuring a gallery, video content, and interactive cards with pricing details. The site also includes a contact form, offering a seamless user experience across both mobile and desktop devices.",
      githubRepo: "https://github.com/MowgliGit/website-blog",
      skills: ["Css", "Bootstrap", "JavaScript"],
    },

    {
      id: 17,
      title: "Handmade Soap",
      category: "HTML&CSS",
      image: "soap.png",
      link: "https://website-for-soap.netlify.app/",
      description:
        "A responsive website built with HTML&CSS, featuring a gallery to showcase soap products. The site includes a brief project description of each product, designed for a smooth viewing experience across devices.",
      githubRepo: "https://github.com/MowgliGit/Website-for-Soap",
      skills: ["Html", "Css", "JavaScript"],
    },

    {
      id: 18,
      title: "Mountain Website",
      category: "HTML&CSS",
      image: "mountain.png",
      link: "https://websiteformountain.netlify.app/",
      description:
        "A responsive website built with HTML&CSS, featuring a gallery and detailed information about mountain events. The clean design ensures an optimal viewing experience across all devices.",
      githubRepo: "https://github.com/MowgliGit/Website-for-mountain",
      skills: ["Html", "Css", "JavaScript"],
    },
  ];
  const { id } = useParams(); // Get project ID from URL
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section className={styles.sectionProjectDetails} id="projectDetails">
      <div className={` container`}>
        <div className={styles.containerProjectBoxDetails}>
          <h3 className={`${styles.headingTertiary}`}>
            Website: {""}
            {project.title}
          </h3>
          <hr />
          <div
            className={`${styles.containerProjectDetails} grid grid--2--cols `}
          >
            <div className={styles.imageWrapper}>
              <img
                src={`${process.env.PUBLIC_URL}/projects/${project.image}`}
                alt={project.title}
                className={styles.projectsImg}
              />
            </div>
            <div className={styles.gridItemProjectDetails}>
              <p className={styles.projectDetailsItem}>Project description:</p>
              <p className={styles.paragraphDescription}>
                {" "}
                {project.description}
              </p>
              <p className={styles.projectDetailsItem}>
                Skills:{" "}
                {project.skills.map((skill, index) => (
                  <span key={index} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </p>
              <p className={styles.projectDetailsItem}>
                GitHubRepo:{""}{" "}
                <a
                  href={project.githubRepo}
                  className={` ${styles.projectDetailsLink} ${styles.btnNav}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repo
                </a>
              </p>
              <p className={styles.projectDetailsItem}>
                Live Demo:{""}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` ${styles.projectDetailsLink} ${styles.btnNav}`}
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
          <Link to="/projects" className={styles.backButton}>
            <ion-icon
              name="arrow-back-outline"
              className={styles.arrowIcon}
            ></ion-icon>
            <span className={styles.backBtn}> Back to Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
