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
            className={animationIsPlaying ? styles.pauseButton : styles.playButton}
            onClick={() => {
              setAnimationIsPlaying((current) => !current);
            }}
            aria-label={animationIsPlaying ? "pausa animation" : "spela upp animation"}
            name={animationIsPlaying ? "pausa animation" : "spela upp animation"}
          ></button>
        </div>
      </div>
    </ItemCard>
  );
}
