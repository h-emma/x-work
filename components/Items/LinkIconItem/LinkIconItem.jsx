import ItemCard from "../../ItemCard/ItemCard";
import styles from "./LinkIconItem.module.sass";
import LinkIconItemText from "./LinkIconItemText";

export default function LinkIconItem(itemList) {
  return (
    <ItemCard
      id="link-icon-item"
      name="Link-Icon"
      text={<LinkIconItemText />}
      itemList={itemList}
    >
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>
          &lt;a&gt;Detta är ett länkelement&lt;/a&gt;
        </div>
      </div>
    </ItemCard>
  );
}
