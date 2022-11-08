import styles from "../../ItemCard/ItemCard.module.sass";

export default function LinkItemText() {
  return (
    <>
      <p>Fooooorm</p>

      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="#">formLink</a>
      </p>
    </>
  );
}
