import ItemCard from "../../ItemCard/ItemCard";
import styles from "./DropdownItem.module.sass";
import DropdownItemText from "./DropdownItemText";
import { useEffect, useRef, useState } from "react";

export default function DropdownItem(itemList) {
  const noLinkTab = useRef(null);

  const [noLinkTabIsOpen, setNoLinkTabIsOpen] = useState(false);

  useEffect(() => {
    noLinkTab.current.addEventListener("click", (e) => {
      e.preventDefault();
    });
    noLinkTab.current.addEventListener("mouseout", () => {
      setNoLinkTabIsOpen(false);
    });
  }, []);

  const toggleNoLinkTabIsOpen = () => {
    setNoLinkTabIsOpen((current) => !current);
  };

  return (
    <ItemCard id="dropdown-item" name="Dropdown" text={<DropdownItemText />} itemList={itemList}>
      <nav className={styles.navContainer}>
        <ul className={styles.parentList}>
          <li>
            <a href="">No Drop-down</a>
          </li>
          <li>
            <a
              href=""
              ref={noLinkTab}
              className={styles.noLinkTab}
              style={{ textDecoration: "none" }}
              onClick={toggleNoLinkTabIsOpen}
            >
              No Link
            </a>
            <ul className={noLinkTabIsOpen ? styles.displayNoLinkList : ""}>
              <li>
                <a href="">Item 1</a>
              </li>
              <li>
                <a href="">Item 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="" className={styles.withButtonTab}>
              Link
            </a>
            <button className={styles.openMenuButton}>v</button>
          </li>
        </ul>
      </nav>
    </ItemCard>
  );
}
