import {Box , useTheme} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

const Footer = () => {
    return (
        <Box  display={"flex"} justifyContent={'space-around'} alignItems={'center'} textAlign={"center"} width={'100%'} height={'90px'} position={"absolute"} bottom={0} bgcolor={useTheme().palette.primary.main}>
            <FontAwesomeIcon icon={faGithub} fontSize={40} color={useTheme().palette.secondary.main} />
            <FontAwesomeIcon icon={faLinkedinIn} fontSize={40} color={useTheme().palette.secondary.main} />
        </Box>
    )
}

export default Footer