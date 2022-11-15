import ItemCard from "../../ItemCard/ItemCard";
import styles from "./AnimationItem.module.sass";
import AnimationItemText from "./AnimationItemText";
import { useState } from "react";

export default function AnimationItem(itemList) {
  const [animationIsPlaying, setAnimationIsPlaying] = useState(true);

  return (
    <ItemCard id="animation-item" name="Animationer" text={<AnimationItemText />} itemList={itemList}>
      <div className={styles.animationCardContentContainer}>
        <div className={styles.animationContainer}>
          <div className={animationIsPlaying ? styles.animatedShape : styles.pausedAnimatedShape}></div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              setAnimationIsPlaying((current) => !current);
            }}
          >
            Spela upp/Pausa
          </button>
        </div>
      </div>
    </ItemCard>
  );
}
