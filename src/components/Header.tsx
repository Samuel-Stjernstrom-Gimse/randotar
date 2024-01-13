import {Box, createTheme, List, ListItem, Switch, Typography, useTheme} from "@mui/material";
import MySavedButton from "./MySavedButton";

const Header = () => {

    const theme = useTheme()

    return (
        <Box>
            <Box padding={'10px'} display={"flex"} alignItems={'center'}
                 justifyContent={"space-between"}
                 width={'100vw'} maxHeight={'61px'}
                 height={'60px'} textAlign={'center'} position={'fixed'} bgcolor={theme.palette.secondary.main} borderRadius={'0 0 2px 2px'} boxShadow={'2px 0 3px #027d7d '} >
                <Switch/>
                <Typography variant={"h5"}>Ran(AVATAR)dom</Typography>
                <MySavedButton />
            </Box>
        </Box>
    )
}

export default Header
