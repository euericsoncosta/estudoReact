import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
  background: ${primaryDarkColor};
}
html, body, #root{
  height: 100%;
}
button{
  cursor: pointer;
  background: ${primaryColor};
  border: none;
  color: #fff;
  padding: 10px 2px;
  border-radius: 4px;
  font-weight: 700;


}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}

`;

export const Conteiner = styled.section`
  max-width: 300px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;