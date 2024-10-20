import React from "react";
import Grid from "@mui/material/Grid2";
import MovieCard from "../components/movieCard";
import MovieList from "../components/movieList";

const HomePage = (props) => {
    const movies = props.movies;

    return (
        <Grid container>
            <Grid size={12}>
                <h1> HomePage </h1>
            </Grid>
            <Grid size={3}>
                <MovieList movies={movies}></MovieList>
            </Grid>
        </Grid>
    );
};
export default HomePage;