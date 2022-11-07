import styles from "./ItemCard.module.sass";
import Link from "next/link";
import { useRef } from "react";

export default function ItemCard(props) {
  const backToTopLink = useRef(null);

  const scrollToTop = () => {
    props.itemList.itemList.current.scrollIntoView({ behavior: "smooth" });
    props.itemList.itemList.current.focus();
    props.itemList.itemList.current.blur();
  };

  return (
    <section className={styles.card}>
      <div className={styles.infoContainer}>
        <div className={styles.infoHeaderContainer}>
          <h3 tabIndex={0} id={props.id}>
            {props.name}
          </h3>
          <Link
            href=""
            className={"non-highlighted-text"}
            ref={backToTopLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Index
          </Link>
        </div>
        <div className={styles.infoTextContainer}>
          <>{props.text}</>
        </div>
      </div>
      <div className={styles.componentContainer}>{props.children}</div>
    </section>
  );
}
