import React from "react";
import Dashboard from "./Dashboard";
import NewUser from "./NewUser";
import styles from "./index.module.css";

type Props = {};

const Main = (props: Props) => {
  const [registeredUser, setRegisteredUser] = React.useState("");
  const [error, setError] = React.useState("");

  const registerUser = (user: string): void => {
    if (user.toLowerCase().match(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/)) {
      setRegisteredUser(user);
      if (error !== "") {
        setError("");
      }
    } else {
      setError("Por favor, verifique seu cadastro");
    }
  };

  return (
    <div className={styles.container}>
      {registeredUser ? (
        <Dashboard registeredUser={registeredUser} />
      ) : (
        <NewUser registerUser={registerUser} />
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Main;
