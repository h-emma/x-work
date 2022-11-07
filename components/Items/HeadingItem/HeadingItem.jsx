import ItemCard from "../../ItemCard/ItemCard";
import styles from "./HeadingItem.module.sass";
import HeadingItemText from "./HeadingItemText";

export default function HeadingItem(itemList) {
  return (
    <ItemCard
      id="heading-item"
      name="Heading"
      text={<HeadingItemText />}
      itemList={itemList}
    >
      <div className={styles.itemExampleContainer}>
        <div className={styles.headingExample}>
          <span style={{ fontSize: "24px" }}>&lt;h1&gt;Heading&lt;/h1&gt;</span>
          <span style={{ fontSize: "22px" }}>&lt;h2&gt;Heading&lt;/h2&gt;</span>
          <span style={{ fontSize: "20px" }}>&lt;h3&gt;Heading&lt;/h3&gt;</span>
          <span style={{ fontSize: "18px" }}>&lt;h4&gt;Heading&lt;/h4&gt;</span>
          <span style={{ fontSize: "16px" }}>&lt;h5&gt;Heading&lt;/h5&gt;</span>
          <span style={{ fontSize: "14px" }}>&lt;h6&gt;Heading&lt;/h6&gt;</span>
        </div>
      </div>
    </ItemCard>
  );
}
