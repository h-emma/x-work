import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ImageItem.module.sass";
import ImageItemText from "./ImageItemText";

export default function ImageItem(itemList) {
  return (
    <ItemCard
      id="image-item"
      name="Image"
      text={<ImageItemText />}
      itemList={itemList}
    >
      <div className={styles.itemExampleContainer}></div>
    </ItemCard>
  );
}
