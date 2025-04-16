import styles from "@/styles/components/NutrientTable.module.scss";
const NutrientTable = () => {
  return (
    <section className={styles.tableSection}>
      <h2>Key Nutrients in Lion&apos;s Mane</h2>
      <table>
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Lion&apos;s Mane </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>35 kcal</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>1.6 g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>0.4 g</td>
          </tr>
          <tr>
            <td>Carb</td>
            <td>7.6 g</td>
          </tr>
          <tr>
            <td>Fiber</td>
            <td>2.0 g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default NutrientTable;

// import styles from "@/styles/components/NutrientTable.module.scss";
// const NutrientTable = () => {
//   return (
//     <section className={styles.tableSection}>
//       <h2>
//         Comparison Table of Key Nutrients in Lion&apos;s Mane, Oyster, and
//         Button Mushrooms
//       </h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Nutrient</th>
//             <th>Lion&apos;s Mane Mushroom</th>
//             <th>Oyster Mushroom</th>
//             <th>Button Mushroom</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Calories</td>
//             <td>35 kcal</td>
//             <td>33 kcal</td>
//             <td>22 kcal</td>
//           </tr>
//           <tr>
//             <td>Protein</td>
//             <td>1.6 g</td>
//             <td>3.3 g</td>
//             <td>3.1 g</td>
//           </tr>
//           <tr>
//             <td>Fat</td>
//             <td>0.4 g</td>
//             <td>0.3 g</td>
//             <td>0.3 g</td>
//           </tr>
//           <tr>
//             <td>Carbohydrates</td>
//             <td>7.6 g</td>
//             <td>7.0 g</td>
//             <td>4.0 g</td>
//           </tr>
//           <tr>
//             <td>Fiber</td>
//             <td>2.0 g</td>
//             <td>2.3 g</td>
//             <td>1.0 g</td>
//           </tr>
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default NutrientTable;
