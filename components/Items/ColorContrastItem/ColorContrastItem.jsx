import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ColorContrastItem.module.sass";
import ColorContrastItemText from "./ColorContrastItemText";

export default function ColorContrastItem() {
  return (
    <ItemCard
      id="color-contrast-item"
      name="Color contrast"
      text={<ColorContrastItemText />}
    >
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>
          <p>Something</p>
        </div>
      </div>
    </ItemCard>
  );
}
