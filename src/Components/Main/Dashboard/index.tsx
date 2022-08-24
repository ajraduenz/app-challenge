type Props = {
  registeredUser: string;
  url?: string;
};

const Dashboard = ({ registeredUser }: Props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <strong>Bem vindo, {registeredUser}</strong>
      <p>A proxima vez que você voltar, use a url:</p>
      <strong>{window.location.href}</strong>
    </div>
  );
};

export default Dashboard;
