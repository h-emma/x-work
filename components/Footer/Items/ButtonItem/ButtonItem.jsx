import ItemCard from "../../../ItemCard/ItemCard";
import styles from "./ButtonItem.module.sass";
import ButtonItemText from "./ButtonItemText";

export default function ButtonItem() {
  return (
    <ItemCard name="Buttons" text={<ButtonItemText />}>
      <button>A Button</button>
    </ItemCard>
  );
}
