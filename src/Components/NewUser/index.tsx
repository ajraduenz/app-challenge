import { useState } from "react";
import styles from "./index.module.css";

type Props = {
  registerUser: (user: string, email: string) => void;
  registeredUser: string;
  error: string;
  url: string;
};

const NewUser = ({ registerUser, error, url, registeredUser }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function sendToCookie(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    registerUser(name, email);
  }
  return (
    <div className={styles.containerInput}>
      <h1>Novo usuário</h1>
      {url ? (
        <div>
          <h2>Olá, {registeredUser}</h2>
          <p>Segue seu link de acesso:</p>
          <strong>
            <a href={window.location.origin + "/dashboard-" + url}>
              {window.location.origin + "/dashboard-" + url}
            </a>
          </strong>
          <p>* Expira após o primeiro acesso</p>
        </div>
      ) : (
        <form>
          <div className={styles.formInput}>
            <label htmlFor="name">Nome Completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={(e) => {
                sendToCookie(e);
              }}
            >
              Enviar
            </button>
          </div>
        </form>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default NewUser;
