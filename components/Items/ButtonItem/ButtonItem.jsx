import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ButtonItem.module.sass";
import ButtonItemText from "./ButtonItemText";

export default function ButtonItem() {
  return (
    <ItemCard id="button-item" name="Button" text={<ButtonItemText />}>
      <button>A Button</button>
    </ItemCard>
  );
}
