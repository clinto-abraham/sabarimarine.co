import styles from "@/styles/components/VarietySection.module.scss";

const VarietySection = () => {
  return (
    <section className={styles.varietySection}>
      <div className={styles.topBlock}>
        <div className={styles.left}>
          <span>Fresh, Organic Selection</span>
          <h2>Mushroom Variety Packs</h2>
        </div>
        <div className={styles.right}>
          <p>
            Explore our diverse selection of organic mushrooms, hand-picked and
            delivered fresh to your doorstep. Perfect for culinary adventures
            and nutritional boosts.
          </p>
          <button className={styles.primary}>Order Now</button>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.left}>
          <span>Delicious Recipe Guides</span>
          <h2>Mushroom Recipe Mastery</h2>
        </div>
        <div className={styles.right}>
          <p>
            Unlock culinary creativity with our exclusive recipe guides. Learn
            to prepare delicious mushroom dishes that are both nutritious and
            easy to make at home.
          </p>
          <button className={styles.outline}>Get Recipes</button>
        </div>
      </div>
    </section>
  );
};

export default VarietySection;

//
// const VarietySection = () => {
//     return (
//       <section>
//         <div className="topBlock">
//           <div className="left">
//             <span>Fresh, Organic Selection</span>
//             <h2>Mushroom Variety Packs</h2>
//           </div>
//           <div className="right">
//             <p>
//               Explore our diverse selection of organic mushrooms, hand-picked and
//               delivered fresh to your doorstep. Perfect for culinary adventures
//               and nutritional boosts.
//             </p>
//             <button className="primary">Order Now</button>
//           </div>
//         </div>

//         <div className="bottomBlock">
//           <div className="left">
//             <span>Delicious Recipe Guides</span>
//             <h2>Mushroom Recipe Mastery</h2>
//           </div>
//           <div className="right">
//             <p>
//               Unlock culinary creativity with our exclusive recipe guides. Learn
//               to prepare delicious mushroom dishes that are both nutritious and
//               easy to make at home.
//             </p>
//             <button className="outline">Get Recipes</button>
//           </div>
//         </div>
//       </section>
//     );
//   };
