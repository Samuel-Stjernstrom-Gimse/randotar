import React, {useState} from 'react';
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import ThemeSwitch from "./components/ThemeSwitch";
import {getTheme} from "./theme/theme";
import Header from "./components/Header";

const App = () => {

    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <ThemeProvider theme={getTheme(darkMode)}>
                <CssBaseline enableColorScheme/>
                <Box>
                    <Header/>
                    <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </Box>
            </ThemeProvider>
        </>
    )
}

export default App;
