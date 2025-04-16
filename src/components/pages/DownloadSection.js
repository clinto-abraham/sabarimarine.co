"use client";
import React from "react";
import styles from "@/styles/components/DownloadSection.module.scss";

import Image from "next/image";

const DownloadSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.promoBanner}>
        <div className={styles.storeButtons}>
          <img src="/images/google-play.png" alt="Google Play" />
          <img src="/images/app-store.png" alt="App Store" />
        </div>

        <div className={styles.overlay}>
          <header className={styles.logo}>
            <Image src="/logo.svg" alt="Company logo" width={150} height={40} />
          </header>

          <div className={styles.content}>
            <h1>Praesent id cursus mi. Mauris aliquet mi maximus,</h1>
            <p>
              Suspendisse sed ligula non nisl sodales euismod sit amet vel
              tellus. Nulla tellus quam, rhoncus sed aliquet nec, dictum ac
              sapien. Fusce porta, metus quis rhoncus sollicitudin
            </p>

            <div className={styles.buttons}>
              <a href="#" className={styles.storeBtn}>
                <Image
                  src="/google-play.svg"
                  alt="Google Play"
                  width={140}
                  height={50}
                />
              </a>
              <a href="#" className={styles.storeBtn}>
                <Image
                  src="/app-store.svg"
                  alt="App Store"
                  width={140}
                  height={50}
                />
              </a>
            </div>

            <p className={styles.browserLink}>
              Want to use a web browser <a href="#">Go to Website</a>
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/hero-bg.jpg"
        alt="Hero Background"
        fill
        className={styles.bgImage}
        priority
      />
    </section>
  );
};

export default DownloadSection;
