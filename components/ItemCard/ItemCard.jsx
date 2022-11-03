import styles from "./ItemCard.module.sass";

export default function ItemCard(props) {
  return (
    <section className={styles.card} id={props.id}>
      <div className={styles.infoContainer}>
        <div className={styles.infoHeaderContainer}>
          <h2 tabindex={0}>{props.name}</h2>
        </div>
        <div className={styles.infoTextContainer}>
          <>{props.text}</>
        </div>
      </div>
      <div className={styles.componentContainer}>{props.children}</div>
    </section>
  );
}
