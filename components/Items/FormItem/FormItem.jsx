import ItemCard from "../../ItemCard/ItemCard";
import styles from "./FormItem.module.sass";
import FormItemText from "./FormItemText";

export default function FormItem(itemList) {
  return (
    <ItemCard id="form-item" name="Form" text={<FormItemText />} itemList={itemList}>
      <form
        action=""
        onSubmit={(e) => {
          console.log(e);
        }}
        className={styles.form}
      >
        <h4>Logga in</h4>
        <fieldset className={styles.fieldset}>
          <legend>Inloggningsdetaljer</legend>
          <div className={styles.inputAndLabelContainer}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="username" required />
          </div>
          <div className={styles.inputAndLabelContainer}>
            <label htmlFor="password">Lösenord</label>
            <input type="password" name="password" id="password" required minLength="6" />
          </div>
        </fieldset>
        <button type="submit">Logga in</button>
        <div className={styles.signUpContainer}>
          <p>Inget konto?</p>
          <a href="">Registrera dig här</a>
        </div>
      </form>
    </ItemCard>
  );
}
