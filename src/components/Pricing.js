import Navigation from "./Navigation";
import styles from "../styles/Prices.module.css";
import PopupWindow from "./PopupWindow";
import Footer from "./Footer";
import "../App.css";
import ButtonSection from "./ButtonSection";

// Pricing data
const pricingData = [
  {
    id: 1,
    title: "Basic Website Plan",
    subtitle: "Comprehensive UI/UX Design",
    titlePrice: "Price",
    price: "$150 - $300",
    includes: [
      "One-page website",
      "Responsive design",
      "Basic SEO optimization",
      "1 round of revisions",
      "Social media integration",
      "Basic content updates",
      "* text/image/links changes",
      "* 2 minor updates in 1 month",
    ],
  },
  {
    id: 2,
    title: "Standard Website Plan",
    subtitle: "Front-End Development",
    titlePrice: "Price",
    price: "$300 - $700",
    includes: [
      "Multi-page website",
      "Responsive design",
      "SEO optimization",
      "2 rounds of revisions",
      "HTML/CSS/JS Dev",
      "CSS animations",
      "Social media integration",
      "Content & layout updates",
      "* small layout adjustments",
      "* 4 updates in 2 month.",
    ],
  },
  {
    id: 3,
    title: "Premium Website Plan",
    subtitle: "Illustration & Development",
    titlePrice: "Price",
    price: "$700 - $900",
    includes: [
      "Multi-page website",
      "Responsive design",
      "Advanced SEO opt.",
      "4 rounds of revisions",
      "CSS/JS animations",
      "HTML/CSS/JS/React dev",
      "API integration",
      "Social media integration",
      "Premium maintenance",
      "* functionality updates",
      "* content, design-upgrades",
      "* 6 updates in 3 month",
    ],
  },
];

const PricingCard = ({
  title,
  titlePrice,
  subtitle,
  includes,
  price,
  styles,
  isFront,
  index,
}) => {
  // Define background styles based on the index (or title)
  const backgroundStyle = (() => {
    if (index === 0) {
      return styles.cardHeadindBoxFirst; // First card background
    } else if (index === 1) {
      return styles.cardHeadindBoxSecond; // Second card background
    } else {
      return styles.cardHeadindBoxThird; // Third card background
    }
  })();

  return (
    <div className={styles.pricingCard}>
      <div
        className={`${styles.pricingCardSide} ${styles.pricingCardSideFront} ${
          isFront
            ? styles.pricingCardSideFrontFirst
            : styles.pricingCardSideFrontSecond
        }`}
      >
        <div className={`${backgroundStyle} ${styles.pricingCardTitleBox}`}>
          <h4 className={styles.headingQuaternary}>{title}</h4>
          <h5 className={styles.headingQuinary}>{subtitle}</h5>
        </div>
        <div className={styles.cardDetails}>
          <ul className={styles.cardList}>
            {includes.map((item, index) => (
              <div className={styles.cardItem} key={index}>
                <span>
                  <ion-icon
                    name="checkmark-done-outline"
                    className={styles.icon}
                  ></ion-icon>
                </span>
                <li className={styles.cardListItem}>
                  <p>{item}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.pricingCardSide} ${styles.pricingCardSideBack}`}
      >
        <div className={styles.priceWrapper}>
          <p className={styles.titlePrice}>{titlePrice}</p>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </div>
  );
};
// Ensure Prices is exported as the default export
const Pricing = ({ isMenuVisible, toggleMenu }) => {
  return (
    <>
      <section className={`${styles.sectionPrices} `}>
        <Navigation />
        <div className={styles.containerPrices}>
          <div className={styles.subHeading}>
            <h6>Pricing</h6>
            <span className={styles.line}></span>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>
              Find the Perfect Plan for Your Needs
            </h2>
          </div>
          <div className="btnCentre">
            <ButtonSection text="See My Packages" link="#sectionPricingBox" />
          </div>
        </div>
      </section>

      <section className={styles.sectionPricingBox} id="sectionPricingBox">
        <div className={styles.containerPricing}>
          <h3 className={`mb ${styles.headingTertiary}`}>
            Choose a Package That Suits Your Needs
          </h3>
          <div className={`${styles.pricingCardBoxGrid}`}>
            {pricingData.map((plan, index) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                titlePrice={plan.titlePrice}
                subtitle={plan.subtitle}
                price={plan.price} // Pass the price to the card
                includes={plan.includes}
                styles={styles}
                isFront={index === 0}
                index={index}
              />
            ))}
          </div>
          <hr />
          <div className={styles.supportBox}>
            <h5 className={styles.headingQuinary}>
              Ongoing Support After Your Plan Period
            </h5>
            <p className={`${styles.paragraphText} ${styles.paragraphTextmb} `}>
              After your initial support period ends, I offer flexible ongoing
              support packages to ensure your website continues to run smoothly
              and remains up-to-date.
            </p>
          </div>
        </div>

        <PopupWindow />
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
