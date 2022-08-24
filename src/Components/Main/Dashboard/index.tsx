type Props = {
  registeredUser: string;
  invalidLink: boolean;
};

const Dashboard = ({ registeredUser, invalidLink }: Props) => {
  return (
    <div>
      {invalidLink ? (
        <>
          <h1>Link expirado</h1>
          <div>O link foi expirado, faça o cadastro novamente</div>
          <div>       
            <a href="/">Voltar ao cadastro</a>
          </div>
        </>
      ) : (
        <>
          <h1>Dashboard</h1>
          <strong>Bem vindo, {registeredUser}</strong>
          <p>A proxima vez que você voltar, use a url:</p>
          <strong>{window.location.href}</strong>
        </>
      )}
    </div>
  );
};

export default Dashboard;
