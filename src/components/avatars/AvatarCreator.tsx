import React from 'react';
import {Box} from "@mui/material";

const AvatarCreator = () => {
    return (
        <Box >
            <img src={''} alt={'panis'}/>
            <img src={''} style={{ filter: 'drop-shadow(100px 0 rgb(255, 255, 0)', transform:'translateY(-100px)', height: '100px', width: '100px' }} alt=""/>
        </Box>
    );
};

export default AvatarCreator;