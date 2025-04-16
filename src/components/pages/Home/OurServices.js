"use client";
import styles from "@/styles/components/Home/OurServices.module.scss";
import Image from "next/image";
const OurServices = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Our Services</h2>
      <p className={styles.description}>
        Expert solutions for freight forwarding and container channeling
        tailored to your business needs.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Container Channeling</h3>
            <p>
              Streamlined container channeling services to facilitate smooth
              import and export operations for your business.
            </p>
          </div>
          <Image
            src={"/containers.png"}
            width="264"
            height="264"
            alt="Container channeling"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Freight Forwarding</h3>
            <p>
              Reliable freight forwarding services ensuring timely delivery and
              efficient logistics for your shipments.
            </p>
          </div>
          <Image
            src={"/port.png"}
            width="164"
            height="164"
            alt="Freight forwarding"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
