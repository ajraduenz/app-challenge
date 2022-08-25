import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NewUser from "./Components/NewUser";

type Props = {};

export const App = (props: Props) => {
  const [registeredUser, setRegisteredUser] = React.useState("");
  const [error, setError] = React.useState("");
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    const matchUrl = document.cookie.match(new RegExp("(^| )url=([^;]+)"));
    const matchName = document.cookie.match(new RegExp("(^| )name=([^;]+)"));

    if (matchName && matchUrl) {
      setRegisteredUser(matchName[2]);
      setUrl(matchUrl[2]);
      document.cookie = "url=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie =
        "name=;  Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }, []);

  function makeid(length: number) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const registerUser = (user: string, email: string): void => {
    if (
      user
        .toLowerCase()
        .match(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/) &&
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      console.log(user);
      setRegisteredUser(user);
      const randomUrl = makeid(5);
      document.cookie = `url=${randomUrl}`;
      document.cookie = `name=${user}`;
      document.cookie = `email=${email}`;
      setUrl(`${randomUrl}`);
      if (error !== "") {
        setError("");
      }
    } else {
      setError("Por favor, verifique seu cadastro");
    }
  };
  const deleteUser = (): void => {
    setUrl("");
    setRegisteredUser("");
    setError("");
    document.cookie = "url=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "name=;  Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "email=;  Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.pathname = "/";
  };

  function editUser(newUser: string) {
    setRegisteredUser(newUser);
    document.cookie = `name=${newUser}`;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NewUser registerUser={registerUser} url={url} error={error} />
          }
        />
        <Route
          path={`/dashboard-${url}`}
          element={
            <Dashboard
              registeredUser={registeredUser}
              editUser={editUser}
              deleteUser={deleteUser}
              error={error}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
