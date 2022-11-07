import ItemCard from "../../ItemCard/ItemCard";
import styles from "./LinkMailToItem.module.sass";
import LinkMailToItemText from "./LinkMailToItemText";

export default function LinkMailToItem(itemList) {
  return (
    <ItemCard
      id="link-mailto-item"
      name="Link-mailto"
      text={<LinkMailToItemText />}
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
