import ItemCard from "../../ItemCard/ItemCard";
import styles from "./PseudoClassItem.module.sass";
import PseudoClassItemText from "./PseudoClassItemText";

export default function PseudoClassItem(itemList) {
  return (
    <ItemCard
      id="pseudo-class-item"
      name="Pseudo-class"
      text={<PseudoClassItemText />}
      itemList={itemList}
    >
      <div className={styles.itemExampleContainer}>
        <button type="button" className={styles.hover}>
          {" "}
          :hover
        </button>
        <button type="button" className={styles.focus}>
          {" "}
          :focus
        </button>
        <button type="button" className={styles.active}>
          {" "}
          :active
        </button>
      </div>
    </ItemCard>
  );
}
