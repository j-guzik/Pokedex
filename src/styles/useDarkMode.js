import { useState, useEffect } from "react";

function useDarkMode() {

    const [theme, setTheme] = useState('light');

    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    }

    const toogleTheme = ()=>{
        theme === 'light' ? setMode('dark') : setMode('light');
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('dark');
    },[])

    return [ theme, toogleTheme]
  }
  
  export default useDarkMode;
  