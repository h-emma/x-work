import ItemCard from "../../ItemCard/ItemCard";
import styles from "./AnimationItem.module.sass";
import AnimationItemText from "./AnimationItemText";

export default function AnimationItem(itemList) {
  return (
    <ItemCard id="animation-item" name="Animationer" text={<AnimationItemText />} itemList={itemList}>
      <div className={styles.animationContainer}>
        <div className={styles.animatedShape}></div>
      </div>
    </ItemCard>
  );
}
