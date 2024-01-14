import React, {useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import { getRandomColorHex, getRandomNumberInRange } from "../../helpers/randomHelper";
import {acsArray, hatArray, imageHelper} from "../../helpers/imageHelper";
import './AvatarCreator.css';

type ImageStyles = {
    filter: string;
}

type AvatarState = {
    imageStyles: ImageStyles;
    backgroundColor: string;
    acs: string;
    hat: string;
}

const AvatarCreator = () => {

    const [avatarState, setAvatarState] = useState<AvatarState>({
        imageStyles: {
            filter: `drop-shadow(0px 0px 10px ${getRandomColorHex()}) drop-shadow(0px 0px 10px ${getRandomColorHex()}) drop-shadow(0px 0px 10px ${getRandomColorHex()})`
        },
        backgroundColor: getRandomColorHex(),
        acs: acsArray[getRandomNumberInRange(0, acsArray.length - 1)],
        hat: hatArray[getRandomNumberInRange(0, hatArray.length - 1)],
    });

    const saveAvatarToLocalStorage = () => {
        // Retrieve the existing saved avatars from localStorage (if any)
        const savedAvatars = JSON.parse(localStorage.getItem('savedAvatars') || '[]');

        // Add the current avatarState to the array of saved avatars
        savedAvatars.push(avatarState);

        // Save the updated array back to localStorage
        localStorage.setItem('savedAvatars', JSON.stringify(savedAvatars));
    };

    const loadAvatarToLocalStorage = () => {
        // Retrieve the existing saved avatars from localStorage (if any)
        const savedAvatars = JSON.parse(localStorage.getItem('savedAvatars') || '[]');
        setAvatarState(savedAvatars[savedAvatars.length - 1]);
    }

    return (
        <Box>
            <Box sx={{
                backgroundColor: avatarState.backgroundColor,
                display: 'inline-block',
            }} className="avatar-container">
                <img className="avatar-image" src={imageHelper.skin} alt="skin" style={avatarState.imageStyles} />
                <img className="avatar-image" src={imageHelper.outline} alt="outline" style={avatarState.imageStyles} />
                <img className="avatar-image" src={imageHelper.shirt} alt="shirt" style={avatarState.imageStyles} />
                <img className="avatar-image" src={avatarState.acs} alt="acs" style={avatarState.imageStyles} />
                <img className="avatar-image" src={avatarState.hat} alt="hat" style={avatarState.imageStyles} />
            </Box>

            <Box marginTop={'10px'} marginLeft={'-25px'}>
                <Button sx={{ margin: '3px' }} color={'success'} variant={'contained'} onClick={saveAvatarToLocalStorage}>Save Avatar</Button>
                <Button sx={{ margin: '3px' }} color={'info'} variant={'contained'} onClick={loadAvatarToLocalStorage}>Load Avatar</Button>
            </Box>

            <Box>
                {JSON.parse(localStorage.getItem('savedAvatars') || '[]').map((avatar: AvatarState, index: number) => {
                    return (
                        <Box key={index} sx={{
                            backgroundColor: avatar.backgroundColor,
                            display: 'inline-block',
                        }} className="avatar-container">
                            <img className="avatar-image" src={imageHelper.skin} alt="skin" style={avatar.imageStyles} />
                            <img className="avatar-image" src={imageHelper.outline} alt="outline" style={avatar.imageStyles} />
                            <img className="avatar-image" src={imageHelper.shirt} alt="shirt" style={avatar.imageStyles} />
                            <img className="avatar-image" src={avatar.acs} alt="acs" style={avatar.imageStyles} />
                            <img className="avatar-image" src={avatar.hat} alt="hat" style={avatar.imageStyles} />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default AvatarCreator;
