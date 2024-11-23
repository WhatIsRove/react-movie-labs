import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";

const MovieCredits = ({ credits }) => {

    const root = {
        display: "block-inline",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        
        padding: 1.5,
        margin: 0,
    };
    const chip = { 
        margin: 0.5,
    };

    return (
        <>
            <Typography variant="h4" component="h3">
                Movie Credits
            </Typography>

            <Typography variant="h5" component="h3">
                Cast:
            </Typography>

            <Paper
                component="ul"
                sx={{ ...root }}
            >
                {credits.cast.map((castMember) => (
                    <li>
                        <Chip label={`${castMember.name} as ${castMember.character}`} sx={{...chip}}/>
                    </li>
                ))}
            </Paper>

            <Typography variant="h5" component="h3">
                Crew:
            </Typography>
            <Paper
                component="ul"
                sx={{ ...root }}
            >
                {credits.crew.map((crewMember) => (
                    <li>
                        <Chip label={`${crewMember.name}: ${crewMember.job}`} sx={{...chip}} />
                    </li>
                ))}
            </Paper>
        </>
    );
};
export default MovieCredits;