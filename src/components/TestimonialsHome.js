import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import "../App.css";
const testimonials = [
  {
    id: 1,
    text: "Marina made everything so easy! She handles all future updates, so I never have to deal with code. The site is smooth, interactive, and exactly what I envisioned. — John Doe, Business Owner",
  },
  {
    id: 2,
    text: "She was always quick to respond and made sure everything worked seamlessly. I’m really impressed with her commitment to quality. — Emily Clark, Marketing Specialist",
  },
  {
    id: 3,
    text: "The functionality is top-notch! The website runs perfectly, loads fast, and looks great on every device. Exactly what I needed. — Michael Jones, Entrepreneur",
  },
  {
    id: 4,
    text: "Working with Marina was awesome! She developed a smooth, interactive site with seamless API integration, making everything run effortlessly. Marina is always there to resolve issues and keep things functioning perfectly, which saves me so much time. Thomas Gomez, Product Manager!",
  },
];

const TestimonialsHome = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  return (
    <section
      className={`section ${styles.sectionTestimonial}`}
      id="sectionTestimonials"
    >
      <div className={`container `}>
        <div className={styles.subTitle}>
          <h3 className={styles.headingTertiary}>Client Testimonials</h3>
          <span className={styles.line}></span>
        </div>
        <h3
          className={`${styles.headingQuaternaryTestimonials} ${styles.headingQuaternary}`}
        >
          What Some of My Clients Say
        </h3>

        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialContainer} ${
                testimonial.id === activeTestimonial ? styles.active : ""
              }`}
            >
              <div className={styles.progressBar}></div>

              <blockquote className={styles.testimonialBlockquote}>
                <p className={styles.testimonialText}>
                  {" "}
                  <i
                    className={`fas fa-quote-left ${styles.iconTestimonialLeft}`}
                  ></i>
                  {testimonial.text}
                  <i
                    className={`fas fa-quote-right ${styles.iconTestimonialRight}`}
                  ></i>
                </p>
              </blockquote>
            </div>
          ))}

          <div className={styles.btnContainer}>
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                className={`${styles.btnOperations} ${
                  testimonial.id === activeTestimonial ? styles.active : ""
                }`}
                onClick={() => setActiveTestimonial(testimonial.id)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHome;
