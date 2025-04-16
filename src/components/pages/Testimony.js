"use client";
import React from "react";
import styles from "@/styles/components/Testimony.module.scss";

import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote: `EcoZion's mushrooms transformed my cooking! The flavor is incredible, and I feel great knowing they're organic and sustainably sourced.`,
    name: "Jane D.",
    avatar: "/images/jane.jpg",
  },
  {
    id: 2,
    quote: `The quality of EcoZion's mushrooms is unmatched. I love experimenting with their recipes and incorporating them into my daily meals.`,
    name: "Emily R.",
    avatar: "/images/emily.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <h2>What Our Customers Are Saying About Us</h2>
        <p>
          Read testimonials from satisfied customers who have experienced the
          health benefits and culinary delights of EcoZion mushrooms.
        </p>
      </div>

      <div className={styles.cards}>
        {testimonials.map(({ id, quote, name, avatar }) => (
          <div className={styles.card} key={id}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quote}>{quote}</p>
            <div className={styles.profile}>
              <img src={avatar} alt={name} />
              <span className={styles.name}>{name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
