import { CircularProgress } from '@mui/material';
import React from 'react';

export default function CircularInterminate() {
    return (
        <div sx={{
            display: 'flex',
            justifyContent: "center",
            '& > * + *': {
                marginLeft: '2em'
            }
        }}>
            <CircularProgress />
        </div>
    )
}