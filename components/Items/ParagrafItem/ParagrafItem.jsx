import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ParagrafItem.module.sass";
import ParagrafItemText from "./ParagrafItemText";

export default function ParagrafItem(itemList) {
  return (
    <ItemCard id="paragraf-item" name="Paragraf" text={<ParagrafItemText />} itemList={itemList}>
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>&lt;p&gt;Detta är ett paragrafelement&lt;/p&gt;</div>
      </div>
    </ItemCard>
  );
}
