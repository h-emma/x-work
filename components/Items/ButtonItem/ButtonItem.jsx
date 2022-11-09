import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ButtonItem.module.sass";
import ButtonItemText from "./ButtonItemText";

export default function ButtonItem(itemList) {
  return (
    <ItemCard
      id="button-item"
      name="Button"
      text={<ButtonItemText />}
      itemList={itemList}
    >
      <div className={styles.itemExampleContainer}>
        <button type="button">Button</button>
      </div>
    </ItemCard>
  );
}
