"use client";
import styles from "@/styles/components/Home/About.module.scss";
import Image from "next/image";
// import aboutImage from "@/assets/about.jpg"; // Replace with actual image

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>About Sabari Marine Enterprise</h2>
          <p>
            With 25 years of experience, we specialize in freight forwarding,
            containers channeling, and comprehensive import/export services,
            ensuring efficient and reliable shipping solutions from Gandhidham,
            Gujarat, India.
          </p>
          <p>
            We supply the full range of items according to the IMPA and ISSA
            catalogues as well as any item which may be found on board any type
            of sea going vessel as well as rigs and vessels and equipment
            engaged in the renewable energies markets.
          </p>
          <button className={styles.contactBtn}>Contact</button>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={"/Office.png"}
            alt="Shipping"
            width={"264"}
            height={"264"}
            className={styles.image}
          />

          <div className={styles.testimonial}>
            <span className={styles.quote}>❝</span>
            <p className={styles.feedback}>
              <strong>Excellent service and timely deliveries.</strong>
            </p>
            <span className={styles.author}>Mr. Sharma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
