import React from "react";

import { Conteiner } from "../../styles/GlobalStyles";
import history from "../../services/history";

const page404 = () => {
  history.push("/");
  return (
    <Conteiner>
      <h1>Essa Pagina nao existe</h1>;
    </Conteiner>
  );
};

export default page404;
