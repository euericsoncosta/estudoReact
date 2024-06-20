import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import history from "./services/history";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
