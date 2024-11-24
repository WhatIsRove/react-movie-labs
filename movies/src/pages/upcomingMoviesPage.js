import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api"
import { useQuery } from "react-query";
import Spinner from "../components/spinner"
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = (props) => {
    const {language} = useContext(MoviesContext)
    const { data, error, isLoading, isError } = useQuery(['upcoming', {language: language}], getUpcomingMovies);

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return (
        <PageTemplate 
            title='Upcoming Movies'
            movies={movies}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};
export default UpcomingMoviesPage;