import ItemCard from "../../ItemCard/ItemCard";
import styles from "./LinkItem.module.sass";
import LinkItemText from "./LinkItemText";

export default function LinkItem(itemList) {
  return (
    <ItemCard id="link-item" name="Link/Anchor" text={<LinkItemText />} itemList={itemList}>
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>&lt;a&gt;Detta är ett länkelement&lt;/a&gt;</div>
      </div>
    </ItemCard>
  );
}
