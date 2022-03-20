import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
  header h3{
    background: ${({ theme }) => theme.table};
  }

  table {
    background: ${({ theme }) => theme.table};
    color: ${({ theme }) => theme.text}!important;
  }

  tr {
    border-bottom-color: ${({ theme }) => theme.border};
    border-top: none;
  }

  .table-striped>tbody>tr:nth-of-type(odd)>*{
    color: ${({ theme }) => theme.text}!important;
  }

  .pokemon-row:hover{
    background: ${({ theme }) => theme.hover};
  }

  .button-nav{
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonText};
    font-weight: 600;
  }

  .dark-mode{
      cursor: pointer;
  }

 .search{
     display: flex;
 }

 input {
    border: none;
    border-bottom: 1px solid #e5e5e5;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.input};
  }
  
  input:focus-visible {
    outline: none;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.inputBorder};
  }

  .ReactModal__Content.ReactModal__Content--after-open{
    background-color: ${({ theme }) => theme.modal}!important;
    -webkit-box-shadow: 1px 2px 24px -11px rgba(66, 68, 90, 1);
    -moz-box-shadow: 1px 2px 24px -11px rgba(66, 68, 90, 1);
    box-shadow: 1px 2px 24px -11px rgba(66, 68, 90, 1); 
    inset: 125px !important;
    height: 45vh;
  }
`;

export const lightTheme = {
  body: "#80808033",
  text: "#121212",
  button: "#000000d1",
  buttonText: "#white",
  table: "#fff",
  border: "#80808033",
  hover: "#whitesmoke",
  input: "#white",
  inputBorder: "#black",
  modal: "whitesmoke",
};

export const darkTheme = {
  body: "#212529",
  text: "#fff",
  button: "whitesmoke",
  buttonText: "#212529",
  table: "#a7a7a7",
  border: "#212529",
  hover: "#fbfbfb6b",
  input: "#a7a7a7",
  inputBorder: "#white",
  modal: "#a7a7a7",
};
