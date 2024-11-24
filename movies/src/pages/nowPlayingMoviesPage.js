import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovies } from "../api/tmdb-api"
import { useQuery } from "react-query";
import Spinner from "../components/spinner"
import { MoviesContext } from "../contexts/moviesContext";

const NowPlayingMoviesPage = (props) => {
    const {language} = useContext(MoviesContext)
    const { data, error, isLoading, isError } = useQuery(['now-playing', {language: language}], getNowPlayingMovies);

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return (
        <PageTemplate 
            title='Now-Playing'
            movies={movies}
            action={(movie) => {
                //return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};
export default NowPlayingMoviesPage;