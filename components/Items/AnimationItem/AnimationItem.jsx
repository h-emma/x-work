import ItemCard from "../../ItemCard/ItemCard";
import styles from "./AnimationItem.module.sass";
import AnimationItemText from "./AnimationItemText";
import { useState, useRef } from "react";

export default function AnimationItem(itemList) {
  const animatedShape = useRef(null);

  const [animationIsPlaying, setAnimationIsPlaying] = useState(true);

  return (
    <ItemCard id="animation-item" name="Animationer" text={<AnimationItemText />} itemList={itemList}>
      <div className={styles.animationCardContentContainer}>
        <div className={styles.animationContainer}>
          <div className={styles.animatedShape} ref={animatedShape}></div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => {}}>Spela upp/Pausa</button>
        </div>
      </div>
    </ItemCard>
  );
}
