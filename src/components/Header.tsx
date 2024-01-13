import {Box, Button, Typography, useTheme} from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";

type Props = {
    darkMode: boolean
    toggleDarkMode: any
}

const Header = ({ darkMode, toggleDarkMode }: Props) => {

    const theme = useTheme()

    return (
        <Box padding={'10px'}
             display={"flex"}
             alignItems={'center'}
             justifyContent={"space-between"}
             width={'100vw'}
             maxHeight={'61px'}
             height={'60px'}
             textAlign={'center'}
             bgcolor={theme.palette.secondary.main}
             borderRadius={'0 0 2px 2px'}
             boxShadow={'2px 0 3px #027d7d '}
        >
            <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Typography variant={"h5"}>Ran(AVATAR)dom</Typography>
            <Button type={"button"} variant={"outlined"}>Saved Avatars</Button>
        </Box>
    )
}

export default Header
