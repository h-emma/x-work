import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ColorContrastItem.module.sass";
import ColorContrastItemText from "./ColorContrastItemText";

export default function ColorContrastItem(itemList) {
  return (
    <ItemCard id="color-contrast-item" name="Färgkontrast" text={<ColorContrastItemText />} itemList={itemList}>
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>
          <p>Kontrast</p>
          <p>Kontrast</p>
          <p>Kontrast</p>
          <p>Kontrast</p>
          <p>Kontrast</p>
          <p>Kontrast</p>
        </div>
      </div>
    </ItemCard>
  );
}
