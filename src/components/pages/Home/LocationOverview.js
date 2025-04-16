import styles from "@/styles/components/Home/LocationOverview.module.scss";

const LocationOverview = () => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Location Overview</h2>
          <p className={styles.description}>
            Sabari Marine Enterprise is located in Gandhidham, Gujarat, India,
            specializing in freight forwarding and container channeling for
            import and export.
          </p>
          <div className={styles.info}>
            <p>
              <strong>Gandhidham</strong>
              <br />
              Gandhidham, Gujarat, India
            </p>
            <p>
              <strong>Hours</strong>
              <br />
              Monday to Friday
            </p>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29375.77650485395!2d70.12062699999999!3d23.07155495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395112c89fd1b7e3%3A0xd3d9d4c36e49d54d!2sGandhidham%2C%20Gujarat%20370301!5e0!3m2!1sen!2sin!4v1713274621412!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className={styles.map}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationOverview;
