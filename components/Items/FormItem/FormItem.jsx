import ItemCard from "../../ItemCard/ItemCard";
import styles from "./FormItem.module.sass";
import FormItemText from "./FormItemText";

export default function FormItem(itemList) {
  return (
    <ItemCard
      id="form-item"
      name="Form"
      text={<FormItemText />}
      itemList={itemList}
    >
      <form action="" className={styles.form}>
        <h4>Registrera dig</h4>
        <fieldset className={styles.fieldset}>
          <legend>Registreringsdetaljer</legend>
          <p>Fält med * måste fyllas i.</p>
          <div className={styles.inputAndLabelContainer}>
            <label htmlFor="email">E-mail *</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className={styles.inputAndLabelContainer}>
            <label htmlFor="password">Lösenord *</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              minLength="8"
            />{" "}
            <p>Lösenord måste vara minst 8 tecken.</p>
          </div>
        </fieldset>
        <button type="submit">Registrera</button>
        <div className={styles.signUpContainer}>
          <p>Redan registrerad?</p>
          <a href="#">Logga in</a>
        </div>
      </form>
    </ItemCard>
  );
}
