import styles from "@/styles/components/InfoSection.module.scss";
import Image from "next/image";

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2>Elevate Your Health with Organic Mushrooms</h2>
          <p>
            Experience the benefits of nutrient-rich, sustainably sourced
            mushrooms delivered right to your door.
          </p>

          <h3>Nutrient-Rich Daily Food</h3>
          <p>
            Incorporate organic mushrooms into your daily diet for a boost of
            essential vitamins and minerals, naturally.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primary}>Learn More</button>
            <button className={styles.outline}>Recipes</button>
          </div>
        </div>

        <div className={styles.imageBlock}>
          <img
            src="/images/mushroom-price.jpg"
            alt="Mushrooms with price label"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
