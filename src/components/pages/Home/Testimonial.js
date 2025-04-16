import Image from "next/image";
import styles from "@/styles/components/Home/Testimonial.module.scss";
const Testimonial = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.stars}>★★★★★</div>
        <p className={styles.message}>
          Sabari Marine Enterprise has been exceptional in handling our freight
          forwarding needs. Their expertise and reliability make them our go-to
          shipping partner for all imports and exports.
        </p>

        <div className={styles.author}>
          <div className={styles.avatar}>
            <Image
              src="/akhil.jpeg"
              alt="Akhil Giri"
              width={56}
              height={56}
              className={styles.image}
            />
          </div>
          <p className={styles.name}>Akhil Giri</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
