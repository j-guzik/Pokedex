import Main from "./Components/Main";
import "./Components/style.css";
import AnimatedBg from "react-animated-bg";
import useDarkMode from "./styles/useDarkMode";
import styled, { ThemeProvider } from "styled-components";
import Toogle from "./Components/Toogle";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";



function App() {
  const [theme, toogleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
    
        <GlobalStyles />
        <Toogle theme={theme} toogleTheme={toogleTheme} />
        <Main />
    
    </ThemeProvider>
  );
}

export default App;
