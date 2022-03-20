import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
  header h3{
    background: ${({ theme }) => theme.table};
    margin: 40px 0 10px;
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

  .pokemon-row {
    height: 117px;
  }

  .pokemon-row:hover{
    background: ${({ theme }) => theme.hover};
    cursor: pointer;
  }

  .button-nav{
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonText};
    font-weight: 600;
    position: absolute;
  margin-top: -7px;
  padding: 5px 20px 8px;
  border: none;
  width: 100px;
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

  .close{
    position: absolute;
    right: 15px;
    top: 15px;
    border: none;
    background-color: ${({ theme }) => theme.modal}!important;
    padding: 0;
  }

  div.container {
    width: 75vw;
    position: relative;
  }
  
  
  
  .table-striped > tbody > tr:nth-of-type(odd) > * {
    --bs-table-accent-bg: none;
  }
  
  
  
  
  
  .table-bordered > :not(caption) > * {
    border-width: 5px 0;
  }
  
  .th-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  td, th{
      text-align: center; 
      vertical-align: middle;
  }
  
  
  
  .buttons {
    height: 65px;
  }
  
  
  
  .next {
    right: 0;
    margin-right: 13px;
  }
  
  .previous {
    left: 0;
    margin-left: 13px;
  }
  
  
  
  th:nth-last-child(1),
  th:nth-child(1) {
    padding-bottom: 10px;
  }
  
  img {
    -webkit-animation: appear 1s;
    animation: appear 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  
    @-webkit-keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  
    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  
  
  
  .pokemon-row td:nth-last-child(1) {
    width: 139px;
  }
  
  .pokemon-row td:nth-last-child(1) img {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1.5s;
    position: relative;
    right: 0;
  }
  
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
      right: -135px;
      top: 0;
    }
    50% {
      opacity: 0;
      right: -40px;
    }
    75%{
        top: -18px;
    }
    100% {
      opacity: 1;
      right: 0;
      top: 0;
    }
  }
  
  .pokemon-row td:nth-last-child(1) img {
    margin-left: 14px;
  }

  .dark-mode svg{
      z-index: 888;
  }

  @media only screen and (min-width: 768px) {
    .container{
        max-width: inherit;
    }
  }

  @media only screen and (min-width: 576px) {
    .container{
        max-width: inherit;
    }
  }

  
  @media only screen and (max-width: 982px) {
    .container{
        width: 100vw!important;
        padding-top: 60px;
    }
    .dark-mode svg{
        left: 1rem;
    }
    .next{
        left: 13px;
    }

    .previous{
        bottom: -7px;
    }
  }
`;

export const lightTheme = {
  body: "#80808033",
  text: "#121212",
  button: "#000000d1",
  buttonText: "#fff",
  table: "#fff",
  border: "#80808033",
  hover: "#f5f5f5",
  input: "#fff",
  inputBorder: "#black",
  modal: "#f5f5f5",
};

export const darkTheme = {
  body: "#212529",
  text: "#fff",
  button: "#f5f5f5",
  buttonText: "#212529",
  table: "#a7a7a7",
  border: "#212529",
  hover: "#fbfbfb6b",
  input: "#a7a7a7",
  inputBorder: "#fff",
  modal: "#a7a7a7",
};
