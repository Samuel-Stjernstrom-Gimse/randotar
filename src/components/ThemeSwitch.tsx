import {Switch, Tooltip} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons/faSun";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";

type Props = {
    darkMode: boolean
    toggleDarkMode: any
}

const ThemeSwitch = ({ darkMode, toggleDarkMode }: Props) => {

    return (
        <>
            <Tooltip title={darkMode ? 'dark theme' : 'light theme'} arrow={true} >
                <Switch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    icon={<FontAwesomeIcon style={{ backgroundColor: '#095252', borderRadius: '50%', aspectRatio: '1/1', padding: '2px' }} icon={faSun} />}
                    checkedIcon={<FontAwesomeIcon style={{ backgroundColor: '#595959', borderRadius: '50%', aspectRatio: '1/1', padding: '2px' }} icon={faMoon} />}
                />
            </Tooltip>
        </>
    )
}

export default ThemeSwitch