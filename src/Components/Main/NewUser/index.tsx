import { useState } from "react";
import styles from "./index.module.css";

type Props = {
  registerUser: (user: string) => void;
};

const NewUser = ({ registerUser }: Props) => {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <div className={styles.containerInput}>
          <label htmlFor="name">Nome Completo: {name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              registerUser(name);
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
