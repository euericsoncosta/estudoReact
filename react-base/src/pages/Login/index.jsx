import React from "react";
import { Title } from "./styled";
import { Conteiner } from "../../styles/GlobalStyles";

const app = () => {
  return (
    <Conteiner>
      <Title>
        Login, <small> Bem vindo</small>
      </Title>
      <p>lorem 5</p>
      <button>Enviar</button>
    </Conteiner>
  );
};

export default app;
