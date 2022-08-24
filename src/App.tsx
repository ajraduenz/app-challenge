import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Main/Dashboard";
import NewUser from "./Components/Main/NewUser";

type Props = {};

export const App = (props: Props) => {
  const [registeredUser, setRegisteredUser] = React.useState("");
  const [error, setError] = React.useState("");
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    const matchUrl = document.cookie.match(
      new RegExp("(^| )" + "url" + "=([^;]+)"),
    );
    const matchName = document.cookie.match(
      new RegExp("(^| )" + "name" + "=([^;]+)"),
    );
    if (matchName && matchUrl) {
      setRegisteredUser(matchName[2]);
      setUrl(matchUrl[2]);    
      // document.cookie.split(";").forEach(function (c) {
      //   document.cookie = c
      //     .replace(/^ +/, "")
      //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      // });
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
  const registerUser = (user: string): void => {
    if (
      user.toLowerCase().match(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/)
    ) {
      setRegisteredUser(user);
      const randomUrl = makeid(5);
      document.cookie = `url=${randomUrl}`;
      document.cookie = `name=${user}`;
      setUrl(`/dashboard/${randomUrl}`);
      window.location.pathname = `/dashboard/${randomUrl}`;
      if (error !== "") {
        setError("");
      }
    } else {
      setError("Por favor, verifique seu cadastro");
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<NewUser registerUser={registerUser} error={error} />}
        />
      </Routes>
      <Routes>
        <Route
          path={`/dashboard/${url}`}
          element={<Dashboard registeredUser={registeredUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
