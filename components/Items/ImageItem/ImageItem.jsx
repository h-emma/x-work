import ItemCard from "../../ItemCard/ItemCard";
import styles from "./ImageItem.module.sass";
import ImageItemText from "./ImageItemText";
import Image from "next/image";

export default function ImageItem(itemList) {
  return (
    <ItemCard
      id="image-item"
      name="Image"
      text={<ImageItemText />}
      itemList={itemList}
    >
      <div className={styles.itemExampleContainer}>
        <Image
          className={styles.imageContainer}
          src={"/assets/images/accessible_entry.webp"}
          alt="En tegelväg med en skylt med texten Accessible Entry"
          width={250}
          height={150}
          priority={true}
        />
        <p className={styles.text}>
          Bild är från{""}
          <a href="https://unsplash.com/photos/ju1yFZkrxVg">Unsplash</a>
        </p>
      </div>
    </ItemCard>
  );
}
