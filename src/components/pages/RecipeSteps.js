"use client";
import React from "react";
import styles from "@/styles/components/RecipeSteps.module.scss";
import Image from "next/image";

const steps = [
  {
    id: 1,
    text: "Wash mushroom in room temperature or luke warm",
    image: "/public/platterMushroom.png",
  },
  {
    id: 2,
    text: "Salte with butter and cream.",
    image: "/images/step2.jpg",
  },
  {
    id: 3,
    text: "Add salt to taste, ginger – garlic paste and coconut milk with green chili",
    image: "/images/step3.jpg",
  },
];

const RecipeSteps = () => {
  return (
    <section className={styles.recipeSteps}>
      {steps.map(({ id, text, image }, index) => (
        <div
          key={id}
          className={`${styles.step} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
        >
          <Image
            src={image}
            alt={`Step ${id}`}
            fill
            className={styles.bgImage}
            priority
          />
          <img src={image} alt={`Step ${id}`} />

          <div className={styles.textBlock}>
            <h2>{id}.</h2>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecipeSteps;
