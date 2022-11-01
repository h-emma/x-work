import ItemCard from "../../ItemCard/ItemCard";
import styles from "./DropdownItem.module.sass";
import DropdownItemText from "./DropdownItemText";

export default function DropdownItem() {
  return (
    <ItemCard id="dropdown-item" name="Dropdown" text={<DropdownItemText />}>
      <nav className={styles.navContainer}>
        <ul className={styles.parentList}>
          <li>
            <a href="">No Drop-down</a>
          </li>
          <li>
            <a href="" style={{ textDecoration: "none" }}>
              No Link
            </a>
            <ul>
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
