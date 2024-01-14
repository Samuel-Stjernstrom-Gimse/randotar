import { Box } from "@mui/material";
import AvatarCreator from "./avatars/AvatarCreator";

const MainSection = () => {
    return (
        <Box
            marginTop={'10vh'}
            width={'100%'}
            height={'100%'}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <AvatarCreator />
        </Box>
    );
};

export default MainSection;
