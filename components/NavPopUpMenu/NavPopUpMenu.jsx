import styles from "./NavPopUpMenu.module.sass";

export default function NavPopUpMenu({ menuIsOpenState }) {
  return (
    <div className={styles.menu}>
      <div className={styles.closeButtonContainer}>
        <button onClick={() => menuIsOpenState(false)} className={styles.closeButton}></button>
      </div>
      <div className={styles.menuContentContainer}></div>
    </div>
  );
}
