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
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import MovieList from "../movieList";

const MovieRecommends = ({ recommends, action }) => {

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

    const navigate = useNavigate();

    return (
        <>
            <Paper>
                <Typography variant="h4" component="h3">
                    Recommendations
                </Typography>
            </Paper>

            <Grid container sx={{ flex: "1 1 500px" }}>
                <MovieList action={action} movies={recommends.results}></MovieList>
            </Grid>

        </>
    );
};
export default MovieRecommends;