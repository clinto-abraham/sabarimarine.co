"use client";
import React from "react";
import styles from "@/styles/layout/Footer.module.scss";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.brandSection}>
          <h2>Sabari Marine Enterprise</h2>
          <p>Reliable service records</p>
          <button className={styles.shopBtn}>Get Services Now</button>
        </div>

        <div className={styles.linksSection}>
          <div>
            <h4>Shop</h4>
            <ul>
              <li>Find our licenses</li>
              <li>See our awards</li>
              <li>Bulk Orders</li>
              <li>Offers</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Track Order</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Amazon Coupons</li>
            </ul>
          </div>

          <div>
            <h4>Learn</h4>
            <ul>
              <li>Our process</li>
              <li>Payment modules</li>
              <li>Guidance</li>
            </ul>
          </div>

          <div>
            <h4>Contact us</h4>
            <ul>
              <li>care@sabarimarine.co</li>
              <li>+91-8590770477</li>
              <li className={styles.socialIcons}>
                <FaInstagram />
                <FaTwitter />
                <FaFacebook />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomLine}>
        <p>© 2002 Sabari Marine Enterprise, Our slogan!</p>
        <p>© Software Developed by Clinto Abraham</p>
      </div>
    </footer>
  );
};

export default Footer;
