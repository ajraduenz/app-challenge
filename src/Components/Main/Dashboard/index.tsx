import React from "react";

type Props = {
  registeredUser: string;
};

const Dashboard = ({ registeredUser }: Props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <strong>Bem vindo, {registeredUser}</strong>
    </div>
  );
};

export default Dashboard;
