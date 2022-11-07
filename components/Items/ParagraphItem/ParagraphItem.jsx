import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ParagraphItem.module.sass";
import ParagraphItemText from "./ParagraphItemText";

export default function ParagraphItem(itemList) {
  return (
    <ItemCard
      id="paragraph-item"
      name="Paragraph"
      text={<ParagraphItemText />}
      itemList={itemList}
    >
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>
          &lt;p&gt;Detta är ett paragrafelement&lt;/p&gt;
        </div>
      </div>
    </ItemCard>
  );
}
