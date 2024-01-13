import {createTheme} from '@mui/material';

export const getTheme = (isDarkMode: boolean) => {
    return isDarkMode ? darkTheme : lightTheme;
}

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#001935', // Your primary color
        },
        secondary: {
            main: '#9b9b9b', // Your secondary color
        },
        background: {
            default: '#c7c7c7', // Dark background color
            paper: '#8da2a2', // Dark paper color
        }
    },
    typography: {
        fontFamily: 'Arial',
        fontSize: 14
    }
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#a29a9a', // Your primary color
        },
        secondary: {
            main: '#00444c', // Your sSecondary color
        },
        background: {
            default: '#012c2c', // Dark background color
            paper: '#8d8d8d', // Dark paper color
        }
    },
    typography: {
        fontFamily: 'Arial',
        fontSize: 14
    }
});