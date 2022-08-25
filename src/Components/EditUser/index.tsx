import React, { Dispatch, SetStateAction } from "react";
import styles from "./index.module.css";
type Props = {
  setModalEdit: Dispatch<SetStateAction<boolean>>;
  editUser: (newUser: string) => void;
};

const EditUser = ({ editUser, setModalEdit }: Props) => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  function changeName() {
    if (
      name.toLowerCase().match(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/)
    ) {
      editUser(name);

      if (error !== "") {
        setError("");
      }
      setModalEdit((c) => !c);
    } else {
      setError("Por favor, verifique seu cadastro");
    }
  }
  return (
    <div className={styles.modal}>
      <div className={styles.popUp}>
        <div
          className={styles.buttonClose}
          onClick={() => setModalEdit((c) => !c)}
        >
          X
        </div>
        <h2>Editar usuário</h2>
        <label htmlFor="name">Editar nome completo:</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
         className={styles.button}
          onClick={() => {
            changeName();
          }}
        >
          Confirmar
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

export default EditUser;
