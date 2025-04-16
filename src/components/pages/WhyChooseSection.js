import styles from "@/styles/components/WhyChooseSection.module.scss";
import Image from "next/image";

const WhyChooseSection = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.text}>
        <h5>Why Choose</h5>
        <h2>EcoZion Organic Mushrooms?</h2>
        <p>
          We are committed to providing the highest quality organic mushrooms,
          grown sustainably and delivered fresh, enhancing your health and
          culinary experience.
        </p>
      </div>
      <div className={styles.images}>
        <Image src="/pinkMushroom.png" alt="Salad" width={300} height={200} />
        <Image
          src="/top-mushroom.jpg"
          alt="Mushroom Dish"
          width={300}
          height={200}
        />
        <Image
          src="/lionsMane.png"
          alt="Wild Mushrooms"
          width={300}
          height={200}
        />
      </div>
    </section>
  );
};

export default WhyChooseSection;
