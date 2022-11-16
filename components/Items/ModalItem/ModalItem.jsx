import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ModalItem.module.sass";
import ModalItemText from "./ModalItemText";

export default function ModalItem(itemList) {
  return (
    <ItemCard
      id="modal-item"
      name="Modal"
      text={<ModalItemText />}
      itemList={itemList}
    >
      Modal
    </ItemCard>
  );
}
