"use client";
import React from "react";
import styles from "@/styles/components/Pricing.module.scss";
import useCurrencySymbol from "@/utils/useCurrencySymbol";
import Image from "next/image";
// import useCurrencySymbol from "../utils/useCurrencySymbol";

const plans = [
  {
    title: "Oyster Mushroom",
    image: "/oyster.jpg",
    price: 100,
    features: [
      "Vitamin D2",
      "Vitamin B1, B2, B3, B5, B7, B9, B12",
      "Potassium",
      "Phosphorus",
      "Zinc",
    ],
  },
  {
    title: "Button Mushrooms",
    image: "/top-mushroom.jpg",
    price: 120,
    features: [
      "Vitamin D2",
      "Vitamin B2, B9, B12",
      "Potassium",
      "Phosphorus",
      "Zinc",
    ],
  },
  {
    title: "Lion's Mane Mushrooms",
    image: "/lionsMane.png",
    price: 999,
    features: [
      "Vitamin D2",
      "Vitamin B1, B12",
      "Potassium",
      "Phosphorus",
      "Zinc",
    ],
  },
];

const Pricing = () => {
  const { currencySymbol, isLoading } = useCurrencySymbol();

  if (isLoading) {
    return <div>Loading...</div>; // You can display a loading spinner here
  }
  return (
    <section className={styles.pricingSection}>
      <div className={styles.planGrid}>
        {plans.map((plan, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={plan.image}
              alt="Mushroom Lions Mane"
              className={styles.imagePlaceholder}
              width={300}
              height={200}
            />

            <h3>{plan.title}</h3>
            <p className={styles.from}>from</p>
            <p className={styles.price}>
              {" "}
              {currencySymbol} {plan.price}
            </p>
            <p className={styles.perMonth}>per kilogram</p>
            <p className={styles.description}>
              You’ll have a workspace in one of our business clubs that is as
              flexible as you are. For individuals or companies.
            </p>
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className={styles.cta}>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
