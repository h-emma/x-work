import styles from "./ComponentCard.module.sass";

export default function ComponentCard(props) {
  return (
    <section className={styles.card}>
      <div className={styles.infoContainer}>
        <div className={styles.infoHeaderContainer}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.infoTextContainer}>
          <>{props.text}</>
        </div>
      </div>
      <div className={styles.componentContainer}>{props.children}</div>
    </section>
  );
}
