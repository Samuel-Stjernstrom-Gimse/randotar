import {Box, Container} from "@mui/material";
import AvatarCreator from "./avatars/AvatarCreator";

const MainSection = () => {
  return (
      <Box width={'100%'} height={'100%'} border={'2px solid red'}>
          <AvatarCreator/>
      </Box>
  )
}

export default MainSection