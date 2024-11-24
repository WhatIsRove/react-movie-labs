import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api"
import { useQuery } from "react-query";
import Spinner from "../components/spinner"
import { MoviesContext } from "../contexts/moviesContext";

const TopRatedMoviesPage = (props) => {
    const {language} = useContext(MoviesContext)
    const { data, error, isLoading, isError } = useQuery(['top-rated', {language:language}], getTopRatedMovies);

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return (
        <PageTemplate 
            title='Top Rated Movies'
            movies={movies}
            action={(movie) => {
                //return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};
export default TopRatedMoviesPage;