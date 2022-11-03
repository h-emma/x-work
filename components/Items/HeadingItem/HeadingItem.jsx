import ItemCard from "../../ItemCard/ItemCard";
import styles from "./HeadingItem.module.sass";
import HeadingItemText from "./HeadingItemText";

export default function HeadingItem() {
  return (
    <ItemCard id="heading-item" name="Heading" text={<HeadingItemText />}>
      <div className={styles.itemExampleContainer}>
        <div className={styles.text}>
          &lt;h1&gt;Detta är ett länkelement&lt;/h1&gt; &lt;h2&gt;Detta är ett
          länkelement&lt;/h2&gt; &lt;h3&gt;Detta är ett länkelement&lt;/h3&gt;
          &lt;h4&gt;Detta är ett länkelement&lt;/h4&gt; &lt;h5&gt;Detta är ett
          länkelement&lt;/h5&gt; &lt;h6&gt;Detta är ett länkelement&lt;/h6&gt;
        </div>
      </div>
    </ItemCard>
  );
}
