import ItemCard from "../../ItemCard/ItemCard";
import styles from "./LinkItem.module.sass";
import LinkItemText from "./LinkItemText";

export default function LinkItem() {
  return (
    <ItemCard id="link-item" name="Link/Anchor" text={<LinkItemText />}>
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>
          &lt;a&gt;Detta är ett länkelement&lt;/a&gt;
        </div>
      </div>
    </ItemCard>
  );
}
