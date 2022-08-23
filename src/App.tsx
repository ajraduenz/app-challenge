import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Dashboard from "./Components/Main/Dashboard";

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/dashboard/:id" element={<Dashboard registeredUser=""/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
