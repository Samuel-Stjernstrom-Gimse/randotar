import React, {useEffect, useState} from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {getTheme} from "./themes/theme";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

const App = () => {
    const localStorageThemeState = 'hasDarkTheme'
    const [darkMode, setDarkMode] = useState<boolean>(true)

    const toggleDarkMode = () => {
        const newTheme = !darkMode
        setDarkMode(newTheme);
        localStorage.setItem(localStorageThemeState, darkMode.toString())
    }

    useEffect(() => {
        const themeState = localStorage.getItem(localStorageThemeState)
        if (themeState !== null) {
            setDarkMode(themeState === 'false')
        }
    }, [])

    return (
        <>
            <ThemeProvider theme={getTheme(darkMode)} >
                <CssBaseline enableColorScheme />
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <MainSection />
                <Footer/>

            </ThemeProvider >
        </>
    )
}

export default App;
