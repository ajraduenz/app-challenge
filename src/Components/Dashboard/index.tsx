import React from "react";
import EditUser from "../EditUser";
import styles from "./index.module.css";
type Props = {
  registeredUser: string;
  editUser: (newUser: string) => void;
  error: string;
  deleteUser: () => void;
};

const Dashboard = ({ registeredUser, editUser, error, deleteUser }: Props) => {
  const [modalEdit, setModalEdit] = React.useState(false);
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <strong>Bem vindo, {registeredUser}</strong>
      <div className={styles.buttons}>
        <button
        className={styles.button}
          onClick={() => {
            setModalEdit(true);
          }}
        >
          Editar nome de usuário
        </button>
        <button
        className={styles.button}
          onClick={() => {
            deleteUser();
          }}
        >
          Excluir usuário
        </button>
        {modalEdit && (
          <EditUser setModalEdit={setModalEdit} editUser={editUser} />
        )}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

export default Dashboard;
