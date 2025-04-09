import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import "../App.css";
const testimonials = [
  {
    id: 1,
    text: "I recently had the pleasure of working with Marina on a website project for our company. Her professionalism, creativity, and dedication to delivering the best possible solution at every stage of the process really impressed me. — Stefan Olaru, Business Owner",
  },
  {
    id: 2,
    text: "She always responded quickly and made sure everything worked smoothly. She is hardworking, creative, professional, and an all-around super nice person. — Marija, Marketing Specialist",
  },
  {
    id: 3,
    text: "The website works great! It loads fast, looks awesome on any device, and the SEO is really solid, helping my business get noticed. Exactly what I needed! — Michael, Entrepreneur",
  },
  {
    id: 4,
    text: "Marina created a really easy-to-use site that just works. She’s always there to fix anything that comes up and keeps everything running smoothly. She's a true professional in every aspect of her work. — Thomas Orin, Product Manager",
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
