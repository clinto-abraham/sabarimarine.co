import styles from "@/styles/components/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Grow Mushrooms Naturally in India</h1>
        <p>
          EcoZion offers organic, fresh, and medicinal mushrooms grown with
          care.
        </p>
        <button>Explore Varieties</button>
      </div>
    </section>
  );
};

export default HeroSection;
