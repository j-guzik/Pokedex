import { useState } from "react";

function useDarkMode() {

    const [theme, setTheme] = useState('light');

    const toogleTheme = ()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return [ theme, toogleTheme]
  }
  
  export default useDarkMode;
  